import { AlertClock } from "./AlertClock";
import { Clock } from "./Clock";
import { Container } from "./Container";
import { Counter } from "./Counter";
import { MouseClicker } from "./MouseClicker";
import { MyForm } from "./MyForm";
import { MyList } from "./MyList";
import { MyUncontrolledForms } from "./MyUncontrolledForms";
import { Welcome } from "./Welcome";
import { LanguageContext } from "./LanguageContext";
import { useState } from "react";
import { HelloWorld } from "./HelloWorld";

export function App() {
  const [language , setLanguage] = useState('en');

  function handleLanguage(language){
   setLanguage(language)
  }

  return (
  
   
    <div>
    <button onClick={()=>handleLanguage('it')}>ITA</button>
    <button onClick={()=>handleLanguage('en')}>ENG</button>

    <Container title={<h1> My awesome Application</h1>}>  

      <LanguageContext.Provider value={language}>
        <hr />
      <Welcome name= 'Luca'/>
      <HelloWorld/>
      <AlertClock />
      <Counter />
      <MouseClicker />
      <MyForm />
      <MyUncontrolledForms/> 
      <Clock />
      <MyList items= {[
        {id: 1 , name: 'Jane', age:30},
        {id: 1 , name: 'Jimmy', age:44},
        {id: 1 , name: 'John', age:29},
        {id: 1 , name: 'Lucy', age:35}
     ]}
    /> 
 </LanguageContext.Provider>
     </Container>
    
     </div>
  );
}
