import { Link, useParams } from 'react-router-dom';
import { RepoContent } from '../types';

/* eslint-disable @typescript-eslint/naming-convention */
const Repo = ({ repo }: { repo: RepoContent[] }): any => {
  const handle = useParams();
  const res = repo.filter((d) => d.full_name === handle.id + '/' + handle.id2);
  return (
    <>
      <p>Commit date: {res[0].updated_at.slice(0, 9)}</p>
      <p>Author: {res[0].name}</p>
      <p>Message: {res[0].description}</p>
      <Link to="/">
        <button>Go Back</button>
      </Link>
    </>
  );
};
export default Repo;
