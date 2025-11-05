import React, { useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import axios from "axios";
import Card from "./Card";
import { useState } from "react";

function Freebook() {
  const [book,setbook]=useState([]);
  useEffect(()=>{
    const getbook=async()=>{
      try{
        const res=await axios.get("https://bookstore-app-fs38.onrender.com/books");
        

        if (res && res.data) {
          const data = res.data.filter((data) => data.category === "Free");
          setbook(data);
        }

        console.log(res.data);
        
      }catch(err){
        console.log(err)
      }
    }
    getbook();
  },[])
  // const filterdata = list.filter((data) => data.category === "Free");
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2, slidesToScroll: 2 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
    ],
  };

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div>
          <h1 className="font-semibold text-xl pb-2">Free Offered courses</h1>
          <p>
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Accusantium veritatis alias pariatur ad dolor repudiandae eligendi
            corporis nulla non suscipit, iure neque earum?
          </p>
        </div>
        <div>
          <Slider {...settings}>
            {book.map((item) => (
              <div  className="p-2" key={item.id}>
                <Card item={item} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}

export default Freebook;
