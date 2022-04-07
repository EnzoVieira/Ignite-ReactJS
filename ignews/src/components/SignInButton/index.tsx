import { signIn, signOut, useSession } from "next-auth/react"

import { FaGithub } from "react-icons/fa"
import { FiX } from "react-icons/fi"

import styles from "./styles.module.scss"

export const SignInButton = () => {
  const { data: session } = useSession()

  return session ? (
    <button
      className={styles.signInButton}
      type="button"
      onClick={() => signOut()}
    >
      <FaGithub color="#04b361" />
      {session.user.name}
      <FiX className={styles.closeIcon} color="#737380" />
    </button>
  ) : (
    <button
      className={styles.signInButton}
      type="button"
      onClick={() => signIn("github")}
    >
      <FaGithub color="#eba417" />
      Sign in with GitHub
    </button>
  )
}
