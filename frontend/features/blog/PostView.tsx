import Link from "next/link";
import ReactMarkdown from "react-markdown";
import type { LocaleContent, Locale } from "@/lib/i18n";
import type { Post } from "@/lib/types";
import { textColorMap, bgPaleMap, borderLMap } from "@/components/ui/Tag";
import { PrimaryButton } from "@/components/ui/Button";
import Arrow from "@/components/ui/Arrow";

export default function PostView({
  post,
  content,
  locale,
}: {
  post: Post;
  content: LocaleContent;
  locale: Locale;
}) {
  const color = post.color;

  return (
    <div className="max-w-[760px] mx-auto px-8 pt-12">
      <Link
        href={`/${locale}/blog`}
        className="text-fg-mid font-sans font-semibold text-sm inline-flex items-center gap-1.5 mb-8 no-underline transition-colors duration-150 hover:text-indigo"
      >
        ← {content.ui.backToPosts}
      </Link>

      <div className="flex items-center gap-2.5 mb-4.5">
        <span
          className={`text-2xs font-[800] tracking-[0.08em] uppercase whitespace-nowrap ${textColorMap[color]}`}
        >
          {post.tag}
        </span>
        <span className="text-[13px] text-fg-soft">
          {post.date} · {post.read} {content.ui.readWord}
        </span>
      </div>

      <h1 className="font-display font-bold text-[clamp(30px,4.5cqw,44px)] tracking-[-0.025em] leading-[1.15] text-fg mb-4.5">
        {post.title}
      </h1>

      <p className="text-[19px] text-fg-mid leading-relaxed mb-9 font-normal">{post.summary}</p>

      <div className="h-px bg-border mb-9" />

      <article>
        {post.markdown ? (
          <ReactMarkdown
            components={{
              h2: ({ children }) => (
                <h2 className="font-display font-bold text-[26px] text-fg mt-10 mb-4 tracking-[-0.015em]">
                  {children}
                </h2>
              ),
              h3: ({ children }) => (
                <h3 className="font-display font-bold text-[22px] text-fg mt-9 mb-3.5 tracking-[-0.01em]">
                  {children}
                </h3>
              ),
              p: ({ children }) => (
                <p className="text-[17px] text-fg-mid leading-[1.75] mb-5">{children}</p>
              ),
              blockquote: ({ children }) => (
                <blockquote
                  className={`${borderLMap[color]} ${bgPaleMap[color]} border-l-[3px] rounded-[0_12px_12px_0] px-6 py-4.5 my-7 font-display text-[19px] font-medium text-fg leading-[1.5] italic`}
                >
                  {children}
                </blockquote>
              ),
              code: ({ children }) => (
                <code className="font-mono bg-panel text-indigo px-1.5 py-0.5 rounded text-[15px]">
                  {children}
                </code>
              ),
              pre: ({ children }) => (
                <pre className="bg-panel border border-border rounded-[10px] px-6 py-5 overflow-x-auto mb-5">
                  {children}
                </pre>
              ),
              strong: ({ children }) => <strong className="font-bold text-fg">{children}</strong>,
              a: ({ href, children }) => (
                <a
                  href={href}
                  className="text-indigo underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {children}
                </a>
              ),
            }}
          >
            {post.markdown}
          </ReactMarkdown>
        ) : (
          post.body.map((block, i) => {
            if (block.h)
              return (
                <h3
                  key={i}
                  className="font-display font-bold text-[22px] text-fg mt-9 mb-3.5 tracking-[-0.01em]"
                >
                  {block.h}
                </h3>
              );
            if (block.quote)
              return (
                <blockquote
                  key={i}
                  className={`${borderLMap[color]} ${bgPaleMap[color]} border-l-[3px] rounded-[0_12px_12px_0] px-6 py-4.5 my-7 font-display text-[19px] font-medium text-fg leading-[1.5] italic`}
                >
                  {block.quote}
                </blockquote>
              );
            return (
              <p key={i} className="text-[17px] text-fg-mid leading-[1.75] mb-5">
                {block.p}
              </p>
            );
          })
        )}
      </article>

      <div className="mt-12 pt-8 border-t-[1.5px] border-border flex justify-between items-center flex-wrap gap-4 mb-2">
        <div>
          <div className="font-display font-bold text-base text-fg">Ruan Failache</div>
          <div className="text-[13px] text-fg-soft">{content.ui.postFooterTagline}</div>
        </div>
        <Link href={`/${locale}/contact`} className="no-underline">
          <PrimaryButton className="py-2.5 px-5 text-sm">
            {content.ui.workWithMe} <Arrow />
          </PrimaryButton>
        </Link>
      </div>
    </div>
  );
}
