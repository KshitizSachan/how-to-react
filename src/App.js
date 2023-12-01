import Map_filter from './components/axios_map_filter'
import State from './components/states'
import EventHandling from './components/eventHandling'
import Parent from './components/props/parent'
import ContVsUnControlled from './components/controlled_uncontrolled_components'
import VirtualDom from './components/virtualDOM'

import styles from "./App.css"


function App() {
  return (
    <div className="App">
    <p>Hello World</p>
    <Map_filter />
    <State />
    <Parent />
    <EventHandling />
    <ContVsUnControlled />
    <VirtualDom />
    </div>
  );
}

export default App;
