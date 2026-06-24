export interface MediumPost {
  id: string;
  title: string;
  url: string;
  pubDate: string;
  categories: string[];
  excerpt: string;
  readTime: string;
}

function extractCdata(xml: string, tag: string): string {
  const match = xml.match(new RegExp(`<${tag}[^>]*>(?:<!\\[CDATA\\[([\\s\\S]*?)\\]\\]>|([^<]*))<\\/${tag}>`, "i"));
  if (!match) return "";
  return (match[1] ?? match[2] ?? "").trim();
}

function extractAll(xml: string, tag: string): string[] {
  const re = new RegExp(`<${tag}[^>]*>(?:<!\\[CDATA\\[([\\s\\S]*?)\\]\\]>|([^<]*))<\\/${tag}>`, "gi");
  const results: string[] = [];
  let m: RegExpExecArray | null;
  while ((m = re.exec(xml)) !== null) {
    const val = (m[1] ?? m[2] ?? "").trim();
    if (val) results.push(val);
  }
  return results;
}

function stripHtml(html: string): string {
  return html
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/\s+/g, " ")
    .trim();
}

function estimateReadTime(text: string): string {
  const words = text.split(/\s+/).length;
  const minutes = Math.max(1, Math.round(words / 200));
  return `${minutes} min read`;
}

export async function getMediumPosts(): Promise<MediumPost[]> {
  try {
    const res = await fetch("https://medium.com/feed/@HelanaBakhsh", {
      next: { revalidate: 3600 },
    });
    if (!res.ok) return [];
    const xml = await res.text();

    const itemRe = /<item>([\s\S]*?)<\/item>/gi;
    const posts: MediumPost[] = [];
    let m: RegExpExecArray | null;

    while ((m = itemRe.exec(xml)) !== null) {
      const item = m[1];

      const title = extractCdata(item, "title");
      if (!title) continue;

      const linkMatch = item.match(/<link>([^<]+)<\/link>/i) ??
        item.match(/<guid[^>]*>([^<]+)<\/guid>/i);
      const url = linkMatch ? linkMatch[1].trim() : "";
      if (!url) continue;

      const pubDate = extractCdata(item, "pubDate") || item.match(/<pubDate>([^<]+)<\/pubDate>/i)?.[1]?.trim() || "";
      const categories = extractAll(item, "category");

      const descHtml = extractCdata(item, "description");
      const plainText = stripHtml(descHtml);
      const excerpt = plainText.slice(0, 200).replace(/\s+\S*$/, "") + (plainText.length > 200 ? "…" : "");

      posts.push({
        id: url,
        title,
        url,
        pubDate,
        categories,
        excerpt,
        readTime: estimateReadTime(plainText),
      });
    }

    return posts;
  } catch {
    return [];
  }
}
