
import { BrowserRouter as Router,Route, Routes } from 'react-router-dom';
import StateEx from './components/StateEx'
import Login from './components/Login';
import MyCarousel from './components/MyCarousel';
function App() {
  return (
    <>
      <Routes>
      <Route path="/" element={<StateEx/>}/>
      <Route path="/login" element={<Login/>}/>
      </Routes>
     <MyCarousel/>
    </>
  );
}

export default App;
