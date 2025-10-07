import Example from "./components/SimpleTransition";
import Example1 from "./components/DropDown";
import Example2 from "./components/Navigation";


export default function App() {
  return (
    <div className="App">
      <Example2 />
      <Example />
      <div style={{float:"right"}}><Example1 /></div>
    </div>
  );
}


