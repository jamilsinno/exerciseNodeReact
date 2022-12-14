import { Link } from 'react-router-dom';

const Repo = (): JSX.Element => {
    console.log('Repo page loading')
  return (
    <>
        {/* <p>Commit date: {git.pushed_at.split(0, 'T')}</p>
        <p>Author: {git.name}</p>
        <p>Author: {git.name}</p> */}
        <Link to='/'><button>Go Back</button></Link>
    </>
    )
}
export default Repo

// //  6. When you click a repository, display the most recent commit date, author,
// // and message.
