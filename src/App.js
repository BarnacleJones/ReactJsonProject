import './App.css';
import Nav from './Components/Nav';
import Home from './Components/Home';
import SCP002 from './Components/SCP002';
import SCP003 from './Components/SCP003';
import SCP004 from './Components/SCP004';
import SCP005 from './Components/SCP005';
import SCP006 from './Components/SCP006';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (    
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Nav />
      <Routes>        
        <Route path="/" element={<Home />} />
        <Route path="/SCP002" element={<SCP002 />} />
        <Route path="/SCP003" element={<SCP003 />} />
        <Route path="/SCP004" element={<SCP004 />} />
        <Route path="/SCP005" element={<SCP005 />} />
        <Route path="/SCP006" element={<SCP006 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
