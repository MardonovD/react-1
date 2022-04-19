import React from "react"; //react bu standart  xolatda shunaqa yozish kerak..
// tepadagi yozish bu componentalarni yozish uchun kerak

import ReactDOM from "react-dom"; //render qilish uchun kerak va index.html bilan ulab beradi...

const data = function () {
  let data = new Date();

  const kun = data.getDate();
  const soat = data.getHours();

  const years = data.getFullYear();
  const oy = data.getMonth();
  const sekund = data.getSeconds();
  return { kun, soat, oy, years, sekund };
};

const App = function () {
  const malumot = data();

  return (
    <div>
      <p>
        {malumot.kun}:{malumot.oy}:{malumot.years}:{malumot.sekund}
      </p>
    </div>
  );
};

setInterval(function () {
  ReactDOM.render(<App />, document.querySelector("#root"));
}, 1000);

// reatct proyect yaratidhni ikki xil usuli mavjud.
//1. npm install -g  create-react-app --> kutubxonasidan globalny qilib kompyuterimizning xamma joyiga ishlaydigan qilib install qilamaiz..

// URTATISH--> npm install -g create-react-app (bir marta qilinadigan narsa bu c discda user papkasida saqlanadi..)

//2. papka yaratish uchun --> (create-react-app NOMIProject) yozamiza....

// react structurasi quyudagicha-->
//1.public-> default xolatdagi  papkalar

const Doston = () => {
  const name = "doston";
  const age = 20;
  const isMerriad = false;
  return { name, age, isMerriad };
};

console.log(Doston);
