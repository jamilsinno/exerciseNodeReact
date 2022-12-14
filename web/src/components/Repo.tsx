import { Link, useParams } from 'react-router-dom';
import { RepoContent } from '../types';

const Repo = ({repo}: {repo: RepoContent[]}): any => {
    // console.log('Repo page loading', repo)
    const handle = useParams();
    const res = repo.filter( d => d.full_name === (handle.id + '/' + handle.id2));
    // console.log(handle)
    // console.log(res)
  return (
    <>
        <p>Commit date: {res[0].updated_at.slice(0, 9)}</p>
        <p>Author: {res[0].name}</p>
        <p>Message: {res[0].description}</p>
        <Link to='/'><button>Go Back</button></Link>
    </>
    )
}
export default Repo

// //  6. When you click a repository, display the most recent commit date, author,
// // and message.
