import "./Personalizedgifts.css";

function Personalizedgifts() {
  // var Personalizedgiftsarr = [
  //   {
  //     url: "products/Jewelry-and-Accessories",
  //     img: "./Moodcards.jpg",
  //     price: "USD 16.99",
  //   },
  //   {
  //     url: "/products/Minimal-Blogger-Template",
  //     img: "./Customizable.jpg",
  //     price: "USD 20.00",
  //   },
  //   {
  //     url: "products/Jewelry-and-Accessories",
  //     img: "./Redesign.jpg",
  //     price: "USD 300.00",
  //   },
  //   {
  //     url: "products/Jewelry-and-Accessories",
  //     img: "./Mobile.jpg",
  //     price: "USD 41.99",
  //   },
  //   {
  //     url: "products/Jewelry-and-Accessories",
  //     img: "./Bags.jpg",
  //     price: "USD 59.99",
  //   },
  //   {
  //     url: "products/Jewelry-and-Accessories",
  //     img: "./Charcuterie.jpg",
  //     price: "USD 62.00",
  //   },
  // ];

  return (
    <>
      <div className="grid-container">
        {/* {Personalizedgiftsarr.map((x, index) => {
          return (
            <div className={`item${index}`}>
              <div className="product__container">
                <img src={x.img} className="pg_product___photo" />
                <span className="product___price">{x.price}</span>
              </div>
            </div>
          );
        })} */}
        <div className="item1">
          <img
            src="./housewarming_gift.jpg"
            className="pg_product___photo"
            width="401px"
            height="319px"
            alt=""
          />
          <span className="product___price">12.50 USD</span>
        </div>
        <div className="item2">
          <img
            src="./wall.jpg"
            className="pg_product___photo"
            width="192px"
            height="153px"
            alt=""
          />
          <span className="product___price">15.50 USD</span>
        </div>
        <div className="item3">
          <img
            src="./GiftIdeas.jpg"
            className="pg_product___photo"
            width="192px"
            height="153px"
            alt=""
          />
          <span className="product___price">15.50 USD</span>
        </div>
        <div className="item4">
          <img
            src="./wall.jpg"
            className="pg_product___photo"
            width="401px"
            height="319px"
            alt=""
          />
          <span className="product___price">15.50 USD</span>
        </div>
        <div className="item5">
          <img
            src="./Mobile.jpg"
            className="pg_product___photo"
            width="192px"
            height="153px"
            alt=""
          />
          <span className="product___price">15.50 USD</span>
        </div>
        <div className="item6">
          <img
            src="./Moodcards.jpg"
            className="pg_product___photo"
            width="192px"
            height="153px"
            alt=""
          />
          <span className="product___price">15.50 USD</span>
        </div>
      </div>
    </>
  );
}

export default Personalizedgifts;
