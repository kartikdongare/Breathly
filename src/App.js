
// import './App.css';
import MeditationSection from './Components/MeditationSection';
import NavBar from './Components/NavBar';
import {BrowserRouter as Router,Routes,Route, useLocation} from 'react-router-dom'
import FooterNav from './Components/FooterNav';
import SleepPage from './Components/SleepPage';
import MediaPage from './Components/MediaPage';
import MeditationPage from './Components/MeditationPage'
import RelaxPage from './Components/RelaxPage'
import MelodyPage from './Components/MelodyPage'
import Setting from './Components/Setting';
import Account from './Components/Account'
import Subscriptions from './Components/Subscriptions'
import SignPage from './Components/SignPage';
import LoginPage from './Components/LoginPage';
import { useEffect } from 'react';
import SignUpPage from './Components/SignUpPage'
function App() {
  let loc=useLocation();
  let x=loc.pathname==='/signinpage'
  let y=loc.pathname==='/signuppage'
  let z=loc.pathname==='/loginpage'

  return (
    <div>
    {!x && !z && !y && <NavBar/>}
        <Routes>
          <Route path='/' element={ <MeditationSection/>}/>
          <Route path='/sleep' element={ <SleepPage/>}/>
          <Route path='/mediapage/:id' element={<MediaPage/>}/>
          <Route path='/meditationpage' element={<MeditationPage/>}/>
          <Route path='/relax' element={<RelaxPage/>}/>
          <Route path='/melodies' element={<MelodyPage/>}/>
          <Route path='/setting' element={<Setting/>}/>
          <Route path='/account' element={<Account/>}/>
          <Route path='/subscriptions' element={<Subscriptions/>}/>
          <Route path='/signinpage' element={<SignPage/>}/>
          <Route path='/loginpage' element={<LoginPage/>}/>
          <Route path='/signuppage' element={<SignUpPage/>}/>

        </Routes>
        
        {!x && !z&& !y && <FooterNav/>}
    </div>
  );
}

export default App;
