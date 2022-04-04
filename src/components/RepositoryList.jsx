import { useState, useEffect } from "react"
import "../styles/repositories.scss"

import { RepositoryItem } from "./RepositoryItem"

export const RepositoryList = () => {
    const [repositories, setRepositories] = useState([])

    useEffect(() => {
        fetch("https://api.github.com/users/EnzoVieira/repos")
            .then(response => response.json())
            .then(data => setRepositories(data))
            .catch(error => console.log(error))
    }, [])

    return (
        <section className="repository-list">
            <h1>Repository List</h1>

            <ul>
                {repositories.map(repository =>
                    <RepositoryItem
                        key={repository.name}
                        {...{ repository }}
                    />
                )}
            </ul>
        </section>
    )
}