import { Card } from 'react-bootstrap';
import './App.css';
import Header from './components/Header/Header';
import Singers from './components/Singers/Singers';


function App() {
 
  return (
    <div className="App">
       <Header></Header>
       <Singers></Singers>
       <Card></Card>
       
    </div>
  );
}

export default App;
