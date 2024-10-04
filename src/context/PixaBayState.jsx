import React, { useEffect, useState } from "react";
import PixaBayContext from "./PixaBayContext";

const PixaBayState = (props) => {
  const [imageData,setImageData] = useState([])
  const [query,setQuery] = useState('london')
  const api_key ="46198128-41e53871740191192d1862ad3";

  useEffect(() => {
    const fetchData = async () => {
      const api = await fetch(
        `https://pixabay.com/api/?key=${api_key}&q=${query}&image_type=photo&pretty=true&per_page=100`
      );
      const data = await api.json() 
      setImageData(data.hits)
      console.log(data);
    };
    fetchData();
  }, [query]);

const fetchImageByCategory = async (cat) =>{
    const api = await fetch(
      `https://pixabay.com/api/?key=${api_key}&category=${cat}&image_type=photo&pretty=true&per_page=100`
    );
    const data = await api.json() 
    setImageData(data.hits)
    console.log(data);


}

  return (
    <PixaBayContext.Provider value={{imageData, fetchImageByCategory, setQuery}}>
      {props.children}
    </PixaBayContext.Provider>
  );
};

export default PixaBayState;
