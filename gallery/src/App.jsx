import { useState, useEffect } from "react";

import "./App.css";
import { Imagecontainer } from "./components/Imagecontainer";
import { Imagesearch } from "./components/Imagesearch";
function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState("");
  useEffect(() => {
    fetch(
      `https://pixabay.com/api/?key=43551388-29c3c23642f1f71ddd3c3d992&q=${term}&image_type=photo&pretty=true`
    )
      .then((res) => res.json())
      .then((data) => {
        setImages(data.hits);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, [term]);
  return (
    <div className="gfg-div">
      <div className="container mx-auto">
        <Imagesearch
          searchText={(text) => {
            setTerm(text);
          }}
        />
        {isLoading ? (
          <div className="text-6xl text-center mx-auto mt-32">Loading up</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2  lg:gird-cols-3 image">
            {images.map((image) => (
              <Imagecontainer key={image.id} image={image} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
