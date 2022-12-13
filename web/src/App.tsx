import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Repos from './components/Repos';

import './App.css';

export function App() {
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

  return ( <Repos repo={repo} />);
}
