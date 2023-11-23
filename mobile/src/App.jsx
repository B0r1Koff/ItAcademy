import ClientList from "./components/ClientList";
import { Component } from "react";

class App extends Component {
  render() {
    console.log('Рендер App');
    return (
      <div>
        <ClientList />
      </div>
    );
  }
}


export default App;