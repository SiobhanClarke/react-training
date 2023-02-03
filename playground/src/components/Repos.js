import { RepoCard } from "./RepoCard";
import { InfoMessage } from "./Info";
import mockRepos from "../mockRepos.json";

const hasRepos = Object.keys(mockRepos).length > 0;

export const Repos = () => {
    return (
        <div className="jumbotron">
        {hasRepos ?
            <RepoCard
                reponame="Repo name:"
                url="Url:"
                username="Username:"
                starcount="Star count:"
                watcherscount="Watchers count:"
                description="Description:"
                topics="Topics:"
            />
            :
            <InfoMessage message="You have no GitHub repositories"></InfoMessage>
        }
        </div>
    );
};