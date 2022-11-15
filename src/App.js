import Home from './Home/home';
import Log from './Layout/LayoutLogIn/Log';
import Sign from './Layout/LayoutSign/index';
import LayoutFilm from './Layout/LayoutFilm/index';
import LayoutBuyTicket from './Layout/LayoutBuyTicket/index';
import LayoutMovie from './Layout/LayoutListMovie/index';
import LayoutBookTicket from './Layout/LayoutBookTicket/index';
import {Routes, Route, Link, Outlet, Switch} from 'react-router-dom';


function App(){
  return (
    <Routes>
      <Route exact index element={<Home/>}></Route>
      <Route path='home' element={<Home/>}></Route>
      <Route path='log' element={<Log/>}></Route>
      <Route path='sign' element={<Sign/>}></Route>
      <Route path='list_films' element={<LayoutMovie/>}></Route>
      <Route path='details_film/id=:id' element={<LayoutFilm/>}></Route>
      <Route path='buy_ticket/id=:id' element={<LayoutBuyTicket/>}></Route>
      <Route path='bookticket/id=:id' element={<LayoutBookTicket/>}></Route>
      <Route path='home/details_film/id=:id' element={<LayoutFilm/>}></Route>
      <Route path='list_films/details_film/id=:id' element={<LayoutFilm/>}></Route>
    </Routes>
  )
}

export default App

