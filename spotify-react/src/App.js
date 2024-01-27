import './App.css';
import Header from '../src/componentes/Header/Header.css';
import Sidebar from './componentes/Sidebar/Sidebar.css';
import Footer from './componentes/Footer/Footer.css';
import Main from './componentes/Main/Main.css';

function App() {
  return (
    <div>
      <Sidebar/>
      <Header/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
