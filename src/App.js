import Header from "./components/Header"
import './App.css';
 
import Footer from "./components/Footer";
import HeroLayout from "./components/HeroLayout";
import Body from "./components/Body";
 

function App() {
  return (
    <div className="main">
    
    <Header/>
    <Body/>
    <HeroLayout/>
    <Footer/>

    </div>
  );
}

export default App;
   