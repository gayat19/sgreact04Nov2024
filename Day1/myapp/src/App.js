import Game from "./Components/Game";
import { Inbox } from "./Components/Inbox/Inbox";
import Todos from "./Components/Todos/Todos";


function App() {
  var name = "Ramu";
  return (
    <section>
      {/* <h1>Hello {name}</h1> */}
      {/* <Game/> */}
     {/* <Inbox/> */}
     <Todos/>
    </section>
  );
}

export default App;
