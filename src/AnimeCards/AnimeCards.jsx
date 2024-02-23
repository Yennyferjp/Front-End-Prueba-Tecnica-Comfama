import React, { useState } from 'react';
import style from './AnimeCard.module.css';

function AnimeCard({ anime }) {
  const [isFlipped, setIsFlipped] = useState(false);

  const toggleCard = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className={`${style.animeCard} ${isFlipped ? style.flipped : ''}`} onClick={toggleCard}>
      <div className={style.cardInner}>
        <div className={style.cardFront}>
          <img src={anime.images.jpg.image_url} className={style.animeImage} alt={anime.title} title={anime.title} />
        </div>
        <div className={style.cardBack}>
          <p>{anime.title}</p>
        </div>
      </div>
      <p className={style.animeRecomendation}>{anime.recommendation}</p> 
    </div>
  );
}

export default AnimeCard;
