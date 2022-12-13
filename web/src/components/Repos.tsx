import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Repos = (): JSX.Element => {
  const [repo, setRepo] = useState([]);

  useEffect(() => {
    // get the data from the backend api
    const api = async () => {
      const res = await axios.get('http://localhost:4000/repos');
      return res;
    };

    // call the function to display the data
    api().then((data) => {
      setRepo(data.data);
    });
  }, []);

  return <div>{repo.length && repo.map((r: any) => (
  <>
  <p>{r.name}</p>
  <p>{r.description}</p>
  <p>{r.language}</p>
  <p>{r.forks_count}</p>
  </>))}
  </div>;
};

export default Repos;
