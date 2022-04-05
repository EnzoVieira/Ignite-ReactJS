export interface IRepository {
    name: string
    description: string
    html_url: string
}

interface IRepositoryItemProps {
    repository: IRepository
}

export const RepositoryItem = ({ repository }: IRepositoryItemProps) => {
    return (
        <li>
            <strong>{repository.name}</strong>
            <p>{repository.description}</p>

            <a href={repository.html_url}>Access repository</a>
        </li>
    )
}