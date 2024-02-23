import React from 'react';
import style from './AnimeCard.module.css';

function AnimeCard({ anime }) {
  return (
    <div className={style.animeCard}>
  
      <img src={anime.images.jpg.image_url}  className={style.animeImage} />
      {/* <div className={style.animeDetails}> */}
        <h2 className={style.animeTitle}>{anime.title}</h2>
        {/* <p className={style.animeSynopsis}>{anime.synopsis}</p>
        <p className={style.animeScore}>Score: {anime.score}</p> */}
      </div>
    
  );
}

export default AnimeCard;
