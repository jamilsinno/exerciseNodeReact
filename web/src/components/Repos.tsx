import { Link } from 'react-router-dom';
import { RepoContent } from '../types';
const Repos = ({
  repo,
  lang,
}: {
  repo: RepoContent[];
  lang: string;
}): JSX.Element => {
  const sortedRepo = repo.sort((a: RepoContent, b: RepoContent) =>
    b.created_at.localeCompare(a.created_at)
  );
  return (
    <div>
      {sortedRepo.length &&
        sortedRepo
          .filter((r) => {
            if (lang) { return r.language === lang };
            return true;
          })
          .map((r: RepoContent) => (
            <Link to={`/${r.full_name}`} key={r.id}>
              <p>{r.name}</p>
              <p>{r.description}</p>
              <p>{r.language}</p>
              <p>{r.forks_count}</p>
              <p>{r.created_at}</p>
            </Link>
          ))}
    </div>
  );
};

export default Repos;
