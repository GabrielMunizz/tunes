import { useEffect, useState } from 'react';
import { getFavoriteSongs } from '../services/favoriteSongsAPI';
import { SongType } from '../types';
import MusicCard from './MusicCard';
import { StyledFavorites } from '../style/StyledFavorite';
import { StyledMain } from '../style/StyledMain';

function Favorites() {
  const [favSongs, setFavSongs] = useState<SongType[]>([]);

  useEffect(() => {
    const getFav = async () => {
      const fav = await getFavoriteSongs();
      setFavSongs(fav);
    };
    getFav();
  }, []);

  const removeFav = (trackId: number) => {
    setFavSongs(favSongs.filter((song) => song.trackId !== trackId));
  };

  return (
    <StyledMain>
      <h2>Favorites: </h2>
      <br />
      <StyledFavorites>
        {favSongs && favSongs
          .map((music: SongType) => (<MusicCard
            key={ music.trackId }
            music={ music }
            removeFav={ () => removeFav(music.trackId) }
          />))}
      </StyledFavorites>
    </StyledMain>
  );
}

export default Favorites;
