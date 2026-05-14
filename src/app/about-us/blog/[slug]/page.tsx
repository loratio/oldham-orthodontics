import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import "../../../inner-page.css";

import { renderPolicy } from "../../../lib/render-policy";
import { getPost, posts } from "../posts";

type Params = Promise<{ slug: string }>;

export async function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return { title: "Article not found" };
  return {
    title: post.title,
    description: post.excerpt,
  };
}

function formatDate(iso: string): string {
  const d = new Date(iso);
  return d.toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
}

export default async function BlogPostPage({ params }: { params: Params }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <section className="blog-post-section">
      <div className="blog-post-container">
        <Link href="/about-us/blog" className="blog-post-back">
          ← Back to all articles
        </Link>
        <div className="blog-post-meta">{formatDate(post.published)}</div>
        <h1>{post.title}</h1>
        <div className="blog-post-image">
          <img src={post.image} alt={post.title} width={1600} height={900} loading="lazy" />
        </div>
        <div className="blog-post-body">{renderPolicy(post.body)}</div>
      </div>
    </section>
  );
}
