import { Rating } from "@mui/material";
import { featured } from "../constants";
import { BsPerson } from "react-icons/bs";
import { PiNotebookThin } from "react-icons/pi";
import { info, image } from "../constants/index";
import { useState } from "react";
import "./featured-card.css"

export const FeaturedCourses = () => {
  //const [value, setValue] = useState();
  const [selectedCategory, setSelectedCategory] = useState(null);
  const { featuredTitle1, featuredTitle2 } = info;
  const { underline } = image;

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };
  const filteredFeatured = selectedCategory
  ? featured.filter(item => item.topDesc === selectedCategory)
  : featured;
  return (
    <div className="bg-cream">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="flex justify-between">
          <div>
            <p className="text-grey text-sm">{featuredTitle1}</p>
            <h2 className="text-4xl font-semibold">{featuredTitle2}</h2>
            <img src={underline} alt="" />
          </div>
          <div className="flex gap-4 items-center">
            <button onClick={() => handleCategoryClick(null)} 
            className={selectedCategory === null ? "featured-button" : "featured-select"}
            >See All</button>
            <button onClick={() => handleCategoryClick("Business")}
            className={selectedCategory === "Business" ? "featured-button" : "featured-select"}>
              Business
            </button>
            <button onClick={() => handleCategoryClick("Development")}
            className={selectedCategory === "Development" ? "featured-button" : "featured-select"}>
              Development
            </button>
            <button onClick={() => handleCategoryClick("Finance")}
            className={selectedCategory === "Finance" ? "featured-button" : "featured-select"}
            >
              Finance
            </button>
            <button onClick={() => handleCategoryClick("Technology")}
             className={selectedCategory === "Technology" ? "featured-button" : "featured-select"}>
              Technology
            </button>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {filteredFeatured.map((item, index) => (
            <div
              key={index}
              className="group relative bg-white border-border border "
            >
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md lg:aspect-none">
                <figure className="relative cursor-pointer">
                <img
                  src={item.image}
                  alt="featured-courses"
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
                <figcaption className="absolute  top-3 left-3 bg-white text-grey text-sm rounded py-1 px-2">
      <p>{item.topDesc}</p>
  </figcaption>
                </figure>
                
              </div>
              <div className="mt-3 mb-3 flex justify-between">
                <div>
                  <div className="flex mb-3 gap-3">
                    <p className="mt-1 text-sm text-gray-500 flex items-center">
                      <span>
                        <BsPerson />
                      </span>{" "}
                      {item.students} Student
                    </p>

                    <p className="mt-1 text-sm text-gray-500 flex items-center">
                      <span>
                        <PiNotebookThin />
                      </span>
                      {item.lessons} Lessons
                    </p>
                  </div>

                  <h3 className="text-xl font-semibold text-gray-700 mb-3">
                    <a href="">
                      <span aria-hidden="true" className="absolute inset-0" />
                      {item.title}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{item.name}</p>
                  <div className="flex justify-between items-center">
                    <Rating
                      name="simple-controlled"
                      value={item.star}
                      // onChange={(event, item) => {
                      //     setValue(item.star);
                      //   }}
                    />
                    <p className="text-xl font-semibold text-gray-900">
                      {item.price}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
