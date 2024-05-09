import "./App.css";
import Navbar from './Pages/Home/Navbar'
import Home from './Pages/Home/Homescreen'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
