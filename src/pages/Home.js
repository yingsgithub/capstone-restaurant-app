import React from "react";
import "../App.css";

function Home() {
  // const myStyle = {
  //   backgroundImage: "url(/jiangnanwall.png)",
  //   height: "100vh",
  //   marginTop: "-70px",
  //   fontSize: "50px",
  //   backgroundSize: "cover",
  //   backgroundRepeat: "no-repeat",
  // };
  return (
    <div>
      <div className="home-bkg">
        <div className="home-container">
          {/* <img src="/chelirest.png" alt="Notebook" className="home-img"></img> */}
          <img src="/cheli-logo.jpeg" alt="Notebook" className="home-img"></img>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <div className="home-content">
            <h1> C&nbsp;H&nbsp;E&nbsp;L&nbsp;I&nbsp;浙里 </h1>

            <h3>🥢 Jiang Nan Food</h3>
            <p>
              {" "}
              Jiangnan is a large geographical area of China to the south of the
              Yangtze River with fertile and well-watered, famed for its silk
              and handicrafts, and very densely populated. For the last
              millennium, this region has been at the heart of the most dynamic
              and sophisticated area of the country. The mere mention of
              Jiangnan evokes lyrical images of a Chinese water town, with white
              houses and willows growing along riverbanks, where poets wandered
              and romantic encounters took place. The food from Jiangnan is
              characterized by the use of very fresh ingredients, lots of
              seafood and the skillful use of soy sauce and sugar to make rich,
              tasty braising sauces.
            </p>
          </div>
        </div>
        <br></br>
      </div>
      <footer>Location: 19 St Marks Pl Ste 23 New York, NY 10003</footer>
    </div>
  );
}

export default Home;
