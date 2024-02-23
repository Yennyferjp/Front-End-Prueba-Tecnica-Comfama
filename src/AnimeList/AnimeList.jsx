import React, { useState, useEffect } from 'react';
import AnimeCard from '../AnimeCards/AnimeCards';
import style from './AnimeList.module.css';

function AnimeList({animeData}) {
  return (
    <div className={style.animeList}>
      <h2 className={style.h2_title}>Anime List</h2>
      <div className={style.animeCardContainer}>
        {animeData ? (
          <div className={style.animeCardContainer}>
            {animeData.content.map(anime => (
              <AnimeCard key={anime.mal_id} anime={anime} />
            ))}
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
}
export default AnimeList;
