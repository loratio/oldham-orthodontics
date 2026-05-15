// Permissive field validators. Each returns an error string or null.

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_DIGITS_RE = /\d{6,}/;

export function required(value: string | null | undefined, label: string) {
  if (!value || !value.trim()) return `${label} is required.`;
  return null;
}

export function email(value: string) {
  if (!value.trim()) return "Email is required.";
  if (!EMAIL_RE.test(value.trim())) return "Please enter a valid email address.";
  return null;
}

export function phone(value: string) {
  if (!value.trim()) return "Phone number is required.";
  if (!PHONE_DIGITS_RE.test(value)) return "Please enter a valid phone number.";
  return null;
}

export function optionalPhone(value: string) {
  if (!value.trim()) return null;
  if (!PHONE_DIGITS_RE.test(value)) return "Please enter a valid phone number.";
  return null;
}

export function postcode(value: string) {
  if (!value.trim()) return "Postcode is required.";
  return null;
}

export function dateOfBirth(value: string) {
  if (!value.trim()) return "Date of birth is required.";
  const parsed = new Date(value);
  if (Number.isNaN(parsed.getTime())) return "Please enter a valid date.";
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  if (parsed > today) return "Date of birth cannot be in the future.";
  const minDob = new Date();
  minDob.setFullYear(minDob.getFullYear() - 120);
  if (parsed < minDob) return "Please enter a valid date of birth.";
  return null;
}
