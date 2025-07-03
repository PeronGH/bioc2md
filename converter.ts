import type { BioCDocument } from "./schema.ts";

export function convertToMarkdown(document: BioCDocument): string {
  const paragraphs: string[] = [];

  for (const { infons: { type, file }, text } of document.passages) {
    switch (type) {
      case "front":
        paragraphs.push(`# ${text}`);
        break;
      case "abstract":
        paragraphs.push(`## Abstract\n\n${text}`);
        break;
      case "title_1":
        paragraphs.push(`## ${text}`);
        break;
      case "title_2":
        paragraphs.push(`### ${text}`);
        break;
      case "title_3":
        paragraphs.push(`#### ${text}`);
        break;
      case "paragraph":
        paragraphs.push(text);
        break;
      case "fig_title_caption":
        paragraphs.push(`##### ${text}`);
        break;
      case "fig_caption":
        paragraphs.push(`![${text}](${file})`);
        break;
    }
  }

  return paragraphs.join("\n\n");
}
