import { BLOG_POSTS } from "../blog-data";
import Link from "next/link";

export default async function Page({ params }: { params: { id: string } }) {
  // simulate api request to find blog post
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const blogPost = BLOG_POSTS.find((post) => post.id === params.id);

  if (!blogPost) {
    throw new Error("Blog post not found");
  }

  return (
    <div>
      <article>
        <h1 className="text-3xl font-bold">{blogPost.title}</h1>
        <p>{blogPost.content}</p>
      </article>
    </div>
  );
}
