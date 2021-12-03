
import './App.css';
import BlogList from './components/BlogList/BlogList';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header'

function App() {
  return (
    <div className="App">
      <Header/>
      <BlogList/>
      <Footer/>
    </div>
  );
}

export default App;
