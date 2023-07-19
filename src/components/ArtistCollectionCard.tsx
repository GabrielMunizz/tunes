import { Link } from 'react-router-dom';
import { AlbumType } from '../types';

type PropsType = {
  result: AlbumType;
  key: number;
};

function ArtistCollectionCard({ key, result }: PropsType) {
  const {
    artistName,
    collectionId,
    collectionName,
    collectionPrice,
    artworkUrl100,
    releaseDate,
    trackCount,
    currency } = result;
  return (
    <Link className="cardLink" to={ `/album/${collectionId}` }>
      <section key={ key }>
        <h2>{collectionName}</h2>
        <img src={ artworkUrl100 } alt={ artistName } />
        <h3>{`Tracks: ${trackCount}`}</h3>
        <h3>{`Released: ${releaseDate}`}</h3>
        <h4>{`Price: ${collectionPrice}`}</h4>
        <h4>{`Currency: ${currency}`}</h4>
      </section>
    </Link>
  );
}

export default ArtistCollectionCard;
