import React from "react";
import ReactDOM from "react-dom";

function Card(props) {
  return (
    <>
      <h2>{props.name}</h2>
      <img src={props.img} alt="avatar_img" />
      <p>{props.tel}</p>
      <p>{props.email}</p>
    </>
  );
}

ReactDOM.render(
  <>
    <h1>My Contacts</h1>
    <Card
      name="Beyonce"
      img="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
      tel="+123 456 789"
      email="b@beyonce.com"
    />
    <Card
      name="Lana Del Rey"
      img="https://images.bursadabugun.com/haber/2022/09/05/1541736-unlu-sarkici-lana-del-rey-son-hali-ile-gorenleri-sasirtti-6315b6424687e.jpg"
      tel="61165481"
      email="LDR@lana.com"
    />
  </>,
  document.getElementById("root")
);
