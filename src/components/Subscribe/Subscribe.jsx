import React from "react";
import Banner from "../../assets/website/orange-pattern.jpg";

const Subscribe = () => {
  const BannerImg = {
    backgroundImage: `url(${Banner})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100%",
    width: "100%",
  };
  return (
    <div className="bg-gray-100 dark:bg-gray-800 text-white" style={BannerImg}>
      <div className="container backdrop-blur-sm py-10">
        <div className="space-y-6 max-w-xl mx-auto">
          <h1 className="text-2xl !text-center sm:text-left sm:text-3xl font-semibold">
            Get notified about new products
          </h1>
          <input
            type="text"
            placeholder="Enter your email"
            className="w-full p-3"
          />
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
