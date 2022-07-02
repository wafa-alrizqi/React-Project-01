import './App.css';
import Navbar from './components/Navbar';
import SectionImg from './components/SectionImg';
import Card from './components/Card';
import CardData from './components/CardData';
import Footer from './components/Footer';

function App() {
  document.title = 'Interiors'
  let CardDetails=CardData.map( (cards) =>   {
    return <Card cards={cards}></Card>
  });

  return (
    <>
    <Navbar></Navbar>
    <SectionImg></SectionImg>
    <section className="container"> {CardDetails} </section>
    <Footer></Footer>
    </>
  );
}

export default App;
