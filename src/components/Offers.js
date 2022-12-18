import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/24/outline";
import Item from "./Item";
import { market } from "../testData";

const Offers = ({ user, setCart, cart }) => {
  const slidesToShow = user ? 4 : 3;
  const PrevBtn = (props) => {
    const { className, onClick, currentSlide } = props;
    return (
      <>
        {currentSlide !== 0 && (
          <div className={className} onClick={onClick}>
            <ChevronLeftIcon className="h-9 text-black" />
          </div>
        )}
      </>
    );
  };
  const NextBtn = (props) => {
    const { className, onClick, currentSlide, slideCount } = props;
    return (
      <>
        {currentSlide !== slideCount - slidesToShow && (
          <div className={className} onClick={onClick}>
            <ChevronRightIcon className="h-9 text-black" />
          </div>
        )}
      </>
    );
  };
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    prevArrow: <PrevBtn />,
    nextArrow: <NextBtn />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: slidesToShow,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="max-w-[1240px] mx-auto md:px-8 mt-5 px-11">
      <Slider {...settings}>
        {market.map((offer) => (
          <Item key={offer.id} mark={offer} setCart={setCart} cart={cart} />
        ))}
      </Slider>
    </div>
  );
};

export default Offers;
