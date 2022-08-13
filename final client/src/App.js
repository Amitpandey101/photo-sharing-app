import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Landingpage from './Landingpage';
import PostView from './PostView/postview';
import Header from './Header/header'
import Form from "./Form/Form"



function App() {
  return (
  <>

<BrowserRouter>

<Route exact path="/" component={Landingpage}/>
<Route exact path="/Form" component={Form}/>
<Route  path="/postview" component={Header}/>
<Route exact path="/postview" component={PostView}/>
</BrowserRouter>


  </>
  );
}

export default App;
