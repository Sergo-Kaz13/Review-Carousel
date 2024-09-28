"use strict";

const reviews = [
  {
    id: 1,
    name: "susan smith",
    job: "web developer",
    img: "https://www.course-api.com/images/people/person-1.jpeg",
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: "anna johnson",
    job: "web designer",
    img: "https://www.course-api.com/images/people/person-2.jpeg",
    text: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "peter jones",
    job: "intern",
    img: "https://www.course-api.com/images/people/person-4.jpeg",
    text: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    name: "bill anderson",
    job: "the boss",
    img: "https://www.course-api.com/images/people/person-3.jpeg",
    text: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
];

const img = document.querySelector(".item_img_block img");
const userName = document.querySelector(".item_name");
const specialty = document.querySelector(".item_specialty");
const about = document.querySelector(".item_about");

const prevBtn = document.querySelector(".btn_arrow_l");
const nexBtn = document.querySelector(".btn_arrow_r");
const randBtn = document.querySelector(".btn_rand");

let currentItem = 0;

window.addEventListener("DOMContentLoaded", () => {
  const item = reviews[currentItem];

  img.src = item.img;
  userName.textContent = item.name;
  specialty.textContent = item.job;
  about.textContent = item.text;
});

const showUser = (current) => {
  const item = reviews[current];

  img.src = item.img;
  userName.textContent = item.name;
  specialty.textContent = item.job;
  about.textContent = item.text;
};

const getRandomNum = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

prevBtn.addEventListener("click", () => {
  currentItem--;

  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }

  showUser(currentItem);
});

nexBtn.addEventListener("click", () => {
  currentItem++;

  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }

  showUser(currentItem);
});

randBtn.addEventListener("click", () => {
  let itemNum;

  do {
    itemNum = getRandomNum(0, reviews.length - 1);
  } while (currentItem === itemNum);

  currentItem = itemNum;

  showUser(currentItem);
});
