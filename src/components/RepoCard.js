import mockRepos from "./../mockRepos.json";

export const RepoCard = (props) => {
    return (
        <div className="cards padding">
            {mockRepos.map((x) => (
                <div className="card">
                    <div key={x.name} className="padding"><p className="repo-card-title">{props.reponame}</p> {x.name}</div>
                    <div key={x.html_url} className="padding"><p className="repo-card-title">{props.url}</p> {x.html_url}</div>
                    <div key={x.owner.login} className="padding"><p className="repo-card-title">{props.username}</p> {x.owner.login}</div>
                    <div key={x.stargazers_count} className="padding"><p className="repo-card-title">{props.starcount}</p> {x.stargazers_count}</div>
                    <div key={x.watchers_count} className="padding"><p className="repo-card-title">{props.watcherscount}</p> {x.watchers_count}</div>
                    {x.description ? <div key={x.description} className="padding"><p className="repo-card-title">{props.description}</p> {x.description}</div> : null}
                    {x.topics > 0 ? <div key={x.topics} className="padding"><p className="repo-card-title">{props.topics}</p> {x.topics}</div> : null}
                </div>
            ))}
        </div>
    );
};