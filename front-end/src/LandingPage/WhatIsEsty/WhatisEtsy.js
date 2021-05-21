import "./Whatetsy.css";
import {Link} from "react-router-dom";

function whatetsy() {
  var Whatetsyarr = [
    {
      title: "A one-of-a-kind community",
      description:
        "Etsy is a global online marketplace, where people come together to make, sell, buy, and collect unique items.            ",
    },
    {
      title: "Support independent creators",
      description:
        "There’s no Etsy warehouse – just millions of people selling the things they love. We make the whole process easy, helping you connect directly with makers to find something extraordinary.",
    },
    {
      title: "Peace of mind",
      description:
        "Your privacy is the highest priority of our dedicated team. And if you ever need assistance, we are always ready to step in for support.",
    },
  ];
  return (
    <>
      <div className="whatetsy__container">
        <div className="whatetsy__header">
          <h2>What is Etsy?</h2>
          <Link href="/">
            <p className="read">Read our wonderfully weird story</p>
          </Link>
        </div>
        <div className="whyetsy-flex">
          {Whatetsyarr.map(function (w) {
            return (
              <div className="whyetsy__container">
                <ul>
                  <li>
                    <h3 className="whyetsy__title">{w.title}</h3>
                    <p className="whyetsy__description">{w.description}</p>
                  </li>
                </ul>
              </div>
            );
          })}
        </div>
        <div className="whatetsy__question-btn">
          <p className="whatetsy__question">
            Have a question? Well, we’ve got some answers.
          </p>
          <span className="help__button">Go to Help Center</span>
        </div>
      </div>
    </>
  );
}

export default whatetsy;
