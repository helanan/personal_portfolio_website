import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import { blogPosts } from "@/data/blogPosts";
import { getMediumPosts } from "@/lib/medium";

export const metadata = {
  title: "Blog | Helana Nosratbakhsh",
  description:
    "Writing on data engineering, cloud architecture, analytics engineering, and building reliable data systems.",
};

export default async function BlogPage() {
  const mediumPosts = await getMediumPosts();
  const hasMedium = mediumPosts.length > 0;

  return (
    <div className="bg-cream min-h-screen">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-20 pb-16">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-8 h-px bg-rose shrink-0" />
          <span className="text-[10px] font-sans uppercase tracking-widest text-gray-mid">
            Writing
          </span>
        </div>
        <h1 className="font-serif text-5xl sm:text-6xl font-light text-charcoal leading-none mb-6">
          The Blog
        </h1>
        <p className="font-sans text-base text-gray-warm leading-relaxed max-w-xl">
          Practical writing on data engineering, architecture decisions, and
          building systems that people can actually trust.
        </p>
        {hasMedium && (
          <a
            href="https://medium.com/@HelanaBakhsh"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-6 text-sm font-sans text-gray-warm hover:text-charcoal transition-colors group"
          >
            Follow on Medium
            <ExternalLink size={13} className="text-rose" />
          </a>
        )}
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="h-px bg-smoke" />
      </div>

      {/* Posts */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {hasMedium
          ? mediumPosts.map((post) => (
              <a
                key={post.id}
                href={post.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block border-b border-smoke py-12 hover:bg-mist -mx-6 px-6 transition-colors duration-300"
              >
                <div className="flex flex-col sm:flex-row sm:items-start gap-6 sm:gap-12">
                  {/* Date column */}
                  <div className="sm:w-32 shrink-0">
                    <time className="text-xs font-sans text-gray-mid">
                      {post.pubDate
                        ? new Date(post.pubDate).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                          })
                        : ""}
                    </time>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      {post.categories[0] && (
                        <span className="text-[10px] font-sans uppercase tracking-widest text-rose">
                          {post.categories[0]}
                        </span>
                      )}
                      <span className="text-[10px] font-sans text-gray-mid">
                        {post.readTime}
                      </span>
                    </div>
                    <h2 className="font-serif text-2xl sm:text-3xl text-charcoal leading-tight mb-3 group-hover:text-charcoal-dark transition-colors">
                      {post.title}
                    </h2>
                    <p className="font-sans text-sm text-gray-warm leading-relaxed max-w-2xl">
                      {post.excerpt}
                    </p>
                    {post.categories.length > 1 && (
                      <div className="flex flex-wrap gap-2 mt-4">
                        {post.categories.slice(1).map((tag) => (
                          <span
                            key={tag}
                            className="text-[10px] font-sans px-2 py-0.5 border border-smoke text-gray-mid"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Arrow */}
                  <div className="shrink-0 self-center">
                    <ArrowRight
                      size={18}
                      className="text-rose group-hover:translate-x-1 transition-transform"
                    />
                  </div>
                </div>
              </a>
            ))
          : blogPosts.map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.slug}`}
                className="group block border-b border-smoke py-12 hover:bg-mist -mx-6 px-6 transition-colors duration-300"
              >
                <div className="flex flex-col sm:flex-row sm:items-start gap-6 sm:gap-12">
                  {/* Date column */}
                  <div className="sm:w-32 shrink-0">
                    <time className="text-xs font-sans text-gray-mid">
                      {new Date(post.date).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </time>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-[10px] font-sans uppercase tracking-widest text-rose">
                        {post.category}
                      </span>
                      <span className="text-[10px] font-sans text-gray-mid">
                        {post.readTime}
                      </span>
                    </div>
                    <h2 className="font-serif text-2xl sm:text-3xl text-charcoal leading-tight mb-3 group-hover:text-charcoal-dark transition-colors">
                      {post.title}
                    </h2>
                    <p className="font-sans text-sm text-gray-warm leading-relaxed max-w-2xl">
                      {post.excerpt}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] font-sans px-2 py-0.5 border border-smoke text-gray-mid"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Arrow */}
                  <div className="shrink-0 self-center">
                    <ArrowRight
                      size={18}
                      className="text-rose group-hover:translate-x-1 transition-transform"
                    />
                  </div>
                </div>
              </Link>
            ))}
      </div>
    </div>
  );
}
