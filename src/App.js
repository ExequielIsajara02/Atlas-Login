import './App.css';
import Footer from './components/Footer';
import Form from './components/Form';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App bg-slate-100 dark:bg-black">
      <NavBar/>
      <Form/>
      <Footer/>
    </div>
  );
}

export default App;
