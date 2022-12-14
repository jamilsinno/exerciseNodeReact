import { RepoContent } from '../types';

const Repo = ({git}: RepoContent): JSX.Element => {
    console.log(git)
  return (
    <> 
        <p>Commit date: {git.pushed_at.split(0, 'T')}</p>
        <p>Author: {git.name}</p>
        <p>Author: {git.name}</p>
    </>
    )
}
export default Repo


//  6. When you click a repository, display the most recent commit date, author,
    // and message.