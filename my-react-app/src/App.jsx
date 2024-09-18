import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Food from "./Food.jsx";
import Card from "./Card.jsx";
import Button from "./Button.jsx";
import Students from "./Students.jsx"
function App() { 
  return(
    <>
    <Header/>
    <Food/>
    <Card/>
    <Card/>
    <Footer/>
    <Button/>
    <Students name="shell" age={34} isStudents ={true}/>
    <Students name="dennis" age={23} isStudents = {true}/>
    <Students name="Denno" age={58} isStudents = {false}/>
    
   
    </>
  );
  
}
export default App
