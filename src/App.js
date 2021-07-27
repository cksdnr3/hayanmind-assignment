import React from 'react';
import GlobalStyle from './styles/style';
import InfiniteScrollList from './components/InfiniteScrollList';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <InfiniteScrollList />
    </div>
  );
}

export default App;
