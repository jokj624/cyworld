import { Route } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import MainPage from './pages/MainPage';
import LetterPage from './pages/LetterPage';

function App() {
  return (
    <>
      <Helmet>
        <title>수고했어!</title>
      </Helmet>
      <Route component = {MainPage} path = '/' exact />
      <Route componet = {LetterPage} path = '/letter' />
    </>
  );
}

export default App;