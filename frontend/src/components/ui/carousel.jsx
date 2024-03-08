import { useState, useRef, useEffect } from "react";
import * as viewSize from '../../constants';
import projectList from '../../data/projects.json'

const Carousel= () => {
   // const { height, width } = useWindowDimensions();
    const [currentIndex, setCurrentIndex] = useState(0);
    const [cardNum, setCardNum] = useState (2);
    // const cards = [
    //   {
    //     image: 'https://source.unsplash.com/random',
    //     title: 'Card 1',
    //     description: 'Info which directs to the other page.',
    //   },
    //   {
    //     image: 'https://source.unsplash.com/random',
    //     title: 'Card 2',
    //     description: 'Info which directs to the other page.',
    //   },
    //   {
    //     image: 'https://source.unsplash.com/random',
    //     title: 'Card 3',
    //     description: 'Info which directs to the other page.',
    //   },
    //   {
    //     image: 'https://source.unsplash.com/random',
    //     title: 'Card 4',
    //     description: 'Info which directs to the other page.',
    //   },
    //   {
    //     image: 'https://source.unsplash.com/random',
    //     title: 'Card 5',
    //     description: 'Info which directs to the other page.',
    //   },
    // ];
    
    const cards = projectList;

    function getWindowDimensions() {
      const { innerWidth: width, innerHeight: height } = window;
      return {
        width,
        height
      };
    }

    useEffect(() => {
      // TO DO: TEST THIS VIEWPORT
      function handleResize() {
   

        const screen_width = getWindowDimensions().width;
        if (screen_width <= viewSize.WIDTH_MD) {
          setCardNum(1);
        } 
        // else if (screen_width > viewSize.WIDTH_MD && screen_width <= viewSize.WIDTH_LG) {
        //   setCardNum(2);
        // }
        // } else if (screen_width > viewSize.WIDTH_LG && screen_width <= viewSize.WIDTH_XL) {
        //   setCardNum(3);
        // } else {

        else {
          setCardNum(2);
        }
       console.log(screen_width);
      }
  
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, [cardNum]);
  
    const handleNext = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
    };
  
    const handlePrev = () => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length);
    };

    if(currentIndex>cards.length-cardNum) {
      console.log(currentIndex)
      setCurrentIndex(0)
      console.log("hi")
    }

    // 
    return (
      <div className="mt-2 p-5">
        <div className="w-full">
          <div className="relative">
            
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 justify-center">
              {cards.slice(currentIndex, currentIndex + cardNum).map((card, index) => (
                <div className="transition ease-out duration-300 flex-none w-full p-4 bg-white rounded-lg shadow-md" key={index}>
                  <img className="w-full h-1/2 object-cover mb-4 rounded-lg" src={card.image} alt="Card" />
                  <h3 className="text-lg font-bold">{card.name}</h3>
                  <p className="text-gray-500">{card.description}</p>
                </div>
              ))}
            </div>
            <div className="flex items-center justify-between mt-4 relative  bottom-44 ">
              <button className="w-6 h-6 rounded-full bg-gray-300  relative right-4" onClick={handlePrev}>&lt;</button>
              <button className="w-6 h-6 rounded-full bg-gray-300 relative left-10" onClick={handleNext}>&gt;</button>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Carousel;