import { useState, useEffect } from 'react';
import Button from './components/Button';
import axios from 'axios';
import Repos from './components/Repos';
import Repo from './components/Repo';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';

export function App() {
  const [repo, setRepo] = useState([]);
  const [lang, setLang] = useState('');

  // Ping back end API to access all repos
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

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Button setLang={setLang} filteredLang={'English'} />
              <Button setLang={setLang} filteredLang={'French'} />
              <Button setLang={setLang} filteredLang={'TypeScript'} />
              <Repos repo={repo} lang={lang} />
            </>
          }
        />
        <Route path="/:id/:id2" element={<Repo repo={repo} />} />
      </Routes>
    </Router>
  );
}
