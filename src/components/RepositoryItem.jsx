export const RepositoryItem = ({ repository }) => {
    return (
        <li>
            <strong>{repository.name ?? "Default"}</strong>
            <p>{repository.description}</p>

            <a href={repository.link}>Access repository</a>
        </li>
    )
}