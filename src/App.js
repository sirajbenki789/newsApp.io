import './App.css';
import Navbar from './components/Navbar';
import NewsItems from './components/NewsItems';
// import MyComponent from './components/Counting.js';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <NewsItems pageSize={5}/>
  {/* <MyComponent/> */}
    </div>
  );
}

export default App;
