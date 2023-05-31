import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from './component/Login'
import SignUp from './component/SignUp'
import Find from './component/Find';




function App() {


  return (
    <div >
      <BrowserRouter>
        <Routes>
          <Route path='/' Component={Login} />
          <Route path='/SignUp' Component={SignUp} />
          <Route path='/Find' Component={Find} />
        </Routes>
      </BrowserRouter>



    </div >
  )

}
export default App;
