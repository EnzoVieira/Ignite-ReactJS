import "../styles/repositories.scss"

import { RepositoryItem } from "./RepositoryItem"

const repository = {
    name: "unform",
    description: "Forms in React",
    link: "https://github.com/unform/unform"
}

export const RepositoryList = () => {
    return (
        <section className="repository-list">
            <h1>Repository List</h1>

            <ul>
                <RepositoryItem {...{ repository }} />
                <RepositoryItem {...{ repository }} />
                <RepositoryItem {...{ repository }} />
            </ul>
        </section>
    )
}