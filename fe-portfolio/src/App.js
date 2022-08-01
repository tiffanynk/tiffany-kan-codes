import './App.scss';
import { About, Footer, Header, Navbar, Skills, Projects } from './components';

const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <Header />
      <About />
      <Projects />
      <Skills />
      <Footer />
    </div>
  );
};

export default App;
