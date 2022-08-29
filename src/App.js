import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Item from './pages/Item';
import Items from './pages/Items';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={< Items />}></Route>
        <Route exact path='/view/:id' element={< Item />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
