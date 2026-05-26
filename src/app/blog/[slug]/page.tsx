import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { blogPosts } from "@/data/blogPosts";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: `${post.title} | Helana Nosratbakhsh`,
    description: post.excerpt,
  };
}

function renderBody(body: string[]): React.ReactNode[] {
  return body.map((block, i) => {
    if (block.startsWith("## ")) {
      return (
        <h2
          key={i}
          className="font-serif text-3xl font-light text-charcoal mt-14 mb-5 leading-tight"
        >
          {block.replace("## ", "")}
        </h2>
      );
    }
    return (
      <p key={i} className="font-sans text-base text-gray-warm leading-relaxed">
        {block}
      </p>
    );
  });
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const currentIdx = blogPosts.findIndex((p) => p.slug === slug);
  const nextPost = blogPosts[currentIdx + 1] ?? blogPosts[0];

  return (
    <div className="bg-cream min-h-screen">
      {/* Back */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-10">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm font-sans text-gray-warm hover:text-charcoal transition-colors group"
        >
          <ArrowLeft
            size={14}
            className="group-hover:-translate-x-1 transition-transform"
          />
          All Posts
        </Link>
      </div>

      {/* Header */}
      <div className="max-w-3xl mx-auto px-6 lg:px-8 pt-12 pb-16">
        <div className="flex items-center gap-3 mb-6">
          <span className="text-[10px] font-sans uppercase tracking-widest text-rose">
            {post.category}
          </span>
          <div className="w-px h-3 bg-smoke" />
          <time className="text-[10px] font-sans text-gray-mid">
            {new Date(post.date).toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </time>
          <div className="w-px h-3 bg-smoke" />
          <span className="text-[10px] font-sans text-gray-mid">
            {post.readTime}
          </span>
        </div>

        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light text-charcoal leading-tight mb-6">
          {post.title}
        </h1>
        <p className="font-sans text-lg text-gray-warm leading-relaxed">
          {post.excerpt}
        </p>

        <div className="flex flex-wrap gap-2 mt-8">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] font-sans px-2.5 py-1 border border-smoke text-gray-mid"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <div className="h-px bg-smoke" />
      </div>

      {/* Article body */}
      <article className="max-w-3xl mx-auto px-6 lg:px-8 py-16 space-y-6">
        {renderBody(post.body)}
      </article>

      {/* Author card */}
      <div className="max-w-3xl mx-auto px-6 lg:px-8 pb-16">
        <div className="h-px bg-smoke mb-10" />
        <div className="flex items-center gap-5">
          <div className="w-12 h-12 bg-charcoal flex items-center justify-center shrink-0">
            <span className="font-serif text-cream text-lg">HN</span>
          </div>
          <div>
            <div className="font-sans text-sm font-semibold text-charcoal">
              Helana Nosratbakhsh
            </div>
            <div className="font-sans text-xs text-gray-mid">
              Data Engineer &amp; Consultant
            </div>
          </div>
          <Link
            href="/contact"
            className="ml-auto text-xs font-sans text-rose hover:text-rose-dark transition-colors flex items-center gap-1 group"
          >
            Work with me
            <ArrowRight
              size={12}
              className="group-hover:translate-x-1 transition-transform"
            />
          </Link>
        </div>
      </div>

      {/* Next post */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="h-px bg-smoke" />
        <Link
          href={`/blog/${nextPost.slug}`}
          className="group flex items-center justify-between py-10 hover:bg-mist -mx-6 px-6 transition-colors duration-300"
        >
          <div>
            <div className="text-[10px] font-sans uppercase tracking-widest text-gray-mid mb-2">
              Next Post
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl text-charcoal group-hover:text-charcoal-dark transition-colors">
              {nextPost.title}
            </h3>
          </div>
          <ArrowRight
            size={20}
            className="text-rose group-hover:translate-x-1 transition-transform shrink-0"
          />
        </Link>
      </div>
    </div>
  );
}
