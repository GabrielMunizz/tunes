import { Link } from 'react-router-dom';
import { AlbumType } from '../types';

type PropsType = {
  result: AlbumType;
};

function ArtistCollectionCard({ result }: PropsType) {
  const {
    artistName,
    collectionId,
    collectionName,
    collectionPrice,
    artworkUrl100,
    releaseDate,
    trackCount,
    currency } = result;
  const formatDate = (date: string) => {
    return new Date(date).toLocaleString().substring(0, 10);
  };
  return (
    <Link
      className="cardLink"
      data-testid={ `link-to-album-${collectionId}` }
      to={ `/album/${collectionId}` }
    >
      <section>
        <h2>{collectionName}</h2>
        <img src={ artworkUrl100 } alt={ artistName } />
        <h3>{`Tracks: ${trackCount}`}</h3>
        <h3>{`Released: ${formatDate(releaseDate)}`}</h3>
        <h4>{`Price: ${collectionPrice}`}</h4>
        <h4>{`Currency: ${currency}`}</h4>
      </section>
    </Link>
  );
}

export default ArtistCollectionCard;
