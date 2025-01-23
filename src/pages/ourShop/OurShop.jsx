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
import { useParams } from "react-router-dom";
import OrderTab from "./orderTab/OrderTab";

const OurShop = () => {
  const categories = ['salads', 'pizza', 'soups', 'desserts', 'drinks'];
  const {category} = useParams();
  const initialIndex = categories.indexOf(category);
  const [tabIndex, setTabIndex] = useState(initialIndex);
  const [menu, loading, refetch] = useMenu(); // Destructure loading state from useMenu

  console.log(category);
  const offered = menu.filter((item) => item.category === "offered");
  const desserts = menu.filter((item) => item.category === "dessert");
  const pizza = menu.filter((item) => item.category === "pizza");
  const salads = menu.filter((item) => item.category === "salad");
  const soups = menu.filter((item) => item.category === "soup");
  const drinks = menu.filter((item) => item.category === "drinks");
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
    <OrderTab items={salads} loading={loading} refetch={refetch}></OrderTab>
</TabPanel>
<TabPanel>
    <OrderTab items={pizza} loading={loading} refetch={refetch}></OrderTab>
</TabPanel>
<TabPanel>
    <OrderTab items={soups} loading={loading} refetch={refetch}></OrderTab>
</TabPanel>
<TabPanel>
    <OrderTab items={desserts} loading={loading} refetch={refetch}></OrderTab>
</TabPanel>
<TabPanel>
    <OrderTab items={drinks} loading={loading} refetch={refetch}></OrderTab>
</TabPanel>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

OurShop.propTypes = {};

export default OurShop;
