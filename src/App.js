import './App.css';
import Navbar from './components/Navbar';
import NewsItems from './components/NewsItems';
// import MyComponent from './components/Counting.js';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  let pageSize=20;
  return (
    <div className="App">
      <Router>
      <Navbar />
        <Routes>
          <Route path="/home"  element={<NewsItems pageSize={pageSize} country='in' key='home' category='general'/>}/>
          <Route path="/business"  element={<NewsItems pageSize={pageSize} country='in' key='business' category='business'/>}/>
          <Route path="/entertainment" element={<NewsItems pageSize={pageSize} country='in' key='entertainment'  category='entertainment' />}/>
          <Route path="/general"  element={<NewsItems pageSize={pageSize} country='in' key='general' category='general'/>}/>
          <Route path="/health"  element={<NewsItems pageSize={pageSize} country='in' key='health' category='health' />}/>
          <Route path="/science"  element={<NewsItems pageSize={pageSize} country='in' key='science' category='science' />}/>
          <Route path="/sports"  element={<NewsItems pageSize={pageSize} country='in' key='sports' category='sports' />}/>
          <Route path="/technology"  element={<NewsItems pageSize={pageSize} country='in' key='technology' category='technology' />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
