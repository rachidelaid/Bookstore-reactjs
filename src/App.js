import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Nav from './components/Nav';
import Categories from './components/Categories';
import Books from './components/Books';

const App = () => (
  <div className="App">
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </BrowserRouter>
  </div>
);

export default App;
