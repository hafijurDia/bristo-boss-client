import React from "react";
import { Helmet } from "react-helmet-async";
import "./OurMenu.css";
import PageBanner from "../../../shared/pageBanner/PageBanner";
import bannerBg from "../../../assets/menu/banner3.jpg";
import SectionTitle from "../../../shared/components/SectionTitle";
import PopularItem from "../../home/popularItem/PopularItem";
import useMenu from "../../../hooks/useMenu";
import MenuItem from "../../../shared/header/mainHeader/menuItem/MenuItem";
import MenuCategory from "./menuCategory/MenuCategory";
import SectionBanner from "../../../shared/sectionBanner/SectionBanner";
import saladBgImg from "../../../assets/menu/salad-bg.jpg";
import dessertBgImg from "../../../assets/menu/dessert-bg.jpeg";
import pizzaBgImg from "../../../assets/menu/pizza-bg.jpg";
import soupBgImg from "../../../assets/menu/soup-bg.jpg";

export default function OurMenu() {
  const [menu, loading] = useMenu(); // Destructure loading state from useMenu
  const offered = menu.filter((item) => item.category === "offered");
  const desserts = menu.filter((item) => item.category === "dessert");
  const pizza = menu.filter((item) => item.category === "pizza");
  const salads = menu.filter((item) => item.category === "salad");
  const soups = menu.filter((item) => item.category === "soup");
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      <PageBanner
        img={bannerBg}
        title={"Our Menu"}
        subTitle={"Would you like to try a dish?"}
      ></PageBanner>
      <div className="py-20">
        <div className="container mx-auto">
          <SectionTitle
            heading="TODAY'S OFFER"
            subHeading="---Don't miss---"
          ></SectionTitle>
          <MenuCategory items={offered}></MenuCategory>
        </div>
      </div>
      {/* ========================= */}
      <SectionBanner
        bgImg={dessertBgImg}
        title={"DESSERTS"}
        subTitle={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
      ></SectionBanner>
      <div className="py-10">
        <div className="container mx-auto">
          <MenuCategory items={desserts}></MenuCategory>
        </div>
      </div>
      {/* ========================= */}
      <SectionBanner
        bgImg={pizzaBgImg}
        title={"PIZZA"}
        subTitle={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
      ></SectionBanner>
      <div className="py-10">
        <div className="container mx-auto">
          <MenuCategory items={pizza}></MenuCategory>
        </div>
      </div>
      {/* ========================= */}
      <SectionBanner
        bgImg={saladBgImg}
        title={"SALADS"}
        subTitle={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
      ></SectionBanner>
      <div className="py-10">
        <div className="container mx-auto">
          <MenuCategory items={salads}></MenuCategory>
        </div>
      </div>
      {/* ========================= */}
      <SectionBanner
        bgImg={soupBgImg}
        title={"SOUPS"}
        subTitle={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
      ></SectionBanner>
      <div className="py-10">
        <div className="container mx-auto">
          <MenuCategory items={soups}></MenuCategory>
        </div>
      </div>
    </div>
  );
}
