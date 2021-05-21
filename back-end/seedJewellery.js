const mongoose = require('mongoose');
const Jewellery = require('./models/jewellery');

const jewellery = [
    
  {
    img: "https://images.unsplash.com/photo-1514927465065-bbdc86c7a76c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGpld2VsbGVyeXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    price: 37,
    desc:"Ring",
    name:"Collectors knife z335, anniversary gift ideas, hunting knife, gift for coworker, engraved gift for boyfriend, 50th birthday gift for brother"
  },
  {
    img: "https://images.unsplash.com/photo-1586878341523-7acb55eb8c12?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjh8fGpld2VsbGVyeXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    price: 32,
    desc:"Gold Bracelet",
    name:"Collectors knife z335, anniversary gift ideas, hunting knife, gift for coworker, engraved gift for boyfriend, 50th birthday gift for brother"
 
  },
  {
    img: "https://images.unsplash.com/photo-1552742275-6aee5589cd29?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fGpld2VsbGVyeXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    price: 54,
    desc:"Watch",
    name:"Collectors knife z335, anniversary gift ideas, hunting knife, gift for coworker, engraved gift for boyfriend, 50th birthday gift for brother"
 
  },
  {
    img: "https://images.unsplash.com/photo-1601121141461-920cb1993441?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTV8fGpld2VsbGVyeXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    price: 574,
    desc:"Gold Nacklace",
    name:"Collectors knife z335, anniversary gift ideas, hunting knife, gift for coworker, engraved gift for boyfriend, 50th birthday gift for brother"
 
  },
  {
    img: "https://images.unsplash.com/photo-1617191880362-aac615de3c26?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjMxfHxqZXdlbGxlcnl8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    price: 77,
    desc:"Ring Accessory",
    name:"Collectors knife z335, anniversary gift ideas, hunting knife, gift for coworker, engraved gift for boyfriend, 50th birthday gift for brother"
 
  },
  {
    img: "https://images.unsplash.com/photo-1514927465065-bbdc86c7a76c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGpld2VsbGVyeXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    price: 37,
    desc:"Ring",
    name:"Collectors knife z335, anniversary gift ideas, hunting knife, gift for coworker, engraved gift for boyfriend, 50th birthday gift for brother"
 
  },
  {
    img: "https://images.unsplash.com/photo-1586878341523-7acb55eb8c12?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjh8fGpld2VsbGVyeXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    price: 32,
    desc:"Gold Bracelet",
    name:"Collectors knife z335, anniversary gift ideas, hunting knife, gift for coworker, engraved gift for boyfriend, 50th birthday gift for brother"
 
  },
  {
    img: "https://images.unsplash.com/photo-1552742275-6aee5589cd29?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fGpld2VsbGVyeXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    price: 54,
    desc:"Watch",
    name:"Collectors knife z335, anniversary gift ideas, hunting knife, gift for coworker, engraved gift for boyfriend, 50th birthday gift for brother"
 
  },
  {
    img: "https://images.unsplash.com/photo-1601121141461-920cb1993441?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTV8fGpld2VsbGVyeXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    price: 574,
    desc:"Gold Nacklace",
    name:"Collectors knife z335, anniversary gift ideas, hunting knife, gift for coworker, engraved gift for boyfriend, 50th birthday gift for brother"
 
  },
 
  {
    img: "https://images.unsplash.com/photo-1617191880362-aac615de3c26?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjMxfHxqZXdlbGxlcnl8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    price: 77,
    desc:"Ring Accessory",
    name:"Collectors knife z335, anniversary gift ideas, hunting knife, gift for coworker, engraved gift for boyfriend, 50th birthday gift for brother"
 
  },
  {
    img: "https://images.unsplash.com/photo-1514927465065-bbdc86c7a76c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGpld2VsbGVyeXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    price: 37,
    desc:"Ring",
    name:"Collectors knife z335, anniversary gift ideas, hunting knife, gift for coworker, engraved gift for boyfriend, 50th birthday gift for brother"
 
  },
  {
    img: "https://images.unsplash.com/photo-1586878341523-7acb55eb8c12?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjh8fGpld2VsbGVyeXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    price: 32,
    desc:"Gold Bracelet",
    name:"Collectors knife z335, anniversary gift ideas, hunting knife, gift for coworker, engraved gift for boyfriend, 50th birthday gift for brother"
 
  },
  
  {
    img: "https://images.unsplash.com/photo-1552742275-6aee5589cd29?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fGpld2VsbGVyeXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    price: 54,
    desc:"Watch",
    name:"Collectors knife z335, anniversary gift ideas, hunting knife, gift for coworker, engraved gift for boyfriend, 50th birthday gift for brother"
 
  },
  {
    img: "https://images.unsplash.com/photo-1601121141461-920cb1993441?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTV8fGpld2VsbGVyeXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    price: 574,
    desc:"Gold Nacklace",
    name:"Collectors knife z335, anniversary gift ideas, hunting knife, gift for coworker, engraved gift for boyfriend, 50th birthday gift for brother"
 
  },
 
  {
    img: "https://images.unsplash.com/photo-1617191880362-aac615de3c26?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjMxfHxqZXdlbGxlcnl8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    price: 77,
    desc:"Ring Accessory",
    name:"Collectors knife z335, anniversary gift ideas, hunting knife, gift for coworker, engraved gift for boyfriend, 50th birthday gift for brother"
 
  },
  {
    img: "https://images.unsplash.com/photo-1514927465065-bbdc86c7a76c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGpld2VsbGVyeXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    price: 37,
    desc:"Ring",
    name:"Collectors knife z335, anniversary gift ideas, hunting knife, gift for coworker, engraved gift for boyfriend, 50th birthday gift for brother"
 
  },
  {
    img: "https://images.unsplash.com/photo-1586878341523-7acb55eb8c12?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjh8fGpld2VsbGVyeXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    price: 32,
    desc:"Gold Bracelet",
    name:"Collectors knife z335, anniversary gift ideas, hunting knife, gift for coworker, engraved gift for boyfriend, 50th birthday gift for brother"
 
  },

  {
    img: "https://images.unsplash.com/photo-1552742275-6aee5589cd29?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fGpld2VsbGVyeXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    price: 54,
    desc:"Watch",
    name:"Collectors knife z335, anniversary gift ideas, hunting knife, gift for coworker, engraved gift for boyfriend, 50th birthday gift for brother"
 
  },
  {
    img: "https://images.unsplash.com/photo-1601121141461-920cb1993441?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTV8fGpld2VsbGVyeXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    price: 574,
    desc:"Gold Nacklace",
    name:"Collectors knife z335, anniversary gift ideas, hunting knife, gift for coworker, engraved gift for boyfriend, 50th birthday gift for brother"
 
  },
 
  {
    img: "https://images.unsplash.com/photo-1617191880362-aac615de3c26?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjMxfHxqZXdlbGxlcnl8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    price: 77,
    desc:"Ring Accessory",
    name:"Collectors knife z335, anniversary gift ideas, hunting knife, gift for coworker, engraved gift for boyfriend, 50th birthday gift for brother"
 
  },
  {
    img: "https://images.unsplash.com/photo-1514927465065-bbdc86c7a76c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGpld2VsbGVyeXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    price: 37,
    desc:"Ring",
    name:"Collectors knife z335, anniversary gift ideas, hunting knife, gift for coworker, engraved gift for boyfriend, 50th birthday gift for brother"
 
  },
  {
    img: "https://images.unsplash.com/photo-1586878341523-7acb55eb8c12?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjh8fGpld2VsbGVyeXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    price: 32,
    desc:"Gold Bracelet",
    name:"Collectors knife z335, anniversary gift ideas, hunting knife, gift for coworker, engraved gift for boyfriend, 50th birthday gift for brother"
 
  },

  {
    img: "https://images.unsplash.com/photo-1552742275-6aee5589cd29?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fGpld2VsbGVyeXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    price: 54,
    desc:"Watch",
    name:"Collectors knife z335, anniversary gift ideas, hunting knife, gift for coworker, engraved gift for boyfriend, 50th birthday gift for brother"
 
  },
  {
    img: "https://images.unsplash.com/photo-1601121141461-920cb1993441?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTV8fGpld2VsbGVyeXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    price: 574,
    desc:"Gold Nacklace",
    name:"Collectors knife z335, anniversary gift ideas, hunting knife, gift for coworker, engraved gift for boyfriend, 50th birthday gift for brother"
 
  },
  
  {
    img: "https://images.unsplash.com/photo-1617191880362-aac615de3c26?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjMxfHxqZXdlbGxlcnl8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    price: 77,
    desc:"Ring Accessory",
    name:"Collectors knife z335, anniversary gift ideas, hunting knife, gift for coworker, engraved gift for boyfriend, 50th birthday gift for brother"
 
  },
  {
    img: "https://images.unsplash.com/photo-1514927465065-bbdc86c7a76c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGpld2VsbGVyeXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    price: 37,
    desc:"Ring",
    name:"Collectors knife z335, anniversary gift ideas, hunting knife, gift for coworker, engraved gift for boyfriend, 50th birthday gift for brother"
 
  },
  {
    img: "https://images.unsplash.com/photo-1586878341523-7acb55eb8c12?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjh8fGpld2VsbGVyeXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    price: 32,
    desc:"Gold Bracelet",
    name:"Collectors knife z335, anniversary gift ideas, hunting knife, gift for coworker, engraved gift for boyfriend, 50th birthday gift for brother"
 
  },
 

  {
    img: "https://images.unsplash.com/photo-1601121141461-920cb1993441?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTV8fGpld2VsbGVyeXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    price: 574,
    desc:"Gold Nacklace",
    name:"Collectors knife z335, anniversary gift ideas, hunting knife, gift for coworker, engraved gift for boyfriend, 50th birthday gift for brother"
 
  },
 
  {
    img: "https://images.unsplash.com/photo-1617191880362-aac615de3c26?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjMxfHxqZXdlbGxlcnl8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    price: 77,
    desc:"Ring Accessory",
    name:"Collectors knife z335, anniversary gift ideas, hunting knife, gift for coworker, engraved gift for boyfriend, 50th birthday gift for brother"
 
  },
  {
    img: "https://images.unsplash.com/photo-1514927465065-bbdc86c7a76c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGpld2VsbGVyeXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    price: 37,
    desc:"Ring",
    name:"Collectors knife z335, anniversary gift ideas, hunting knife, gift for coworker, engraved gift for boyfriend, 50th birthday gift for brother"
 
  },
  {
    img: "https://images.unsplash.com/photo-1586878341523-7acb55eb8c12?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjh8fGpld2VsbGVyeXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    price: 32,
    desc:"Gold Bracelet",
    name:"Collectors knife z335, anniversary gift ideas, hunting knife, gift for coworker, engraved gift for boyfriend, 50th birthday gift for brother"
 
  },

  {
    img: "https://images.unsplash.com/photo-1552742275-6aee5589cd29?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fGpld2VsbGVyeXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    price: 54,
    desc:"Watch",
    name:"Collectors knife z335, anniversary gift ideas, hunting knife, gift for coworker, engraved gift for boyfriend, 50th birthday gift for brother"
 
  },
  {
    img: "https://images.unsplash.com/photo-1601121141461-920cb1993441?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTV8fGpld2VsbGVyeXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    price: 574,
    desc:"Gold Nacklace",
    name:"Collectors knife z335, anniversary gift ideas, hunting knife, gift for coworker, engraved gift for boyfriend, 50th birthday gift for brother"
 
  },
  
  {
    img: "https://images.unsplash.com/photo-1617191880362-aac615de3c26?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjMxfHxqZXdlbGxlcnl8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    price: 77,
    desc:"Ring Accessory",
    name:"Collectors knife z335, anniversary gift ideas, hunting knife, gift for coworker, engraved gift for boyfriend, 50th birthday gift for brother"
 
  }      
  ,{
        img: "https://images.unsplash.com/photo-1514927465065-bbdc86c7a76c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGpld2VsbGVyeXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        price: 37,
        desc:"Ring",
        name:"Collectors knife z335, anniversary gift ideas, hunting knife, gift for coworker, engraved gift for boyfriend, 50th birthday gift for brother"
     
      },
      {
        img: "https://images.unsplash.com/photo-1586878341523-7acb55eb8c12?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjh8fGpld2VsbGVyeXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        price: 32,
        desc:"Gold Bracelet",
        name:"Collectors knife z335, anniversary gift ideas, hunting knife, gift for coworker, engraved gift for boyfriend, 50th birthday gift for brother"
     
      },
      {
        img: "https://images.unsplash.com/photo-1552742275-6aee5589cd29?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fGpld2VsbGVyeXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        price: 54,
        desc:"Watch",
        name:"Collectors knife z335, anniversary gift ideas, hunting knife, gift for coworker, engraved gift for boyfriend, 50th birthday gift for brother"
     
      },
      {
        img: "https://images.unsplash.com/photo-1601121141461-920cb1993441?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTV8fGpld2VsbGVyeXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        price: 574,
        desc:"Gold Nacklace",
        name:"Collectors knife z335, anniversary gift ideas, hunting knife, gift for coworker, engraved gift for boyfriend, 50th birthday gift for brother"
     
      },
      {
        img: "https://images.unsplash.com/photo-1617191880362-aac615de3c26?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjMxfHxqZXdlbGxlcnl8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        price: 77,
        desc:"Ring Accessory",
        name:"Collectors knife z335, anniversary gift ideas, hunting knife, gift for coworker, engraved gift for boyfriend, 50th birthday gift for brother"
     
      },
      {
        img: "https://images.unsplash.com/photo-1514927465065-bbdc86c7a76c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGpld2VsbGVyeXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        price: 37,
        desc:"Ring",
        name:"Collectors knife z335, anniversary gift ideas, hunting knife, gift for coworker, engraved gift for boyfriend, 50th birthday gift for brother"
     
      },
      {
        img: "https://images.unsplash.com/photo-1586878341523-7acb55eb8c12?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjh8fGpld2VsbGVyeXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        price: 32,
        desc:"Gold Bracelet",
        name:"Collectors knife z335, anniversary gift ideas, hunting knife, gift for coworker, engraved gift for boyfriend, 50th birthday gift for brother"
     
      },
      {
        img: "https://images.unsplash.com/photo-1552742275-6aee5589cd29?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fGpld2VsbGVyeXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        price: 54,
        desc:"Watch",
        name:"Collectors knife z335, anniversary gift ideas, hunting knife, gift for coworker, engraved gift for boyfriend, 50th birthday gift for brother"
     
      },
      {
        img: "https://images.unsplash.com/photo-1601121141461-920cb1993441?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTV8fGpld2VsbGVyeXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        price: 574,
        desc:"Gold Nacklace",
        name:"Collectors knife z335, anniversary gift ideas, hunting knife, gift for coworker, engraved gift for boyfriend, 50th birthday gift for brother"
     
      },
     
      {
        img: "https://images.unsplash.com/photo-1617191880362-aac615de3c26?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjMxfHxqZXdlbGxlcnl8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        price: 77,
        desc:"Ring Accessory",
        name:"Collectors knife z335, anniversary gift ideas, hunting knife, gift for coworker, engraved gift for boyfriend, 50th birthday gift for brother"
     
      },
      {
        img: "https://images.unsplash.com/photo-1514927465065-bbdc86c7a76c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGpld2VsbGVyeXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        price: 37,
        desc:"Ring",
        name:"Collectors knife z335, anniversary gift ideas, hunting knife, gift for coworker, engraved gift for boyfriend, 50th birthday gift for brother"
     
      },
      {
        img: "https://images.unsplash.com/photo-1586878341523-7acb55eb8c12?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjh8fGpld2VsbGVyeXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        price: 32,
        desc:"Gold Bracelet",
        name:"Collectors knife z335, anniversary gift ideas, hunting knife, gift for coworker, engraved gift for boyfriend, 50th birthday gift for brother"
     
      },
      
      {
        img: "https://images.unsplash.com/photo-1552742275-6aee5589cd29?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fGpld2VsbGVyeXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        price: 54,
        desc:"Watch",
        name:"Collectors knife z335, anniversary gift ideas, hunting knife, gift for coworker, engraved gift for boyfriend, 50th birthday gift for brother"
     
      },
      {
        img: "https://images.unsplash.com/photo-1601121141461-920cb1993441?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTV8fGpld2VsbGVyeXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        price: 574,
        desc:"Gold Nacklace",
        name:"Collectors knife z335, anniversary gift ideas, hunting knife, gift for coworker, engraved gift for boyfriend, 50th birthday gift for brother"
     
      },
     
      {
        img: "https://images.unsplash.com/photo-1617191880362-aac615de3c26?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjMxfHxqZXdlbGxlcnl8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        price: 77,
        desc:"Ring Accessory",
        name:"Collectors knife z335, anniversary gift ideas, hunting knife, gift for coworker, engraved gift for boyfriend, 50th birthday gift for brother"
     
      },
      {
        img: "https://images.unsplash.com/photo-1514927465065-bbdc86c7a76c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGpld2VsbGVyeXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        price: 37,
        desc:"Ring",
        name:"Collectors knife z335, anniversary gift ideas, hunting knife, gift for coworker, engraved gift for boyfriend, 50th birthday gift for brother"
     
      },
      {
        img: "https://images.unsplash.com/photo-1586878341523-7acb55eb8c12?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjh8fGpld2VsbGVyeXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        price: 32,
        desc:"Gold Bracelet",
        name:"Collectors knife z335, anniversary gift ideas, hunting knife, gift for coworker, engraved gift for boyfriend, 50th birthday gift for brother"
     
      },
    
      {
        img: "https://images.unsplash.com/photo-1552742275-6aee5589cd29?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fGpld2VsbGVyeXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        price: 54,
        desc:"Watch",
        name:"Collectors knife z335, anniversary gift ideas, hunting knife, gift for coworker, engraved gift for boyfriend, 50th birthday gift for brother"
     
      },
      {
        img: "https://images.unsplash.com/photo-1601121141461-920cb1993441?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTV8fGpld2VsbGVyeXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        price: 574,
        desc:"Gold Nacklace",
        name:"Collectors knife z335, anniversary gift ideas, hunting knife, gift for coworker, engraved gift for boyfriend, 50th birthday gift for brother"
     
      },
     
      {
        img: "https://images.unsplash.com/photo-1617191880362-aac615de3c26?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjMxfHxqZXdlbGxlcnl8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        price: 77,
        desc:"Ring Accessory",
        name:"Collectors knife z335, anniversary gift ideas, hunting knife, gift for coworker, engraved gift for boyfriend, 50th birthday gift for brother"
     
      },
      {
        img: "https://images.unsplash.com/photo-1514927465065-bbdc86c7a76c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGpld2VsbGVyeXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        price: 37,
        desc:"Ring",
        name:"Collectors knife z335, anniversary gift ideas, hunting knife, gift for coworker, engraved gift for boyfriend, 50th birthday gift for brother"
     
      },
      {
        img: "https://images.unsplash.com/photo-1586878341523-7acb55eb8c12?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjh8fGpld2VsbGVyeXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        price: 32,
        desc:"Gold Bracelet",
        name:"Collectors knife z335, anniversary gift ideas, hunting knife, gift for coworker, engraved gift for boyfriend, 50th birthday gift for brother"
     
      },
   
      {
        img: "https://images.unsplash.com/photo-1552742275-6aee5589cd29?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fGpld2VsbGVyeXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        price: 54,
        desc:"Watch",
        name:"Collectors knife z335, anniversary gift ideas, hunting knife, gift for coworker, engraved gift for boyfriend, 50th birthday gift for brother"
     
      },
      {
        img: "https://images.unsplash.com/photo-1601121141461-920cb1993441?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTV8fGpld2VsbGVyeXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        price: 574,
        desc:"Gold Nacklace",
        name:"Collectors knife z335, anniversary gift ideas, hunting knife, gift for coworker, engraved gift for boyfriend, 50th birthday gift for brother"
     
      },
      
      {
        img: "https://images.unsplash.com/photo-1617191880362-aac615de3c26?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjMxfHxqZXdlbGxlcnl8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        price: 77,
        desc:"Ring Accessory",
        name:"Collectors knife z335, anniversary gift ideas, hunting knife, gift for coworker, engraved gift for boyfriend, 50th birthday gift for brother"
     
      },
      {
        img: "https://images.unsplash.com/photo-1514927465065-bbdc86c7a76c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGpld2VsbGVyeXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        price: 37,
        desc:"Ring",
        name:"Collectors knife z335, anniversary gift ideas, hunting knife, gift for coworker, engraved gift for boyfriend, 50th birthday gift for brother"
     
      },
      {
        img: "https://images.unsplash.com/photo-1586878341523-7acb55eb8c12?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjh8fGpld2VsbGVyeXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        price: 32,
        desc:"Gold Bracelet",
        name:"Collectors knife z335, anniversary gift ideas, hunting knife, gift for coworker, engraved gift for boyfriend, 50th birthday gift for brother"
     
      },
     
    
      {
        img: "https://images.unsplash.com/photo-1601121141461-920cb1993441?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTV8fGpld2VsbGVyeXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        price: 574,
        desc:"Gold Nacklace",
        name:"Collectors knife z335, anniversary gift ideas, hunting knife, gift for coworker, engraved gift for boyfriend, 50th birthday gift for brother"
     
      },
     
      {
        img: "https://images.unsplash.com/photo-1617191880362-aac615de3c26?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjMxfHxqZXdlbGxlcnl8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        price: 77,
        desc:"Ring Accessory",
        name:"Collectors knife z335, anniversary gift ideas, hunting knife, gift for coworker, engraved gift for boyfriend, 50th birthday gift for brother"
     
      },
      {
        img: "https://images.unsplash.com/photo-1514927465065-bbdc86c7a76c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGpld2VsbGVyeXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        price: 37,
        desc:"Ring",
        name:"Collectors knife z335, anniversary gift ideas, hunting knife, gift for coworker, engraved gift for boyfriend, 50th birthday gift for brother"
     
      },
      {
        img: "https://images.unsplash.com/photo-1586878341523-7acb55eb8c12?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjh8fGpld2VsbGVyeXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        price: 32,
        desc:"Gold Bracelet",
        name:"Collectors knife z335, anniversary gift ideas, hunting knife, gift for coworker, engraved gift for boyfriend, 50th birthday gift for brother"
     
      },
    
      {
        img: "https://images.unsplash.com/photo-1552742275-6aee5589cd29?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fGpld2VsbGVyeXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        price: 54,
        desc:"Watch",
        name:"Collectors knife z335, anniversary gift ideas, hunting knife, gift for coworker, engraved gift for boyfriend, 50th birthday gift for brother"
     
      },
      {
        img: "https://images.unsplash.com/photo-1601121141461-920cb1993441?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTV8fGpld2VsbGVyeXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        price: 574,
        desc:"Gold Nacklace",
        name:"Collectors knife z335, anniversary gift ideas, hunting knife, gift for coworker, engraved gift for boyfriend, 50th birthday gift for brother"
     
      },
      
      {
        img: "https://images.unsplash.com/photo-1617191880362-aac615de3c26?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjMxfHxqZXdlbGxlcnl8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        price: 77,
        desc:"Ring Accessory",
        name:"Collectors knife z335, anniversary gift ideas, hunting knife, gift for coworker, engraved gift for boyfriend, 50th birthday gift for brother"
     
      }
      
]
async function seedJewellery() {
    await Jewellery.insertMany(jewellery);
    console.log("DB jewellery SEEDED!!!");
}

module.exports = seedJewellery;