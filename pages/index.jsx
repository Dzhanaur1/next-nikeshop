import MainSlider from "@/Components/Slider";
import { getAllProducts } from "@/services/porudct";
import Head from "next/head";
import Image from "next/image";

// import "../styles/globals.scss";

export default function HomePage({ sliderItems }) {
  return (
    <>
      <section className="section intro">
        <div className="intro__inner">
          <img src="/img/intro.png" alt="" className="intro__img" />
          <div className="intro__content section__content">
            <h3 className="intro__subtitle">First Look</h3>
            <h2 className="section__title">Nike Air Max Pulse</h2>
            <p className="section__text">
              Extreme comfort. Hyper durable. Max volume. Introducing the Air
              Max Pulse <br />
              —designed to&nbsp;push you past your limits and help you
              go&nbsp;to the max.
            </p>
            <div className="buttons">
              <div className="button btn--black">Notify Me</div>
              <div className="button btn--black">Shop Air Max</div>
            </div>
          </div>
        </div>
      </section>
      <div className="section">
        <MainSlider slides={sliderItems} />
      </div>
      <section className="section">
        <h3 className="section__name">Featured</h3>
        <img src="./img/featured.png" alt="" className="section__img" />
        <div className="section__content">
          <h2 className="section__title">STEP INTO WHAT FEELS GOOD</h2>
          <p className="section__text">
            Cause everyone should know the feeling of&nbsp;running in&nbsp;that
            perfect pair.
          </p>
          <button className="button btn--black">Find Your Shoe</button>
        </div>
      </section>
      <section className="section">
        <h3 className="section__name">Don’t Miss</h3>
        <img src="./img/miss.png" alt="" className="section__img" />
        <div className="section__content">
          <h2 className="section__title">FLIGHT ESSENTIALS</h2>
          <p className="section__text">
            Your built-to-last, all-week wears—but with style only Jordan Brand
            can deliver.
          </p>
          <button className="button btn--black">Shop</button>
        </div>
      </section>
      <section className="section essentials">
        <h3 className="section__name">The Essentials</h3>
        <div className="essentials__content">
          <div className="essentials__item">
            <img
              src="./img//essentials/Image-1.png"
              alt=""
              className="essentials_img"
            />
            <button className="button btn--light">Men’s</button>
          </div>
          <div className="essentials__item">
            <img
              src="./img//essentials/Image.png"
              alt=""
              className="essentials_img"
            />
            <button className="button btn--light">Women’s</button>
          </div>
          <div className="essentials__item">
            <img
              src="./img//essentials/Image-2.png"
              alt=""
              className="essentials_img"
            />
            <button className="button btn--light">Kids'</button>
          </div>
        </div>
      </section>
    </>
  );
}
export async function getServerSideProps() {
  const sliderItems = await getAllProducts();

  return {
    props: {
      sliderItems,
    },
  };
}
