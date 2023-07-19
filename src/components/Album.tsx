import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { RotatingLines } from 'react-loader-spinner';
import { SongType } from '../types';
import getMusics from '../services/musicsAPI';
import { StyledMain } from '../style/StyledMain.style';
import MusicCard from './MusicCard';

function Album() {
  const [savedMusics, setSavedMusics] = useState<SongType[]>([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const onlyMusics = savedMusics.slice(1);
  useEffect(() => {
    const getData = async () => {
      const data = await getMusics(id as string);
      setSavedMusics(data as SongType[]);
      setLoading(false);
    };
    getData();
  }, [id]);

  return (
    <StyledMain>
      {loading && (
        <div className="loadingContainer">
          <h1>Carregando...</h1>
          <RotatingLines
            strokeColor="grey"
            strokeWidth="5"
            animationDuration="1.75"
            width="96"
            visible
          />
        </div>
      )}
      {!loading && (
        <div className="musicContainer">
          <h1 className="artistNameTitle" data-testid="artist-name">
            {savedMusics[0].artistName}
          </h1>
          <h2 data-testid="album-name">{savedMusics[0].collectionName}</h2>
          <div>
            {onlyMusics
              .map((musics) => <MusicCard key={ musics.trackId } musics={ musics } />)}

          </div>
        </div>
      )}
    </StyledMain>
  );
}

export default Album;
