import './App.css';
import HomePage from './pages/homePage/HomePage';
import { Route, Routes } from 'react-router-dom'
import WeatherPage from './pages/weatherPage/weatherPage';


function App() {
  return (

    <div className='page-container'>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/weather' element={<WeatherPage />} />
      </Routes>
    </div>


  );
}

export default App;
