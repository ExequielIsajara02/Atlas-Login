import './App.css';
import Footer from './components/Footer';
import Form from './components/Form';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App bg-[#1B1B1B] dark:bg-black h-screen font-crombie-font">
      <NavBar/>
      <Form/>
      <Footer/>
    </div>
  );
}

export default App;
