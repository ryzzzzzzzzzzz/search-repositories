import {IRepo} from "../src/modules/IRepo.ts";

interface Props {
    repo: IRepo
}

const Repo = ({repo}: Props) => {

    return (
        <div className="item">
            <div>Name: {repo.name}</div>
            <div>Description: {repo.description}</div>
            <div>URL: {repo.html_url}</div>
            <div>Last update: {repo.updated_at}</div>
            <div>Stars: {repo.stargazers_count}</div>
        </div>
    )
}

export default Repo