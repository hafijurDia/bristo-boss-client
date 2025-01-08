import React, { useState } from "react";
import PropTypes from "prop-types";
import PageBanner from "../../shared/pageBanner/PageBanner";
import shopBg from "../../assets/shop/banner2.jpg";
import { Helmet } from "react-helmet-async";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "../../hooks/useMenu";
import FoodCard from "../../shared/foodCard/FoodCard";
import "./OurShop.css";

const OurShop = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [menu, loading] = useMenu(); // Destructure loading state from useMenu
  const offered = menu.filter((item) => item.category === "offered");
  const desserts = menu.filter((item) => item.category === "dessert");
  const pizza = menu.filter((item) => item.category === "pizza");
  const salads = menu.filter((item) => item.category === "salad");
  const soups = menu.filter((item) => item.category === "soup");
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Our Shop</title>
      </Helmet>
      <PageBanner
        img={shopBg}
        title={"Our Shop"}
        subTitle={"Would you like to try a dish?"}
      ></PageBanner>
      <div className="py-20">
        <div className="container mx-auto">
          <Tabs
            defaultIndex={tabIndex}
            onSelect={(index) => setTabIndex(index)}
          >
            <TabList>
              <Tab>Salad</Tab>
              <Tab>Pizza</Tab>
              <Tab>Soups</Tab>
              <Tab>Desserts</Tab>
              <Tab>Drinks</Tab>
            </TabList>
            <TabPanel>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
                {loading ? (
                  // Show loading spinner or message while data is being fetched
                  <div className="text-center my-10 flex flex-col justify-center items-center">
                    <div className="loader" />{" "}
                    {/* Replace with a spinner or animation */}
                  </div>
                ) : (
                  salads.map((item) => (
                    <FoodCard key={item._id} item={item}></FoodCard>
                  ))
                )}
              </div>
            </TabPanel>
            <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
                {loading ? (
                  // Show loading spinner or message while data is being fetched
                  <div className="text-center my-10 flex flex-col justify-center items-center">
                    <div className="loader" />{" "}
                    {/* Replace with a spinner or animation */}
                  </div>
                ) : (
                  pizza.map((item) => (
                    <FoodCard key={item._id} item={item}></FoodCard>
                  ))
                )}
              </div>
            </TabPanel>
            <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
                {loading ? (
                  // Show loading spinner or message while data is being fetched
                  <div className="text-center my-10 flex flex-col justify-center items-center">
                    <div className="loader" />{" "}
                    {/* Replace with a spinner or animation */}
                  </div>
                ) : (
                  soups.map((item) => (
                    <FoodCard key={item._id} item={item}></FoodCard>
                  ))
                )}
              </div>
            </TabPanel>
            <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
                {loading ? (
                  // Show loading spinner or message while data is being fetched
                  <div className="text-center my-10 flex flex-col justify-center items-center">
                    <div className="loader" />{" "}
                    {/* Replace with a spinner or animation */}
                  </div>
                ) : (
                  desserts.map((item) => (
                    <FoodCard key={item._id} item={item}></FoodCard>
                  ))
                )}
              </div>
            </TabPanel>
            <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
                {loading ? (
                  // Show loading spinner or message while data is being fetched
                  <div className="text-center my-10 flex flex-col justify-center items-center">
                    <div className="loader" />{" "}
                    {/* Replace with a spinner or animation */}
                  </div>
                ) : (
                  offered.map((item) => (
                    <FoodCard key={item._id} item={item}></FoodCard>
                  ))
                )}
              </div>
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

OurShop.propTypes = {};

export default OurShop;
