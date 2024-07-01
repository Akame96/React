import { AlertClock } from "./AlertClock";
import { Clock } from "./Clock";
import { Counter } from "./Counter";
import { MouseClicker } from "./MouseClicker";
import { MyForm } from "./MyForm";
import { Welcome } from "./Welcome";

export function App() {
  return (
    <div>
      <h1> My awesome Application</h1>
      <hr />
      <Welcome name="Maia" age={28} />
      <Welcome name= 'Luca'/>
      <Welcome name= 'Jim' age={16}/>
      <Welcome name= 'John' age={60}/>
      <AlertClock />
      <Counter />
      <MouseClicker />
      <MyForm />
      <Clock />
      
    </div>
  );
}
