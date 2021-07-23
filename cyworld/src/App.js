import { Route } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import MainPage from './pages/MainPage';

function App() {
  return (
    <>
      <Helmet>
        <title>수고했어!</title>
      </Helmet>
      <Route component = {MainPage} path = '/' exact />
    </>
  );
}

export default App;