import React, {useEffect, useState}from 'react'
import data from "../assets/data.json"
import Card from '../components/Card';

function Home() {
    const [properties, setProperties] = useState(data.properties);
    const [filteredData, setFileterdData] = useState([]);
    const [city, setCity] = useState("Mumbai");
    const [currentItems, setCurrentItems] = useState([]);
    const [page, setPage] = useState(1);
    const skip = 3;

    useEffect(() => {
        const items = properties.filter(
          (item) => item.city.toLowerCase() === city.toLowerCase()
        );
        setFileterdData(items);
        setCurrentItems([...items].slice(0, 6));
    },[])


    useEffect(() => {
      const items = properties.filter(
        (item) => item.city.toLowerCase() === city.toLowerCase()
      );
      setFileterdData(items);
      setCurrentItems([...items].slice(0, 6));
      setPage(1);
    }, [city]);

   
    
    const handleCityChange = (newCity) => {
      setCity(newCity);
    };

    const handleLoadMore = () => {
      setCurrentItems([
        ...currentItems,
        ...[...filteredData].slice(page * skip, page * skip+skip),
      ]);
      setPage(page + 1);
    };
    


  return (
    <div className="container mx-auto mt-8">
      <div className="flex space-x-4">
        <button
          onClick={() => handleCityChange("Mumbai")}
          className={`${
            city === "Mumbai"
              ? "bg-blue-500 text-white"
              : "bg-gray-300 text-gray-800"
          } hover:bg-blue-700 font-bold py-2 px-4 rounded`}
        >
          Mumbai
        </button>
        <button
          onClick={() => handleCityChange("Paris")}
          className={`${
            city === "Paris"
              ? "bg-blue-500 text-white"
              : "bg-gray-300 text-gray-800"
          } hover:bg-blue-700 font-bold py-2 px-4 rounded`}
        >
          Paris
        </button>
        <button
          onClick={() => handleCityChange("New York")}
          className={`${
            city === "New York"
              ? "bg-blue-500 text-white"
              : "bg-gray-300 text-gray-800"
          } hover:bg-blue-700 font-bold py-2 px-4 rounded`}
        >
          New York
        </button>
        <button
          onClick={() => handleCityChange("London")}
          className={`${
            city === "London"
              ? "bg-blue-500 text-white"
              : "bg-gray-300 text-gray-800"
          } hover:bg-blue-700 font-bold py-2 px-4 rounded`}
        >
          London
        </button>
      </div>
      <div className="grid grid-cols-3 gap-4 mt-4">
        {currentItems.map((item, i) => (
          <Card key={i} item={item} />
        ))}
      </div>
      <div className="flex items-center justify-center mt-5">
        
          <button
            onClick={handleLoadMore}
            className="bg-blue-200 hover:bg-blue-400 active:bg-blue-500 font-bold py-2 px-4 rounded  focus:outline-none"
          >
            Show more
          </button>
        
      </div>
    </div>
  );
}

export default Home