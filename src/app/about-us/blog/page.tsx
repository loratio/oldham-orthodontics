import type { Metadata } from "next";
import Link from "next/link";
import "../../inner-page.css";

import InnerHero from "../../components/inner/InnerHero";
import SectionDivider from "../../components/SectionDivider";
import { posts } from "./posts";

export const metadata: Metadata = {
  title: "Blog | Orthodontic Advice & Insights",
  description: "Articles and tips on orthodontic treatment, written by the team at Oldham Orthodontics. Invisalign® care, braces advice, jaw surgery recovery and more.",
};

const WARM = "#faf7f4";
const POSTS_PER_PAGE = 9;

function formatDate(iso: string): string {
  const d = new Date(iso);
  return d.toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
}

type SearchParams = Promise<{ page?: string }>;

export default async function BlogIndexPage({ searchParams }: { searchParams: SearchParams }) {
  const { page } = await searchParams;
  const totalPages = Math.max(1, Math.ceil(posts.length / POSTS_PER_PAGE));
  const requested = parseInt(page ?? "1", 10);
  const currentPage = Number.isFinite(requested) && requested >= 1 && requested <= totalPages ? requested : 1;
  const start = (currentPage - 1) * POSTS_PER_PAGE;
  const pagedPosts = posts.slice(start, start + POSTS_PER_PAGE);

  const pageHref = (n: number) => (n === 1 ? "/about-us/blog" : `/about-us/blog?page=${n}`);

  return (
    <>
      <InnerHero
        label="BLOG"
        title={
          <>
            Orthodontic advice
            <br />
            <span>from our team</span>
          </>
        }
        description="Tips, answers and guides from the Specialist Orthodontists at Oldham Orthodontics. Practical advice on braces, Invisalign, retainers, jaw surgery and everything in between."
        image="/images/blog-hero.webp"
        imageAlt="A woman relaxing on the sofa reading on her tablet"
      />

      <SectionDivider from={WARM} to={WARM} />

      <section className="blog-index-section">
        <div className="blog-index-container">
          <div className="blog-grid">
            {pagedPosts.map((p) => (
              <Link key={p.slug} href={`/about-us/blog/${p.slug}`} className="blog-card">
                <div className="blog-card-image">
                  <img src={p.image} alt={p.title} width={1600} height={900} loading="lazy" />
                </div>
                <div className="blog-card-body">
                  <span className="blog-card-date">{formatDate(p.published)}</span>
                  <h3>{p.title}</h3>
                  <p>{p.excerpt}</p>
                  <span className="blog-card-readmore">READ ARTICLE →</span>
                </div>
              </Link>
            ))}
          </div>

          {totalPages > 1 && (
            <nav className="blog-pagination" aria-label="Blog pagination">
              {currentPage > 1 ? (
                <Link href={pageHref(currentPage - 1)} className="blog-pagination-step">← Previous</Link>
              ) : (
                <span className="blog-page-disabled blog-pagination-step">← Previous</span>
              )}
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) =>
                n === currentPage ? (
                  <span key={n} className="blog-page-current" aria-current="page">{n}</span>
                ) : (
                  <Link key={n} href={pageHref(n)}>{n}</Link>
                )
              )}
              {currentPage < totalPages ? (
                <Link href={pageHref(currentPage + 1)} className="blog-pagination-step">Next →</Link>
              ) : (
                <span className="blog-page-disabled blog-pagination-step">Next →</span>
              )}
            </nav>
          )}
        </div>
      </section>
    </>
  );
}
