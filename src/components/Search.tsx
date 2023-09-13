import { useState } from 'react';
import { StyledMain } from '../style/StyledMain';
import { StyledButton } from '../style/StyledButtons';
import { StyledSearch } from '../style/StyledSearch';
import { InputTextType, AlbumType, FormSubmitType } from '../types';
import searchAlbumsAPI from '../services/searchAlbumsAPI';
import ArtistCollectionCard from './ArtistCollectionCard';
import { StyledCardContainer } from '../style/StyledCardContainer';
import Loading from './Loading';

function Search() {
  // Cria states para a busca, carregamento da pagina
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
            <h2>What do you wanna listen?</h2>
          </div>
          <input
            value={ search }
            name="search"
            data-testid="search-artist-input"
            type="text"
            onChange={ handleSearch }
          />
          <StyledButton
            data-testid="search-artist-button"
            disabled={ search.length < 2 }
          >
            Search

          </StyledButton>
        </StyledSearch>
      )}
      {loading && (
        <Loading />
      )}
      {searchData.length > 0 && (
        <>
          <h1 className="searchResult">
            Search result:
            {' '}
            {backupSearch.toUpperCase()}
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
      {searchData.length === 0 && backupSearch !== 'inicial' && !loading && (
        <h1 className="notFound">Nenhum álbum foi encontrado</h1>
      )}

    </StyledMain>
  );
}

export default Search;
