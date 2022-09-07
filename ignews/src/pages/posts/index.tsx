import { GetStaticProps } from "next"
import Head from "next/head"
import { RichText } from "prismic-dom"

import { createClient } from "../../services/prismic"

import styles from "./styles.module.scss"

interface IPost {
  slug: string
  title: string
  excerpt: string
  updatedAt: string
}

interface IPostsProps {
  posts: IPost[]
}

export default function Posts({ posts }: IPostsProps) {
  return (
    <>
      <Head>
        <title>Posts | Ignews</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.posts}>
          {posts.map((post) => (
            <a key={post.slug} href="">
              <time>{post.updatedAt}</time>
              <strong>{post.title}</strong>
              <p>{post.excerpt}</p>
            </a>
          ))}
        </div>
      </main>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const client = createClient()

  const response = await client.getAllByType("custom-post-type", {
    pageSize: 100,
  })

  console.log(response[1].data)

  const posts = response.map((post) => {
    return {
      slug: post.uid,
      title: RichText.asText(post.data.title),
      excerpt:
        post.data.content.find((content) => content.type === "paragraph")
          ?.text ?? "",
      updatedAt: new Date(post.last_publication_date).toLocaleDateString(
        "pt-BR",
        {
          day: "2-digit",
          month: "long",
          year: "numeric",
        }
      ),
    }
  })

  return {
    props: { posts },
  }
}
