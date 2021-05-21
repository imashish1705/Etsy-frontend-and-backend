import "./ShopOurSelection.css";
import {Link} from "react-router-dom";

function Shopourselections() {
  var Shopourselectionsarr = [
    {
      url: "products/Jewelry-and-Accessories",
      img: "./Anniversary_gifts.jpg",
      title: "Anniversary gifts",
    },
    {
      url: "/products/Minimal-Blogger-Template",
      img: "./gift_for_him.jpg",
      title: "Gifts for him",
    },
    {
      url: "products/Jewelry-and-Accessories",
      img: "./Gifts_for_her.jpg",
      title: "Gifts for her",
    },
    {
      url: "products/Jewelry-and-Accessories",
      img: "./personalized_gift.jpg",
      title: "Personal gift ideas",
    },
    {
      url: "products/Jewelry-and-Accessories",
      img: "./wedding_gift.jpg",
      title: "Wedding gifts",
    },
    {
      url: "products/Jewelry-and-Accessories",
      img: "./housewarming_gift.jpg",
      title: "Housewarming gifts",
    },
  ];
  return (
    <>
    <div className="shopourselection__header">
      <span className="Shopourselections__title">Shop our selections</span>
      <span className="Shopourselections__description">
        Items hand-picked by our editors
      </span>
      </div>
      <div className="Shopourselections__container">
        {Shopourselectionsarr.map(function (e) {
          return (
            <div className="productsselection__container">
              <ul className="ul_shop_container">
                <Link href={e.url}>
                  <li className="li_shop_container">
                    <div className="product_shop_container">
                      <img
                        src={e.img}
                        className="shop_photo" alt=""
              
                      />
                      <p className="shop_title">{e.title}</p>
                    </div>
                  </li>
                </Link>
              </ul>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Shopourselections;
