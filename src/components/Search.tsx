import { useState } from 'react';
import { RotatingLines } from 'react-loader-spinner';
import { StyledMain } from '../style/StyledMain.style';
import { StyledBlueButton } from '../style/StyledButtons.style';
import { StyledSearch } from '../style/StyledSearch';
import { InputTextType, AlbumType, FormSubmitType } from '../types';
import searchAlbumsAPI from '../services/searchAlbumsAPI';
import ArtistCollectionCard from './ArtistCollectionCard';
import { StyledCardContainer } from '../style/StyledCardContainer.style';

function Search() {
  const [search, setSearch] = useState('');
  const [backupSearch, setBackupSearch] = useState('inicial');
  const [loading, setLoading] = useState(false);
  const [searchData, setSearchData] = useState<AlbumType[]>([]);

  const handleSearch = ({ target }: InputTextType) => {
    setSearch(target.value);
  };

  const handleSubmit = async (event: FormSubmitType) => {
    event.preventDefault();
    if (searchData.length > 0) {
      setSearchData([]);
    }
    setLoading(true);
    const data = await searchAlbumsAPI(search);
    setSearchData(data);
    setBackupSearch(search);
    setSearch('');
    setLoading(false);
  };
  return (
    <StyledMain>
      {!loading && (
        <StyledSearch onSubmit={ (event) => handleSubmit(event) }>
          <div>
            <h2>O que quer ouvir?</h2>
          </div>
          <input
            value={ search }
            name="search"
            data-testid="search-artist-input"
            type="text"
            onChange={ handleSearch }
          />
          <StyledBlueButton
            data-testid="search-artist-button"
            disabled={ search.length < 2 }
          >
            Search

          </StyledBlueButton>
        </StyledSearch>
      )}
      {loading && (
        <>
          <h1>Carregando...</h1>
          <br />
          <RotatingLines
            strokeColor="grey"
            strokeWidth="5"
            animationDuration="1.75"
            width="96"
            visible
          />
        </>
      )}
      {searchData.length > 0 && (
        <>
          <h1 className="searchResult">
            Resultado de álbuns de:
            {' '}
            {backupSearch}
          </h1>
          <StyledCardContainer>
            {searchData.map((result) => (
              <ArtistCollectionCard
                key={ result.artistId }
                result={ result }
              />))}
          </StyledCardContainer>
        </>
      )}
      {searchData.length === 0 && !loading && (
        <h1 className="notFound">Nenhum álbum foi encontrado</h1>
      )}

    </StyledMain>
  );
}

export default Search;
