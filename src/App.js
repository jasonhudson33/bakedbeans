import './App.css';

import { HelmetProvider } from 'react-helmet-async';

import Router from './Router/Router';

function App() {
  return (
    <div>
      <HelmetProvider>
        <Router />
      </HelmetProvider>
    </div>
  );
}

export default App;
