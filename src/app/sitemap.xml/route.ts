import { NextResponse } from "next/server";

export async function GET() {
  const baseUrl = "https://serrurierservice.vercel.app";
  const pages = [
    "",
    "mentions-legales",
    "confidentialite",
    "cgu",
    // Adaugă aici și alte pagini dacă ai
  ];

  const urls = pages
    .map(
      (page) => `\n    <url>\n      <loc>${baseUrl}/${page}</loc>\n      <changefreq>monthly</changefreq>\n      <priority>0.8</priority>\n    </url>`
    )
    .join("");

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n    ${urls}\n  </urlset>`;

  return new NextResponse(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
} 