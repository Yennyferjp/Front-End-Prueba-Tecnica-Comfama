import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar/SearchBar';
import AnimeList from './AnimeList/AnimeList';
import {fetchAnimes} from './anime-service';

function App() {
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(true);
  const [animeData, setAnimeData] = useState();
  const [error, setError] = useState(null);

  useEffect( () => {
    async function fechData(){
      try{
        const data = await fetchAnimes();
        setAnimeData(data);
       }catch(error){
         console.log(error);
         setError(error);
       }finally{
         setLoading(false);
       }
    }
    fechData();
  }, []);

  const handleSearch = async (term) => {
    setLoading(true);
    try {
      const data = await fetchAnimes(term);
      setAnimeData(data);
    } catch (error) {
      setError(error.message || 'Error al buscar animes');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      {loading && <p>Cargando...</p>}
      {error && <p>{error}</p>}
      <AnimeList animeData={animeData} page={2} loading={loading}/>
    </div>
  );
}

export default App;


