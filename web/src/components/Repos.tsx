import React, { useEffect } from 'react';
import axios from 'axios';


const Repos = (): JSX.Element => {
  useEffect( () => {
    // get the data from the backend api
    const api = async () => {
    const res = await axios.get('http://localhost:4000/repos');
    return res
  } 

      // call the function to display the data
      api()
        .then(console.log)
  }, [])

  return (
    <div>test</div>
  )
}

export default Repos
