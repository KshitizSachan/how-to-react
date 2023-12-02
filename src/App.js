import Map_filter from './components/restfulapi_axios_map_filter'
import State from './components/states'
import EventHandling from './components/eventHandling'
import Parent from './components/props/parent'
import ContVsUnControlled from './components/controlled_uncontrolled_components'
import VirtualDom from './components/virtualDOM'
import InnerHTML from './components/innerHTML_statefull_stateless'
import Fragments from './components/fragments'


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
    <InnerHTML />
    <Fragments />
    </div>
  );
}

export default App;
