import Link from "next/link";
import { BLOG_POSTS } from "./blog-data";

export default function Page() {
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
