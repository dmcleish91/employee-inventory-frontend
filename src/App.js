import './App.css';
import MainCards from './components/MainCards';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div>
      <Navbar/>
      <Sidebar/>
      <MainCards/>
    </div>
  );
}

export default App;
