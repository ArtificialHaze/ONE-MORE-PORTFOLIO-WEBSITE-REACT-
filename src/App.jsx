import "./App.css";
import {
  Navbar,
  Introduction,
  Skills,
  Works,
  Contact,
  Footer,
} from "./importExports";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Introduction />
      <Skills />
      <Works />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
