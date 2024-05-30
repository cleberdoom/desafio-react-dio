
import { BrowserRouter as Router,Routes,Route,Link } from 'react-router-dom'
import {Home} from './Home/index';
import {Login} from '././Login/index';
import {Feed} from './Feed/index'
import { Signup } from './Signup';
import  Button  from '../components/Button';







function App() {
  return(
    <>
    <Router>  
      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/feed' element={<Feed />} />
        <Route path='/signup' element={<Signup />} />

      </Routes>
    </Router>
    </>
  )
}

export default App;
