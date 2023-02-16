//import { connect } from 'react-redux'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
//views
import * as Views from './views/index.js';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Views.Home/>}/>
        <Route path='/register' element={<Views.Register/>}/>
        <Route path='/login' element={<Views.Login/>}/>
        <Route path='/checkout' element={<Views.Checkout/>}/>
        <Route path='/products' element={<Views.Products/>}/>
        <Route path='/cart' element={<Views.Cart/>}/>
        <Route path='*' element={<Views.NotFound/>}/>
      </Routes>
    </Router>
  );
}

export default App;
