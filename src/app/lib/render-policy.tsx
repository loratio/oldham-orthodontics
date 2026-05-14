import React, { Fragment } from "react";

const URL_RE = /(https?:\/\/[^\s)]+)|([\w.-]+@[\w.-]+\.\w+)/g;

function autolink(text: string): React.ReactNode {
  const parts: React.ReactNode[] = [];
  let lastIdx = 0;
  for (const m of text.matchAll(URL_RE)) {
    const idx = m.index!;
    if (idx > lastIdx) parts.push(text.slice(lastIdx, idx));
    const url = m[0];
    if (url.includes("@") && !url.startsWith("http")) {
      parts.push(<a key={idx} href={`mailto:${url}`}>{url}</a>);
    } else {
      parts.push(<a key={idx} href={url} target="_blank" rel="noopener noreferrer">{url}</a>);
    }
    lastIdx = idx + url.length;
  }
  if (lastIdx < text.length) parts.push(text.slice(lastIdx));
  return parts.length === 1 ? parts[0] : <>{parts.map((p, i) => <Fragment key={i}>{p}</Fragment>)}</>;
}

export function renderPolicy(content: string): React.ReactNode {
  const blocks = content.trim().split(/\n{2,}/);
  const out: React.ReactNode[] = [];
  let listBuffer: string[] = [];

  const flushList = () => {
    if (listBuffer.length) {
      out.push(
        <ul key={`ul-${out.length}`}>
          {listBuffer.map((item, j) => (
            <li key={j}>{autolink(item)}</li>
          ))}
        </ul>
      );
      listBuffer = [];
    }
  };

  for (const block of blocks) {
    const trimmed = block.trim();
    if (!trimmed) continue;
    if (trimmed.startsWith("# ")) {
      // skip top-level title - shown in hero
      flushList();
      continue;
    }
    if (trimmed.startsWith("## ")) {
      flushList();
      out.push(<h2 key={out.length}>{trimmed.slice(3)}</h2>);
      continue;
    }
    if (trimmed.startsWith("### ")) {
      flushList();
      out.push(<h3 key={out.length}>{trimmed.slice(4)}</h3>);
      continue;
    }
    if (trimmed.startsWith("- ")) {
      // Block of one or more list items
      const items = trimmed
        .split(/\n(?=- )/)
        .map((l) => l.replace(/^- /, "").trim())
        .filter(Boolean);
      listBuffer.push(...items);
      continue;
    }
    flushList();
    out.push(<p key={out.length}>{autolink(trimmed)}</p>);
  }
  flushList();
  return out;
}
