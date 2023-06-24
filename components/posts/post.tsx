import Link from "next/link";

export default function Post({ post, className = 'rounded-lg' }: { post: { slug: string, [key: string]: string | string[] }, className?: string }) {
  return (
    <article className={`bg-white p-4 ${className}`}>
      <Link href={`/blogs/${post.slug}`}>
        <h3 className="text-2xl mb-2 font-medium">{post.title}</h3>
      </Link>
      <span className="text-gray-600 mb-4 block">
        <div>{post.date}</div> | {(post.tags as string[]).map((tag) => tag).join(', ')}
      </span>
      <p>
        {post.description}
      </p>
    </article>
  );
}