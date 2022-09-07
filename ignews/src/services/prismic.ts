import * as prismic from "@prismicio/client"
import sm from "../../sm.json"

export const repositoryName = prismic.getRepositoryName(sm.apiEndpoint)

export function linkResolver(doc) {
  switch (doc.type) {
    case "posts":
      return "/"
    default:
      return null
  }
}

export const createClient = () => {
  const client = prismic.createClient(process.env.PRISMIC_ENDPOINT, {
    accessToken: process.env.PRISMIC_ACCESS_TOKEN,
  })

  return client
}
