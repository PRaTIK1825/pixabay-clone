import React, { useContext } from "react";
import PixaBayContext from "../context/pixabaycontext";
const images = () => {
  const { imageData } = useContext(PixaBayContext);
  // const data = useContext(PixaBayContext)
  return (
    <div className="container my-5">
      <div className="flex">
        {imageData.map((image) => (
          <div key={image.id}>
            <div className="item">
              <img src={image.largeImageURL} alt="someth " />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default images;
