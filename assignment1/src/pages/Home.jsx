import React, { useState} from "react";
import Card from "../components/Card";
import Cars from "../assets/cars.json";
import Pagination from "../components/Pagination";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Search from "../components/Search";
import { useSelector } from "react-redux";


function Home() {
  const {page} = useParams()
  const pageNo = parseInt(page);
  const searchItem = useSelector((state) => state.searchItem);

  
  const navigate = useNavigate();
  const [cars, setCars] = useState(Cars.cars);
  const [currentPage, setCurrentPage] = useState(1);
  useEffect(() => {
    setCurrentPage(pageNo);
  })

  useEffect(() =>{
    navigate(`/page/1`);
  },[searchItem.searchItem])
  
  console.log(currentPage)
  const filteredCars = cars.filter((car) =>
    car.name.toLowerCase().includes(searchItem.searchItem.toLowerCase())
  );

  const carsPerPage = 6;
  const paginationStart = (currentPage - 1) * carsPerPage;
  const paginationEnd = currentPage * carsPerPage;
  const currentCars = filteredCars.slice(paginationStart, paginationEnd);
  

  const onPageChange = (i) => {
    navigate(`/page/${i}`)
  }

  return (
    <div className="container mx-auto mt-8">
      <Search/>
      
      <div className="grid grid-cols-3 gap-4 mt-4">
        {currentCars.map((car) => (
          <Card key={car.id} car={car} />
        ))}
      </div>
      <div>
        <Pagination currentPage={currentPage} onPageChange={onPageChange}/>
      </div>
    </div>
  );
}

export default Home;
