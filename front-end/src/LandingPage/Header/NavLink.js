import "./NavLink.css";
import {Link} from "react-router-dom";

function Navlinks() {
  var navlinksarr = [
    { title: "Jewelry & Accessories", url: "/jewellery" },
    { title: "Clothing & Shoes", url: "/sections/Clothing-and-Shoes" },
    { title: "Home & Living", url: "/sections/Home-and-Living" },
    { title: "Wedding & Party", url: "/sections/Wedding-and-Party" },
    { title: "Toys & Entertainment", url: "/sections/Toys-and-Entertainment" },
    { title: "Art & Collectibles", url: "/sections/Art-and-Collectibles" },
    {
      title: "Craft Supplies & Tools",
      url: "/sections/Craft-Supplies-and-Tools",
    },
    { title: "Vintage", url: "/sections/Vintage" },
  ];

  return (
    <>
      <div className="navlinks__contianer">
        {navlinksarr.map(function (i) {
          return (
            <ul className="navlinks">
              <Link to={i.url}>
                <li>{i.title}</li>
              </Link>
            </ul>
          );
        })}
      </div>
    </>
  );
}

export default Navlinks;
