import Link from "next/link";
import { BLOG_POSTS } from "./blog-data";

export default async function Page() {
  // simulate api request to get blog posts
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return (
    <ul>
      {BLOG_POSTS.map((post) => (
        <li key={post.id}>
          <Link href={`/blog/${post.id}`} className="hover:underline">
            {post.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}
