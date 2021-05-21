import "./Homedecorideas.css";

function Homedecorideas() {
  // var Homedecorideasarr = [
  //   {
  //     url: "products/Jewelry-and-Accessories",
  //     img: "./gift_for_him.jpg",
  //     price: "USD 10.99",
  //   },
  //   {
  //     url: "/products/Minimal-Blogger-Template",
  //     img: "./key.jpg",
  //     price: "USD 20.00",
  //   },
  //   {
  //     url: "products/Jewelry-and-Accessories",
  //     img: "./wall.jpg",
  //     price: "USD 300.00",
  //   },
  //   {
  //     url: "products/Jewelry-and-Accessories",
  //     img: "./Gifts_for_her.jpg",
  //     price: "USD 41.99",
  //   },
  //   {
  //     url: "products/Jewelry-and-Accessories",
  //     img: "./housewarming_gift.jpg",
  //     price: "USD 59.99",
  //   },
  //   {
  //     url: "products/Jewelry-and-Accessories",
  //     img: "./frame.jpg",
  //     price: "USD 62.00",
  //   },
  // ];

  return (
    <>
      <div className="grid-container">
        {/* {Homedecorideasarr.map((a, index) => { 
        return (*/}
        <div className="item1">
          <img
            src="./wall.jpg"
            className="hd_product___photo"
            width="401px"
            height="319px"
            alt=""
          />
          <span className="Hd_product___price">15.50 USD</span>
        </div>
        <div className="item2">
          <img
            src="./Gifts_for_her.jpg"
            className="hd_product___photo"
            width="192px"
            height="153px"
            alt=""
          />
          <span className="Hd_product___price">25.50 USD</span>
        </div>
        <div className="item3">
          <img
            src="./Moodcards.jpg"
            className="hd_product___photo"
            width="192px"
            height="153px"
            alt=""
          />
          <span className="Hd_product___price">35.50 USD</span>
        </div>
        <div className="item4">
          <img
            src="./wedding_gift.jpg"
            className="hd_product___photo"
            width="401px"
            height="319px"
            alt=""
          />
          <span className="Hd_product___price">45.50 USD</span>
        </div>
        <div className="item5">
          <img
            src="./wall.jpg"
            className="hd_product___photo"
            width="192px"
            height="153px"
            alt=""
          />
          <span className="Hd_product___price">55.50 USD</span>
        </div>
        <div className="item6">
          <img
            src="./wall.jpg"
            className="hd_product___photo"
            width="192px"
            height="153px"
            alt=""
          />
          <span className="Hd_product___price">65.50 USD</span>
        </div>
        {/* <div className={`item${index}`}>
              <div className="product___container">
                <div className="photo">
                  <img src={a.img} className="product__photo" />
                </div>
                <span className="Hd_product___price">{a.price}</span>
              </div> 
            </div> 
          );
        })}*/}
      </div>
    </>
  );
}

export default Homedecorideas;
