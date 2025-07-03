import React from "react";
import Link from "next/link";

async function getPosts() {
  // Replace with your Payload CMS API endpoint
  const res = await fetch("https://payload.darpanmahato.com.np/api/posts", {
    // headers: { Authorization: "Bearer YOUR_TOKEN" }, // Uncomment if needed
    cache: "no-store",
  });
  if (!res.ok) throw new Error("Failed to fetch posts");
  return res.json();
}

export default async function BlogPage() {
  const data = await getPosts();
  const posts = data.docs || data.posts || [];

  return (
    <div className="flex flex-col">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-black relative overflow-hidden">
        <div className="container px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white">Cybersecurity Blog</h1>
              <p className="max-w-[700px] text-gray-400 md:text-xl/relaxed">
                Insights, tips, and best practices to help you stay secure in an ever-evolving threat landscape.
              </p>
            </div>
          </div>
        </div>
        {/* Animated background */}
        <div className="absolute inset-0 bg-grid-white/5 bg-[size:50px_50px] opacity-10"></div>
        <div className="absolute inset-0 bg-black bg-opacity-80"></div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post: any) => (
              <Link
                href={`/blog/${post.slug}`}
                key={post.id}
                className="overflow-hidden border rounded-lg bg-white dark:bg-gray-900 hover:shadow-lg transition-shadow"
              >
                {post.coverImage && (
                  <img
                    src={post.coverImage}
                    alt={post.title}
                    width={400}
                    height={225}
                    className="w-full h-48 object-cover"
                  />
                )}
                <div className="p-4">
                  <h2 className="text-xl font-semibold">{post.title}</h2>
                  <p className="text-gray-600 dark:text-gray-300">{post.excerpt}</p>
                  <p className="text-sm text-muted-foreground mt-2">{post.createdAt ? new Date(post.createdAt).toLocaleDateString() : 'Date unavailable'}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
