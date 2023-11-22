import Map_filter from './components/axios_map_filter'
import State from './components/states'
import Parent from './components/props/parent'

import styles from "./App.css"


function App() {
  return (
    <div className="App">
    <p>Hello World</p>
    <Map_filter />
    <State />
    <Parent />
    </div>
  );
}

export default App;
