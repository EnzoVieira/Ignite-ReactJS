import { GetStaticProps } from "next"
import Head from "next/head"

import { createClient } from "../../services/prismic"

import styles from "./styles.module.scss"

export default function Posts() {
  return (
    <>
      <Head>
        <title>Posts | Ignews</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.posts}>
          <a href="">
            <time>12 de março de 2022</time>
            <strong>Creating Monorepo with Lerna & Yarn Workspace</strong>
            <p>
              In this guide, you will learn how to create a Monorepo to manage
              multiple packages with a shared build, teste, and release process.
            </p>
          </a>
          <a href="">
            <time>12 de março de 2022</time>
            <strong>Creating Monorepo with Lerna & Yarn Workspace</strong>
            <p>
              In this guide, you will learn how to create a Monorepo to manage
              multiple packages with a shared build, teste, and release process.
            </p>
          </a>
          <a href="">
            <time>12 de março de 2022</time>
            <strong>Creating Monorepo with Lerna & Yarn Workspace</strong>
            <p>
              In this guide, you will learn how to create a Monorepo to manage
              multiple packages with a shared build, teste, and release process.
            </p>
          </a>
        </div>
      </main>
    </>
  )
}

export const getStaticProps: GetStaticProps = async ({ previewData }) => {
  const client = createClient({ previewData })

  const response = await client.get({
    pageSize: 100,
  })

  console.log("posts que achou", response)

  return {
    props: { response },
  }
}
