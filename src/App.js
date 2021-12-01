import Case from "./components/Case";
import Heading from "./components/Heading";
import Nav from "./components/Nav";
import Specs from "./components/Specs";
import Styles from "./components/Styles";

function App() {
  return (
    <div className="App">
      <Nav />
      <Heading />
      <Specs />
      <Case />
      <Styles />
    </div>
  );
}

export default App;
