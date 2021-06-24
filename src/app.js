/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  //write your code here
  document.querySelector("#button").addEventListener("click", () => {
    document.querySelector("#the-excuse").innerHTML = generatExcuse();
  });
};

let generatExcuse = () => {
  let pronoun = [" A ", " The "];
  let subject = [
    " dog ",
    " horse ",
    " raccoon ",
    " jogger ",
    " comedian ",
    " racer ",
    " policeman "
  ];
  let actions = [
    " took my ",
    " ate my ",
    " ran away with my ",
    " yelled at my ",
    " threw my ",
    " bit my ",
    " sat on my "
  ];
  let where = [
    " on the park ",
    " on the table ",
    " in my house ",
    " on the sewer ",
    " on the forest ",
    " on the beach ",
    " at jail "
  ];
  let possesion = [
    " car ",
    " keys ",
    " homework ",
    " ring ",
    " mug ",
    " flowers ",
    " dentures "
  ];

  let proIndex = Math.floor(Math.random() * pronoun.length);
  let subIndex = Math.floor(Math.random() * subject.length);
  let actionsIndex = Math.floor(Math.random() * actions.length);
  let whereIndex = Math.floor(Math.random() * where.length);
  let possesionIndex = Math.floor(Math.random() * possesion.length);

  return (
    pronoun[proIndex] +
    "" +
    subject[subIndex] +
    "" +
    actions[actionsIndex] +
    "" +
    possesion[possesionIndex] +
    "" +
    where[whereIndex]
  );
};
