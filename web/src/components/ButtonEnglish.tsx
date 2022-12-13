import {RepoContent} from '../types';

const ButtonEnglish = ({repo}: {repo: RepoContent[]}):JSX.Element => {
  
    const filterEnglish: ()=> RepoContent[] = repo.filter(x => x.language === 'English') 
  return (
    <button onClick={filterEnglish}>
      Click me!
    </button>
  )
}

export default ButtonEnglish
