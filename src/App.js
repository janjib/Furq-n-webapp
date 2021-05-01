import React from 'react';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import ThirdPage from './Component/ThirdPage'

import 'bootstrap/dist/css/bootstrap.min.css';
import MainNavigation from './Component/MainNavigation'
import './App.css';
import Homepage from './Component/Homepage';
import { SurahListProvider } from './AppContext';
import SecondPage from './Component/SecondPage';
import AboutPage from './Component/AboutPage';
import ScrollToTop from './Component/ScollToTop';
import ErrorPage from './Component/ErrorPage';


function App() {


  
  return (
   <Router>
    <SurahListProvider>
 <div className="App">
 <MainNavigation />
 
<ScrollToTop />
<Switch>
      <Route path='/Furqon-webapp'  exact component={Homepage}></Route>
      <Route path='/Furqon-webapp/Second-page'  exact component={SecondPage}></Route>
      <Route path='/Furqon-webapp/Third-page/:number/:surahName/:revelation'  exact component={ThirdPage}></Route>
      <Route path='/Furqon-webapp/About-page'  exact component={AboutPage}></Route>
      <Route path='*'   component={ErrorPage}></Route>
      
      </Switch>
      
    </div>
    </SurahListProvider>
    </Router>

    
  );
}


export default App;
