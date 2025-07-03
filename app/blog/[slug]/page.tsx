import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Calendar, User, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { NewsletterForm } from "@/components/newsletter-form"
import { notFound } from "next/navigation"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

function richTextToPlainText(richText: any): string {
  // Quick and dirty: flatten all text nodes
  if (!richText || !richText.root || !Array.isArray(richText.root.children)) return "";
  return richText.root.children.map((block: any) =>
    Array.isArray(block.children)
      ? block.children.map((child: any) => child.text).join(" ")
      : ""
  ).join("\n\n");
}

async function getBlogPost(slug: string) {
  try {
    const res = await fetch(`https://payload.darpanmahato.com.np/api/posts?where[slug][equals]=${slug}`)
    if (!res.ok) throw new Error("Failed to fetch post")
    const data = await res.json()
    return { post: data.docs?.[0] || null, error: null }
  } catch (error) {
    console.error("Error fetching blog post:", error)
    return { post: null, error: error }
  }
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const { post, error } = await getBlogPost(params.slug)

  // If there's a fetch error, show an error message
  if (error) {
    return (
      <div className="flex flex-col">
        <div className="container px-4 md:px-6 py-12">
          <Link href="/blog">
            <Button className="mb-4">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Button>
          </Link>

          <Alert variant="destructive" className="mb-8">
            <AlertTitle>API Error</AlertTitle>
            <AlertDescription>
              There was an error fetching the blog post. Please try refreshing the page or contact support if the issue persists.
            </AlertDescription>
          </Alert>

          <div className="flex justify-center mt-8">
            <Button onClick={() => window.location.reload()}>Refresh Page</Button>
          </div>
        </div>
      </div>
    )
  }

  // If the post doesn't exist, show a 404 page
  if (!post) {
    notFound()
  }

  // Use heroImage if available
  const imageUrl = post.heroImage?.url ? `https://payload.darpanmahato.com.np${post.heroImage.url}` : "/placeholder.svg?height=600&width=1200&query=cybersecurity";
  const content = richTextToPlainText(post.content);

  return (
    <div className="flex flex-col">
      <div className="w-full h-[400px] relative bg-black">
        {/* Use normal img for quick fix */}
        <img
          src={imageUrl}
          alt={post.title}
          className="object-cover opacity-70 w-full h-full absolute inset-0"
          style={{ objectFit: "cover" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
      </div>
      <div className="container px-4 md:px-6 -mt-20 relative z-10">
        <div className="max-w-3xl mx-auto bg-background rounded-lg shadow-lg p-6 md:p-10 border border-border">
          <Link href="/blog">
            <Button className="mb-4">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Button>
          </Link>
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{post.title}</h1>
          <div className="flex flex-wrap items-center gap-4 mt-4 text-muted-foreground">
            <div className="flex items-center">
              <Calendar className="mr-2 h-4 w-4" />
              <span>{post.createdAt ? new Date(post.createdAt).toLocaleDateString() : ''}</span>
            </div>
            {post.author && (
              <div className="flex items-center">
                <User className="mr-2 h-4 w-4" />
                <span>{post.author}</span>
              </div>
            )}
            {post.readTime && (
              <div className="flex items-center">
                <Clock className="mr-2 h-4 w-4" />
                <span>{post.readTime}</span>
              </div>
            )}
          </div>
          <div className="mt-8 prose prose-gray dark:prose-invert max-w-none whitespace-pre-line">
            {content}
          </div>
        </div>
      </div>

      <section className="w-full py-12 md:py-24 bg-muted/40">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Subscribe to Our Newsletter</h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
                Stay updated with the latest cybersecurity insights and tips.
              </p>
            </div>
            <div className="w-full max-w-md">
              <NewsletterForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
