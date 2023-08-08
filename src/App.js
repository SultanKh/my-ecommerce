import logo from './logo.svg';
import './App.css';
import LotterScreen from './components/lottery-screen/LotteryScreen'
import { Route, Router, Routes } from 'react-router-dom';
import LotteryItem from './components/lottery-item/LotteryItem';
import NotFoundPage from './pages/not-found-page/NotFoundPage';
import { useDispatch, useSelector } from 'react-redux';
import { useFetch } from './utils/api';
import { ACTIONS } from './store/actions';
import store from './store/store';
import { useEffect } from 'react';
import { SERVER_URL } from './utils/global';

function App() {

  // const response = useCallApi('https://dummyjson.com/products/')
  const page = 1
  const limit = 5


  const { data, Loading, error } = useFetch(`${SERVER_URL}`)


  store.dispatch({ type: ACTIONS.SET_LIST, payload: {data, Loading, error} })

  return (
    <div className="App">
      <header className="App-header">
        Welcome..
      </header>
      <Routes>
        <Route path='/' element={<LotterScreen />} />
        <Route path='games' element={<LotterScreen />} />
        <Route path='games/:id' element={<LotteryItem />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
