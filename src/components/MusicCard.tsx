import { useEffect, useState } from 'react';
import { SongType } from '../types';
import { StyledAudio } from '../style/StyledAudio.style';
import { StyledAudioContainer } from '../style/StyledAudioContainer.style';
import { addSong, removeSong } from '../services/favoriteSongsAPI';

type MusicCardProps = {
  music: SongType
};

function MusicCard({ music }: MusicCardProps) {
  const { trackId, trackName, previewUrl } = music;
  const [isChecked, setIsChecked] = useState(false);
  const [song, setSong] = useState<SongType>();

  const handleChecked = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
    setSong(music);
  };
  useEffect(() => {
    const getSong = async () => {
      const data = isChecked ? await addSong(song as SongType)
        : await removeSong(song as SongType);
      console.log(data);
    };
    getSong();
  }, [song]);

  return (
    <StyledAudioContainer>
      <span>{trackName}</span>
      <div className="inputContainer">
        <StyledAudio data-testid="audio-component" src={ previewUrl } controls>
          <track kind="captions" />
          O seu navegador não suporta o elemento
          {' '}
          {' '}
          <code>audio</code>
          .
        </StyledAudio>
        <label data-testid={ `checkbox-music-${trackId}` }>
          <input
            type="checkbox"
            checked={ isChecked }
            name="favoriteSongs"
            onChange={ (event) => handleChecked(event) }
          />
          <img
            src={ isChecked ? '/src/images/checked_heart.png'
              : '/src/images/empty_heart.png' }
            alt="favorite"
          />
        </label>
      </div>
    </StyledAudioContainer>
  );
}

export default MusicCard;
