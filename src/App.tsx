import { Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import NotFound from './components/NotFound';
import Search from './components/Search';
import Album from './components/Album';
import Favorites from './components/Favorites';
import Profile from './components/Profile';
import ProfileEdit from './components/ProfileEdit';
import { GlobalStyle } from './style/GlobalStyle';
import Layout from './components/Layout';

function App() {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={ <Login /> } />
        <Route element={ <Layout /> }>
          <Route path="/search" element={ <Search /> } />
          <Route path="/album/:id" element={ <Album /> } />
          <Route path="/favorites" element={ <Favorites /> } />
          <Route path="/profile" element={ <Profile /> } />
          <Route path="/profile/edit" element={ <ProfileEdit /> } />
        </Route>
        <Route path="*" element={ <NotFound /> } />
      </Routes>
    </>
  );
}

export default App;
