const mongoose = require('mongoose');
const Facemask = require('./models/facemask');

const facemask = [
    
  //  {
  //       img: "https://i.postimg.cc/KvmGZJzD/Facemasks.jpg",
  //       price: 29,
  //       desc:"Face Mask"
  //     },
  //     {
  //       img: "https://i.postimg.cc/KjJdc7q0/Walldecor.jpg",
  //       price: 27,
  //       desc:"Wall decor"
  //     },
  //     {
  //       img: "https://i.postimg.cc/K8zmTjtK/Gift-Ideas.jpg",
  //       price: 22,
  //       desc:"Gift Ideas"
  //     },
  //     {
  //       img: "https://i.postimg.cc/jd8bRTBR/Outdoor-garden.jpg",
  //       price: 14,
  //       desc:"Outdoor & garden"
  //     },
  //     {
  //       img: "https://i.postimg.cc/BvF95Kbv/Self-care.jpg",
  //       price: 34,
  //       desc:"Self-care"
  //     },
  {
        img: "https://i.postimg.cc/mksb1SSR/Craftkits.jpg",
        price: 44,
        desc:"Craft kits"
      }
    
]
async function seedEveryDayFind() {
    await Facemask.insertMany(facemask);
    console.log("DB Facemask SEEDED!!!");
}

module.exports = seedEveryDayFind;