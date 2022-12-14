import { Link } from 'react-router-dom';
import { RepoContent } from '../types';

/* eslint-disable @typescript-eslint/naming-convention */
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
            if (lang) {
              return r.language === lang;
            }
            return true;
          })
          .map((r: RepoContent) => (
            <Link to={`/${r.full_name}`} key={r.id}>
              <p>Name: {r.name}</p>
              <p>Description: {r.description}</p>
              <p>Language: {r.language}</p>
              <p>Fork count: {r.forks_count}</p>
            </Link>
          ))}
    </div>
  );
};

export default Repos;
