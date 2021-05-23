import {Link} from "react-router-dom";
import "./EverydayFinds.css";

function EverydayFinds() {
  var EverydayFindsarr = [
    {
      title: "Face masks",
      url: "/facemask",
      img: "./Facemasks.jpg",
    },
    {
      title: "Wall decor",
      url: "/Cloths",
      img: "./Walldecor.jpg",
    },
    {
      title: "Gift Ideas",
      url: "/HomeLiving",
      img: "./GiftIdeas.jpg",
    },
    {
      title: "Outdoor & garden",
      url: "/WeddingParty",
      img: "./Outdoor&garden.jpg",
    },
    {
      title: "Self-care",
      url: "/ToyEntertaining",
      img: "./Self-care.jpg",
    },
    {
      title: "Craft kits",
      url: "/ArtCollection",
      img: "./Craftkits.jpg",
    },
  ];
  return (
    <>
      <div className="ef__container">
        
        {EverydayFindsarr.map(function (u) {
          return (
            <div className="ef__block">
              <img src={u.img} className="ef-img "  alt=""/>
              <div className="ef-title">
                <Link to={u.url}>
                  <span className="ef-title">{u.title}</span>
                </Link>
        

              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default EverydayFinds;
