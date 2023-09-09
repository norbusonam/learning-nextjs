import Link from "next/link";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Link className="hover:underline" href="/blog">
        Back to all blog posts
      </Link>
      {children}
    </div>
  );
}
