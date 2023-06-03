import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Home, AllItems, Details } from './layouts/layouts';

function App() {
  return (
    <div className="App">
      {/* <Home /> */}
      <AllItems />
      {/* <Details /> */}
    </div>
  );
}

export default App;
