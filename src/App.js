import React, { lazy, Suspense } from 'react';
import styles from "./App.css";


import { MyContextProvider } from "./components/context/myContext";
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
import HelperFunction from './components/helper_functions';
import ArrayFunctions from './components/arrays_of_functions';
import CustomHook from './components/custom hooks/customHook';
import PromisesAsyncAwait from './components/promises';
import SearchFilter from './components/search_filter';

const LazyComponent = lazy(() => import('./components/lazyLoading'));



function App() {

  return (
    <MyContextProvider>
    <ParentContext>

          <h2 style={{color:"red"}}>React Basic Concepts Practice</h2>
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
          <Suspense fallback={<div>Loading...</div>}>
          <LazyComponent />
          </Suspense>
          <HelperFunction/>
          <ArrayFunctions />
          <CustomHook />
          <PromisesAsyncAwait />
          <SearchFilter />

    </ParentContext>
    </MyContextProvider>
  );
}

export default App;
