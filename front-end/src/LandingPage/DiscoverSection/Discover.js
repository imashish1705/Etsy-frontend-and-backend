import "./Discover.css";
import React, {useState } from "react";
import ArtFinds from "../DiscoverItems/ArtFinds/Personalizedgifts";
import OutdoorEntertaining from  "../DiscoverItems/OutdoorEntertaining/Homedecorideas";
import BathBeautyGift from "../DiscoverItems/BathBeautyGift/BathBeautyGift";

function Discover() {
  const [active, setActive] = useState("Outdoor entertaining");
  return (
    <>
      <h2 className="discover-title">Discover unique hand-picked items</h2>
      <div className="discover__container">
        <ul className="discover-tab-list">
          <li onClick={() => setActive("Outdoor entertaining")}>
            Outdoor entertaining
          </li>
          <li onClick={() => setActive("Bath & beauty gifts")}>
           Bath & beauty gifts
          </li>
          <li onClick={() => setActive("Wedding planing")}>Wedding planing</li>
          <li onClick={() => setActive("Sustainability")}>Sustainability</li>
          <li onClick={() => setActive("DIY updates")}>DIY updates</li>
          <li onClick={() => setActive("Art finds")}>Art finds</li>
        </ul>

        <div className="discovercarousel">
          {active === "Outdoor entertaining" && <ArtFinds />}
          {active === "Bath & beauty gifts" && <OutdoorEntertaining />}
          {active === "Wedding planing" && <BathBeautyGift />}
          {active === "Sustainability" && <OutdoorEntertaining />}
          {active === "DIY updates" && <BathBeautyGift />}
          {active === "Art finds" && <ArtFinds/>}
        </div>

        {/* <div className="grid-container">
          {Discoverarr.map((x, index) => {
            return (
              <div className={`item${index}`}>
                <div className="product__container">
                  <img src={x.img} className="product__photo" />
                  <span className="product__price">{x.price}</span>
                </div>
              </div>
            );
          })}
        </div> */}
      </div>
    </>
  );
}

export default Discover;
