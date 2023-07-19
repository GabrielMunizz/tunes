import { SongType } from '../types';
import { StyledAudio } from '../style/StyledAudio.style';
import { StyledAudioContainer } from '../style/StyledAudioContainer.style';

type MusicCardProps = {
  musics: SongType
};

function MusicCard({ musics }: MusicCardProps) {
  const { trackName, previewUrl } = musics;
  return (
    <StyledAudioContainer>
      <span>{trackName}</span>
      <StyledAudio data-testid="audio-component" src={ previewUrl } controls>
        <track kind="captions" />
        O seu navegador não suporta o elemento
        {' '}
        {' '}
        <code>audio</code>
        .
      </StyledAudio>
    </StyledAudioContainer>
  );
}

export default MusicCard;
