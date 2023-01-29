import './css/app.css';
import Home from './components/pages/Home';
import Menu from './components/Menu';
import TecnoAdd from './components/pages/TecnoAdd';
import TechnoList from './components/pages/TechnoList';

function App() {
  return (
    <>
   
    <Menu/>
    <Home/>  
    <TecnoAdd/>
    <TechnoList/>
    </>
  )
}

export default App;
