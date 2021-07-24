import { Route } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import styled from 'styled-components';
import MainPage from './pages/MainPage';
import LetterPage from './pages/LetterPage';
import GalleryPage from './pages/GalleryPage';
import Banner from './components/common/Banner';

const Div = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    padding: 15px;
    width: 100%;
    background: #a584ff;
`;

function App() {
  return (
    <>
      <Helmet>
        <title>황지은 사랑한다</title>
      </Helmet>
      <Div>
        <Route component = {MainPage} path = '/' exact />
        <Route component = {LetterPage} path = "/letter" />
        <Route component={GalleryPage} path="/gallery" />
        <Banner/>
      </Div>
    </>
  );
}

export default App;