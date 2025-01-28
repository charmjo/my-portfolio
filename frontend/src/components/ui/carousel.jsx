import { useState, useRef, useEffect } from "react";
import * as viewSize from '../../constants';
import projectList from '../../data/projects';
import ProjectCard from "./projectCard";
import arrowLeft from "../../assets/reshot-icon-arrow-left.svg";
import arrowRight from "../../assets/reshot-icon-arrow-right.svg";

function Carousel () {
   // const { height, width } = useWindowDimensions();
    const [currentIndex, setCurrentIndex] = useState(0);
    const [cardNum, setCardNum] = useState (2);
 
    const cards = projectList;

    // I like to put my useffect on top
    useEffect(() => {
      // TO DO: TEST THIS VIEWPORT
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, [cardNum]);

    const getWindowDimensions = () => {
      const { innerWidth: width, innerHeight: height } = window;
      return {
        width,
        height
      };
    }

    function handleResize () {
      const screen_width = getWindowDimensions().width;
      if (screen_width <= viewSize.WIDTH_SM) {
        setCardNum(1);
      } 
      else {
        setCardNum(2);
      }
     console.log(screen_width);
    }
  
    function handleNext () {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
    };
  
    function handlePrev () {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length);
    };

    // will need to recheck this
    if(currentIndex>cards.length-cardNum) {
      console.log(currentIndex)
      setCurrentIndex(0)
      console.log("hi")
    }

    // 
    return (
      <div className="mt-2 py-5">
        <div className="w-full">
          <div className="relative items-center flex flex-column">
            <div className="grid auto-rows-fr grid-cols-1 gap-5 sm:grid-cols-2 justify-center z-0">
              {cards.slice(currentIndex, currentIndex + cardNum).map((card, index) => (
                <ProjectCard data={card}
                      key={index} />
              ))}
            </div>
            <div className="flex justify-between">
              <button className="absolute z-10 left-0 right-4 top-1/2" onClick={handlePrev}>
                <img class="w-10" src={arrowLeft} alt="move left"/>
              </button>
              <button className="absolute z-10 rounded-full bg-gray-300 right-0 top-1/2" onClick={handleNext}>
                <img class="w-10" src={arrowRight} alt="move right"/>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Carousel;