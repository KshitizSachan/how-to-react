import Map_filter from "./components/restfulapi_axios_map_filter";
import State from "./components/states";
import EventHandling from "./components/eventHandling";
import Parent from "./components/props/parent";
import ContVsUnControlled from "./components/controlled_uncontrolled_components";
import VirtualDom from "./components/virtualDOM";
import InnerHTML from "./components/innerHTML_statefull_stateless";
import Fragments from "./components/fragments";
import Debouncing from "./components/debouncing";
import Component1 from "./components/context/component1";
import Component2 from "./components/context/component2";
import ParentContext from "./components/context/parentComponent";

import { MyContextProvider } from "./components/context/myContext";
import styles from "./App.css";

function App() {

  return (
    <MyContextProvider>
    <ParentContext>

          <p>Hello World</p>
          <Map_filter />
          <State />
          <Parent />
          <EventHandling />
          <ContVsUnControlled />
          <VirtualDom />
          <InnerHTML />
          <Fragments />
          <Debouncing />
          <Component1 />
          <Component2 />
     
    </ParentContext>
    </MyContextProvider>
  );
}

export default App;
