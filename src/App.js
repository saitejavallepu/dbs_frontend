
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Addtransaction from './component/Addtransaction';
import Listtransaction from './component/Listtransaction';
import Navigationbar from './component/Navigationbar';
import Showtransaction from './component/Showtransaction';
import {Routes,Link, Route} from 'react-router-dom'
import Dashboard from './component/Dashboard';
import Login from './component/Login';
import demo from './component/demo';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}></Route>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/transaction" element={<Addtransaction/>}/>
        <Route path="/listtransaction" element={<Listtransaction/>}/>
        <Route path="/transaction/:id" element={<Showtransaction />} />
      </Routes>

      </BrowserRouter>
      
    </div>
  );
}

export default App;
