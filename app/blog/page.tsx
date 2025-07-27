// app/blog/page.tsx

"use client"

import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useTranslations } from "@/hooks/use-translations"

export default function BlogPage() {
  const { t } = useTranslations()

  const blogPosts = [
    // {
    //   title: t("blog.posts.ai.title"),
    //   excerpt: t("blog.posts.ai.excerpt"),
    //   date: t("blog.posts.ai.date"),
    //   author: t("blog.posts.ai.author"),
    //   category: t("blog.posts.ai.category"),
    //   image: "/placeholder.svg?height=600&width=800",
    //   slug: "future-of-ai-in-software-development",
    // },
    // {
    //   title: t("blog.posts.nextjs.title"),
    //   excerpt: t("blog.posts.nextjs.excerpt"),
    //   date: t("blog.posts.nextjs.date"),
    //   author: t("blog.posts.nextjs.author"),
    //   category: t("blog.posts.nextjs.category"),
    //   image: "/placeholder.svg?height=600&width=800",
    //   slug: "building-scalable-web-applications-with-nextjs",
    // },
    // {
    //   title: t("blog.posts.cybersecurity.title"),
    //   excerpt: t("blog.posts.cybersecurity.excerpt"),
    //   date: t("blog.posts.cybersecurity.date"),
    //   author: t("blog.posts.cybersecurity.author"),
    //   category: t("blog.posts.cybersecurity.category"),
    //   image: "/placeholder.svg?height=600&width=800",
    //   slug: "cybersecurity-best-practices-for-small-businesses",
    // },
    // {
    //   title: t("blog.posts.pwa.title"),
    //   excerpt: t("blog.posts.pwa.excerpt"),
    //   date: t("blog.posts.pwa.date"),
    //   author: t("blog.posts.pwa.author"),
    //   category: t("blog.posts.pwa.category"),
    //   image: "/placeholder.svg?height=600&width=800",
    //   slug: "rise-of-progressive-web-apps",
    // },
    // {
    //   title: t("blog.posts.dataDecisions.title"),
    //   excerpt: t("blog.posts.dataDecisions.excerpt"),
    //   date: t("blog.posts.dataDecisions.date"),
    //   author: t("blog.posts.dataDecisions.author"),
    //   category: t("blog.posts.dataDecisions.category"),
    //   image: "/placeholder.svg?height=600&width=800",
    //   slug: "data-driven-decision-making-practical-guide",
    // },
    // {
    //   title: t("blog.posts.ux.title"),
    //   excerpt: t("blog.posts.ux.excerpt"),
    //   date: t("blog.posts.ux.date"),
    //   author: t("blog.posts.ux.author"),
    //   category: t("blog.posts.ux.category"),
    //   image: "/placeholder.svg?height=600&width=800",
    //   slug: "importance-of-user-experience-in-software-design",
    // },
  ]

  return (
    <div className="container mx-auto px-4 py-16 space-y-16">
      <section className="space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold text-center">{t("blog.title")}</h1>
        <p className="text-xl text-muted-foreground text-center max-w-3xl mx-auto">{t("blog.subtitle")}</p>
      </section>

      {blogPosts.length > 0 ? (
        <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <Card key={index} className="overflow-hidden group transition-all hover:shadow-md">
              <Link href={`/blog/${post.slug}`}>
                <div className="relative h-48">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <CardContent className="p-6 space-y-4">
                  <Badge variant="outline" className="px-2 py-1">
                    {post.category}
                  </Badge>
                  <div>
                    <h3 className="text-xl font-bold">{post.title}</h3>
                    <p className="text-muted-foreground mt-2">{post.excerpt}</p>
                  </div>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span>{post.author}</span>
                    <span>{post.date}</span>
                  </div>
                </CardContent>
              </Link>
            </Card>
          ))}
        </section>
      ) : (
        <div className="text-center py-12">
          <p className="text-lg text-muted-foreground">No blog posts found. Check back soon!</p>
        </div>
      )}

      <section className="bg-blue-50 dark:bg-blue-950/30 rounded-xl p-8 md:p-12 text-center space-y-6">
        <h2 className="text-3xl font-bold">{t("blog.newsletter.title")}</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t("blog.newsletter.description")}</p>
        <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
          <input
            type="email"
            placeholder={t("blog.newsletter.placeholder")}
            className="px-4 py-2 rounded-md border border-input bg-background"
          />
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
            {t("blog.newsletter.button")}
          </button>
        </div>
      </section>
    </div>
  )
}

