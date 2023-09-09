import { useRouter } from "next/navigation";
import { BLOG_POSTS } from "../blog-data";
import Link from "next/link";

export default function Page({ params }: { params: { id: string } }) {
  const blogPost = BLOG_POSTS.find((post) => post.id === params.id);

  return blogPost ? (
    <div>
      <Link href="/blog" className="hover:underline">
        Back
      </Link>
      <article>
        <h1 className="text-3xl font-bold">{blogPost.title}</h1>
        <p>{blogPost.content}</p>
      </article>
    </div>
  ) : (
    <p>Post not found</p>
  );
}
