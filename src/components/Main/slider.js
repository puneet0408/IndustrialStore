import sliderData from "./slideData";  // data file 
import "./main.css";
import { useState, useEffect } from "react";

 function Slider() {
  const [backImg , setbackground] = useState(sliderData);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(()=>{
    const lastIndex = backImg.length - 1 ;
    if(currentSlide < 0){
      setCurrentSlide(lastIndex);
    }
    if(currentSlide > lastIndex){
      setCurrentSlide(0);
    }
  },[currentSlide,backImg])

  const nextSlide = () => {
    setCurrentSlide(currentSlide === backImg.length-1 ? 0 : currentSlide + 1);
  }

  useEffect(() => {
    let slider = setInterval(nextSlide, 5000);

    return () => clearInterval(slider);
  }, [currentSlide]);

  return (
    <div className="slide-container">
      <img
        className="mainBackground"
        src={backImg[currentSlide].Background}
      />
    </div>
  );
};
export default Slider;
