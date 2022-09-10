import './about.scss';
import History from './History';

export default function About() {
  return (
    <div className="about_us">
      <div className="header">
        <img
          className="headerimg"
          src="./image/introduce/about_us_main.jpg"
          alt="main"
        />
      </div>
      <div className="container">
        <h2 className="title">CHOCOLATE MASTERED</h2>
        <div className="flex_content_one">
          <div className="img">
            <img id="factory" src="./image/introduce/choc1.png" alt="factory" />
          </div>
          <div className="introduce">
            <p>
              <br />
              <br />
              Precisely crafted using only the highest quality ingredients,
              <br /> ROECY' has been making exquisite, world class confections
              in
              <br />
              Hokkaido (the northernmost island of Japan). Hokkaido is best
              <br />
              known for its cool climate and rich natural resources, making it
              <br />
              an ideal place for producing chocolates of excellent quality.
              <br />
              The philosophy of ROECY' for constantly producing perfect
              <br /> chocolates still holds true, and the result is a brand that
              people
              <br /> around the world have come to love.
              <br />
            </p>
          </div>{' '}
        </div>
        <div className="time_line">
          <img
            className="cacao"
            src="./image/introduce/choc2.png"
            alt="intro1"
          />
          <img
            className="process"
            src="./image/introduce/choc3.png"
            alt="intro2"
          />
          <History
            year="1983"
            intro="ROECY' Confect Co., Ltd was established."
            name="right"
            img="./image/history/about_1.png"
            alt="choc1"
          />
          <History
            year="1985"
            intro="Produced its first chocolate, the 'Chocolate Bar."
            img="./image/history/about_2.png"
            alt="choc2"
          />
          <History
            year="1990"
            intro="Started production of 'Pure Chocolate'."
            name="right"
            img="./image/history/about_3.png"
            alt="choc3"
          />
          <History
            year="1995"
            intro="A bestseller was born—the 'Nama Chocolate'!"
            img="./image/history/about_4.png"
            alt="choc4"
          />
          <History
            year="2002"
            intro="Started production of 'Nut in Chocolate'."
            name="right"
            img="./image/history/about_5.png"
            alt="choc5"
          />
          <History
            year="2004"
            intro="Introduced a unique confection, 'Chocolate in Chocolate'."
            img="./image/history/about_6.png"
            alt="choc6"
          />
          <History
            year="1983"
            intro="Started production of 'Chocolate Cake'."
            name="right"
            img="./image/history/about_7.png"
            alt="choc7"
          />
          <History
            year="2008"
            intro="Launched in its boutiques the 'Prafeuille Chocolate rose'."
            img="./image/history/about_8.png"
            alt="choc8"
          />
          <History
            year="2012"
            intro="Established ROECY’ Confect USA and opened flagship boutique on Madison Avenue."
            name="last"
            img="./image/history/about_2.png"
            alt="choc9"
          />
        </div>
      </div>
    </div>
  );
}
