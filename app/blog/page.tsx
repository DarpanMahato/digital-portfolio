import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { formatDate } from "@/lib/utils"; // Assuming formatDate is in utils

export default async function BlogPage() {
  const res = await fetch('https://payload.darpanmahato.com.np/api/posts?limit=10', {
    cache: 'no-store',
  });
  const data = await res.json();

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
            {data.docs.map((post: any) => (
              <Card key={post.id} className="overflow-hidden">
                {post.heroImage?.url && (
                  <Link href={`/blog/${post.slug}`}>
                    <Image
                      src={post.heroImage.url}
                      alt={post.heroImage.alt || post.title}
                      width={400}
                      height={225}
                      className="w-full h-48 object-cover"
                    />
                  </Link>
                )}
                <CardHeader>
                  <CardTitle>{post.title}</CardTitle>
                  <CardDescription>{post.meta?.description || post.excerpt || ''}</CardDescription>
                </CardHeader>
                <CardContent className="mt-auto">
                  <p className="text-sm text-muted-foreground">
                    {post.publishedAt ? formatDate(post.publishedAt) : 'Date unavailable'}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
