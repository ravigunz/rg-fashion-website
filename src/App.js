import "bootstrap/dist/css/bootstrap.min.css";
// import HomeLayout from "./layouts/home/HomeLayout";
import "./App.css";
// import AllItemLayout from "./layouts/allItem/AllItemLayout";
// import ProductDetailsLayout from "./layouts/productDetails/ProductDetailsLayout";

import { Home, AllItems, Details } from './layouts/layouts';

function App() {
  return (
    <div className="App">
      <Home />
      {/* <AllItems /> */}
      {/* <Details /> */}
    </div>
  );
}

export default App;
