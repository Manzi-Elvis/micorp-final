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
    //   title: t("blogPage.posts.ai.title"),
    //   excerpt: t("blogPage.posts.ai.excerpt"),
    //   date: t("blogPage.posts.ai.date"),
    //   author: t("blogPage.posts.ai.author"),
    //   category: t("blogPage.posts.ai.category"),
    //   image: "/placeholder.svg?height=600&width=800",
    //   slug: "future-of-ai-in-software-development",
    // },
    // {
    //   title: t("blogPage.posts.nextjs.title"),
    //   excerpt: t("blogPage.posts.nextjs.excerpt"),
    //   date: t("blogPage.posts.nextjs.date"),
    //   author: t("blogPage.posts.nextjs.author"),
    //   category: t("blogPage.posts.nextjs.category"),
    //   image: "/placeholder.svg?height=600&width=800",
    //   slug: "building-scalable-web-applications-with-nextjs",
    // },
    // {
    //   title: t("blogPage.posts.cybersecurity.title"),
    //   excerpt: t("blogPage.posts.cybersecurity.excerpt"),
    //   date: t("blogPage.posts.cybersecurity.date"),
    //   author: t("blogPage.posts.cybersecurity.author"),
    //   category: t("blogPage.posts.cybersecurity.category"),
    //   image: "/placeholder.svg?height=600&width=800",
    //   slug: "cybersecurity-best-practices-for-small-businesses",
    // },
    // {
    //   title: t("blogPage.posts.pwa.title"),
    //   excerpt: t("blogPage.posts.pwa.excerpt"),
    //   date: t("blogPage.posts.pwa.date"),
    //   author: t("blogPage.posts.pwa.author"),
    //   category: t("blogPage.posts.pwa.category"),
    //   image: "/placeholder.svg?height=600&width=800",
    //   slug: "rise-of-progressive-web-apps",
    // },
    // {
    //   title: t("blogPage.posts.dataDecisions.title"),
    //   excerpt: t("blogPage.posts.dataDecisions.excerpt"),
    //   date: t("blogPage.posts.dataDecisions.date"),
    //   author: t("blogPage.posts.dataDecisions.author"),
    //   category: t("blogPage.posts.dataDecisions.category"),
    //   image: "/placeholder.svg?height=600&width=800",
    //   slug: "data-driven-decision-making-practical-guide",
    // },
    // {
    //   title: t("blogPage.posts.ux.title"),
    //   excerpt: t("blogPage.posts.ux.excerpt"),
    //   date: t("blogPage.posts.ux.date"),
    //   author: t("blogPage.posts.ux.author"),
    //   category: t("blogPage.posts.ux.category"),
    //   image: "/placeholder.svg?height=600&width=800",
    //   slug: "importance-of-user-experience-in-software-design",
    // },
  ]

  return (
    <div className="container mx-auto px-4 py-16 space-y-16">
      <section className="space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold text-center">{t("blogPage.title")}</h1>
        <p className="text-xl text-muted-foreground text-center max-w-3xl mx-auto">{t("blogPage.subtitle")}</p>
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
        <h2 className="text-3xl font-bold">{t("blogPage.newsletter.title")}</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t("blogPage.newsletter.description")}</p>
        <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
          <input
            type="email"
            placeholder={t("blogPage.newsletter.placeholder")}
            className="px-4 py-2 rounded-md border border-input bg-background"
          />
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
            {t("blogPage.newsletter.button")}
          </button>
        </div>
      </section>
    </div>
  )
}

