import Case from "./components/Case";
import Footer from "./components/Footer";
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
      <Footer />
    </div>
  );
}

export default App;
