import React from "react";
import Slider from "react-slick";
import NextArrow from "../../common/carousel/nextArrow";
import PrevArrow from "../../common/carousel/prevArrow";
import "./topBrands.css";

const topBrandsList = [
  {
    id: 1,
    time: "35 min",
    cover:
      "R1.jpg",
      link:"https://natashaskitchen.com/red-velvet-cake-recipe/"
  },
  {
    id: 2,
    time: "29 min",
    cover:
    "R2.jpg",
    link:"https://www.indianhealthyrecipes.com/chicken-biryani-recipe/"
  },
  {
    id: 3,
    time: "32 min",
    cover:
    "R3.png",
    link:"https://www.delish.com/cooking/recipe-ideas/a20760804/easy-milkshake-recipe/"
  },
  {
    id: 4,
    time: "30 min",
    cover:
    "R4.jfif",
    link:"https://www.biggerbolderbaking.com/best-ever-brownies/"
  },
  {
    id: 6,
    time: "38 min",
    cover:
    "R5.jfif",
    link:"https://www.indianhealthyrecipes.com/naan/"
  },
  {
    id: 7,
    time: "31 min",
    cover:
    "R6.jfif",
    link:"https://www.vegrecipesofindia.com/veg-noodles-recipe-easy-veg-noodles/"
  },
  {
    id: 8,
    time: "30 min",
    cover:
    "R7.jpg",
    link:"https://www.whiskaffair.com/vegetable-spring-rolls/"
  },
  {
    id: 9,
    time: "40 min",
    cover:
    "R8.jfif",
    link:"https://recipes.timesofindia.com/recipes/chicken-burger/rs75673473.cms"
  },
  {
    id: 10,
    time: "35 min",
    cover:
    "R9.jfif",
    link:"https://recipes.timesofindia.com/recipes/veg-sandwich-with-yogurt-spread/rs60057435.cms"
  },
];

const settings = {
  infinite: false,
  slidesToShow: 6,
  slidesToScroll: 1,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
};

const TopBrands = () => {
  return (
    <div className="top-brands max-width">
      <div className="collection-title">Top recipes for you</div>
      <Slider {...settings}>
        {topBrandsList.map((brand) => (
          <div>
            <div className="top-brands-cover">
            <a href={brand.link}>
              <img
                className="top-brands-image"
                src={brand.cover}
                alt={brand.time}
              />
              </a>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TopBrands;
