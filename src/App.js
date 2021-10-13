import Greet from "./1.components/1.function/Greet";
import { Named } from "./1.components/1.function/Named";
import { NamedClass } from "./1.components/2.class/NamedClass";
import Welcome from "./1.components/2.class/Welcome";

function App() {
  return (
    <div className="container">
        <h1>Welcome to ReactJS</h1>
        <Greet />
        <Greet />
        <Greet />
        <Named />
        <Welcome />
        <NamedClass />
    </div>
  );
}

export default App;
