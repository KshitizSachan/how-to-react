import { useState, useEffect } from "react";
import axios from "axios";

const MainComponent = () => {
  const [coffee, setCoffee] = useState([]);
  const [filteredCoffee, setFilteredCoffee] = useState([])

  //---------------Filter usage--------------------------------

  useEffect(() =>{
    const temp= coffee.filter((coffeeUnit) =>{
        return (
            coffeeUnit.title.toLowerCase().includes("c")
        )
    })
    setFilteredCoffee(temp)
  }, [coffee])


  //-----------------------------Axios Usage-----------------------
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.sampleapis.com/coffee/hot"
        );
        setCoffee(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      Hello World 2<h3>Restful api, Map Usage</h3>
      {coffee.map((coffee, index) => (
        <div>
          <div key={index}>
            {coffee.id}. {coffee.title}
          </div>
        </div>
      ))}

      <h3>Filter Usage</h3>
      {filteredCoffee.map((coffee, index) => (
        <div>
          <div key={index}>
            {coffee.id}. {coffee.title}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MainComponent;
