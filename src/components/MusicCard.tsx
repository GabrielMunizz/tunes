import { SongType } from '../types';

type MusicCardProps = {
  musics: SongType
};

function MusicCard({ musics }: MusicCardProps) {
  const { trackName, previewUrl } = musics;
  return (
    <div>
      <span>{trackName}</span>
      <audio data-testid="audio-component" src={ previewUrl } controls>
        <track kind="captions" />
        O seu navegador não suporta o elemento
        {' '}
        {' '}
        <code>audio</code>
        .
      </audio>
    </div>
  );
}

export default MusicCard;
