import {RepoContent} from '../types';
const Repos = ({repo}: {repo: RepoContent[]}): JSX.Element => {

  const sortedRepo = repo.sort((a: RepoContent, b: RepoContent) =>
    b.created_at.localeCompare(a.created_at)
  );
  return (
    <div>
      {sortedRepo.length &&
        sortedRepo.map((r: RepoContent, i: number) => (
          <div key={i}>
            <p>{r.name}</p>
            <p>{r.description}</p>
            <p>{r.language}</p>
            <p>{r.forks_count}</p>
            <p>{r.created_at}</p>
          </div>
        ))}
    </div>
  );
};

export default Repos;
