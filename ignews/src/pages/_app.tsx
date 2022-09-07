import { AppProps } from "next/app"
import { SessionProvider as NextAuthProvider } from "next-auth/react"
import { PrismicProvider } from "@prismicio/react"
import { PrismicPreview } from "@prismicio/next"

import { Header } from "../components/Header"

import "../styles/global.scss"

import { linkResolver, repositoryName } from "../services/prismic"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <PrismicProvider linkResolver={linkResolver}>
      <PrismicPreview repositoryName={repositoryName}>
        <NextAuthProvider session={pageProps.session}>
          <Header />
          <Component {...pageProps} />
        </NextAuthProvider>
      </PrismicPreview>
    </PrismicProvider>
  )
}

export default MyApp
