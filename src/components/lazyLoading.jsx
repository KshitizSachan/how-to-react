

const LazyLoading = () =>{
    return (
    <div>
        <h3>Lazy Loading</h3>
        <p>Lazy loading is a technique in React that allows you to defer the 
        loading of certain components until they are actually needed. This can 
        improve the initial loading time of your application by only loading 
        the components that are essential for the initial view.</p>

        <p>Lazy loading is commonly used with React Router for route-based code 
        splitting.</p>
    </div>
    )
}

export default LazyLoading;
//  Better use case of lazy loading

// import { lazy, Suspense } from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// const Home = lazy(() => import('./Home'));
// const About = lazy(() => import('./About'));
// const Contact = lazy(() => import('./Contact'));

// const App = () => {
//   return (
//     <Router>
//       <Suspense fallback={<div>Loading...</div>}>
//         <Switch>
//           <Route path="/" exact component={Home} />
//           <Route path="/about" component={About} />
//           <Route path="/contact" component={Contact} />
//         </Switch>
//       </Suspense>
//     </Router>
//   );
// };

// export default App;



