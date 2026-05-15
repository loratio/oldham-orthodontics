/**
 * PRM form submission helper.
 *
 * Posts a serialized <form> to prm.tio.work with the TDS-API-KEY header.
 * Honeypot fields ("oo_hp_a", "oo_hp_b") short-circuit submission silently
 * so bots get a "success" response without a lead being created.
 *
 * Env vars (injected at build time):
 *   NEXT_PUBLIC_PRM_ENDPOINT   – full v4-tds endpoint URL
 *   NEXT_PUBLIC_TDS_API_KEY    – account-level API key
 *   NEXT_PUBLIC_PRM_ACCOUNT_ID – account id (used for file uploads)
 */

export interface SubmitResult {
  success: boolean;
  error?: string;
}

export interface UploadResult {
  success: boolean;
  url?: string;
  name?: string;
  error?: string;
}

const MAX_FILE_SIZE_BYTES = 10 * 1024 * 1024;

export async function uploadFile(file: File): Promise<UploadResult> {
  const endpoint = process.env.NEXT_PUBLIC_PRM_ENDPOINT;
  const apiKey = process.env.NEXT_PUBLIC_TDS_API_KEY;
  const accountId = process.env.NEXT_PUBLIC_PRM_ACCOUNT_ID;

  if (!endpoint || !apiKey || !accountId) {
    return { success: false, error: "Upload configuration missing" };
  }

  if (file.size > MAX_FILE_SIZE_BYTES) {
    return { success: false, error: `${file.name} exceeds 10MB limit` };
  }

  const uploadUrl =
    endpoint.replace("/api/xcms-to-prm-v4-tds", "") + "/api/v2/upload-file";

  const fd = new FormData();
  fd.append("file", file);
  fd.append("accountid", accountId);

  try {
    const response = await fetch(uploadUrl, {
      method: "POST",
      headers: { "TDS-API-KEY": apiKey },
      body: fd,
    });
    if (!response.ok) {
      return { success: false, error: `Upload failed (${response.status})` };
    }
    const data = (await response.json()) as {
      success?: boolean;
      url?: string;
      name?: string;
    };
    if (data && data.success && data.url) {
      return { success: true, url: data.url, name: data.name ?? file.name };
    }
    return { success: false, error: "Upload rejected by server" };
  } catch (err) {
    return {
      success: false,
      error:
        err instanceof Error ? `Upload error: ${err.message}` : "Upload error",
    };
  }
}

// Generic names so password managers / autofill don't trip them.
const HONEYPOT_FIELDS = ["oo_hp_a", "oo_hp_b"];

export async function submitPrmForm(
  form: HTMLFormElement,
): Promise<SubmitResult> {
  const endpoint = process.env.NEXT_PUBLIC_PRM_ENDPOINT;
  const apiKey = process.env.NEXT_PUBLIC_TDS_API_KEY;

  if (!endpoint || !apiKey) {
    return { success: false, error: "Form configuration missing" };
  }

  for (const name of HONEYPOT_FIELDS) {
    const field = form.querySelector<HTMLInputElement>(`[name="${name}"]`);
    if (field && field.value) {
      if (process.env.NODE_ENV !== "production") {
        console.warn(
          `[formSubmit] honeypot "${name}" tripped (value: ${JSON.stringify(field.value)}). Skipping PRM.`,
        );
      }
      return { success: true };
    }
  }

  const formData = new FormData(form);
  const params = new URLSearchParams();
  formData.forEach((value, key) => {
    if (!HONEYPOT_FIELDS.includes(key)) {
      params.append(key, value.toString());
    }
  });

  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "TDS-API-KEY": apiKey,
      },
      body: params.toString(),
    });

    if (!response.ok) {
      const text = await response.text().catch(() => "");
      return {
        success: false,
        error: `PRM ${response.status}${text ? `: ${text.slice(0, 200)}` : ""}`,
      };
    }

    return { success: true };
  } catch (err) {
    return {
      success: false,
      error:
        err instanceof Error
          ? `Network error: ${err.message}`
          : "Network error",
    };
  }
}
