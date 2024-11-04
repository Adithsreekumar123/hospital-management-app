import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddSubscribersPage from './component/AddSubscribersPage';
import SearchSubscribersPage from './component/SearchSubscribersPage';
import Login from './component/Login';
import View from './component/View';


function App() {
  return (
    
    <BrowserRouter>
    <Routes>
    <Route path='/login' element={<Login/>} />
<Route path='/' element={<AddSubscribersPage/>} />
<Route path='/view' element={<View/>} />

<Route path='/search' element={<SearchSubscribersPage />} />



    </Routes>
    </BrowserRouter>
  );
}

export default App;
