import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import About from './Components/About';



import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FRONTENDNAME } from './Constants';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        <Route path={FRONTENDNAME + '/'} element={<Home />} />
          <Route path={FRONTENDNAME + '/home'} element={<Home />} />
          <Route path={FRONTENDNAME + '/about'} element={<About />} />
          {/* <Route path={FRONTENDNAME + '/faq'} element={<Faq />} /> 
          <Route path={FRONTENDNAME + '/privacy'} element={<Privacy />} /> */}

        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
