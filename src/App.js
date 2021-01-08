import logo from './logo.svg';
import './App.css';
import Main from './component/Main'
import Navbar from './component/Navbar'

function App() {
  return (
    <>
      <section className="nav">
        <Navbar 
        />
      </section> 
      <section className="content">
        <Main/>
      </section>
    </>
  );
}

export default App;
