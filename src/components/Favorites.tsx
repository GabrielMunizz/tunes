import { useEffect, useState } from 'react';
import { getFavoriteSongs, removeSong } from '../services/favoriteSongsAPI';
import { SongType } from '../types';
import MusicCard from './MusicCard';

function Favorites() {
  const [favSongs, setFavSongs] = useState<SongType[]>([]);

  useEffect(() => {
    const getFav = async () => {
      const fav = await getFavoriteSongs();
      setFavSongs(fav);
    };
    getFav();
  }, []);

  useEffect(() => {
  }, []);

  const getFavFromLocalStorage = JSON
    .parse(localStorage.getItem('favorite_songs') as string);
  console.log(getFavFromLocalStorage);

  return (
    <>
      <h2>Favorites: </h2>
      <br />
      <div>
        {favSongs && favSongs
          .map((music: SongType) => <MusicCard key={ music.trackId } music={ music } />)}
      </div>
    </>
  );
}

export default Favorites;
