import React, { useState, useEffect } from 'react';
import axios from 'axios';

type RepoContent = {
  created_at: string;
  [key: string]: string | boolean | number | RepoContent;
};

const Repos = (): JSX.Element => {
  const [repo, setRepo] = useState([]);

  useEffect(() => {
    // get the data from the backend api
    const api = async () => {
      const res = await axios.get('http://localhost:4000/repos');
      return res;
    };

    // call the function to display the data
    api()
      .then((data) => {
        setRepo(data.data);
      })
      .catch((err) => console.log(err));
  }, []);

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
