import './App.css';
import Shop from "./components/Shop/Shop"
import productsArr from "./products.json"

function App() {
  let shopName = "ishop"

  return (
    <div className="App">

      <Shop
        name = {shopName}
        products = {productsArr}
      />

    </div>
  );
}

export default App;