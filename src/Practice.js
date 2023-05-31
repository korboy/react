import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Link, useNavigate } from 'react-router-dom';
import Hello from './component/Hello';
import Welcome from './component/Welcome';



function Practice() {
    // let navigate = useNavigate();
    return (
        <div className='App'>

            <BrowserRouter>
                <nav>
                    <Link to="/html">html </Link>

                    <Link to="/Welcome">welcome</Link>
                </nav>

                <Routes>

                    <Route path="/html" element={<Hello />} />
                    <Route path="/Welcome" element={<Welcome />} />
                </Routes>

            </BrowserRouter>

        </div>
    )

}
export default Practice;
