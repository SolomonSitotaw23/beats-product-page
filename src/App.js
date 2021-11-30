import Case from "./components/Case";
import Heading from "./components/Heading";
import Nav from "./components/Nav";
import Specs from "./components/Specs";

function App() {
  return (
    <div className="App">
      <Nav />
      <Heading />
      <Specs />
      <Case />
    </div>
  );
}

export default App;
