
import './App.css';
import Electronic from "./Allpage/Electronic.jsx";
import Mobile from "./Allpage/Mobile.jsx";
import Navbar from './Navbar';
import { Switch, Route } from "react-router-dom";
import Header from './Header';
import Banner from './Banner';



function App() {
  return (
    <>
<Header />
<Navbar />
<Banner/>

      <Switch>
        <Route exact path="/" component={Electronic} />
        <Route path="/Electronic" component={Electronic} />
        <Route path="/mobile" component={Mobile} />
      </Switch>



    </>
  );
}

export default App;
