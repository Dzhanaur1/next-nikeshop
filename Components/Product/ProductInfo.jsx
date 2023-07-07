const ProductInfo = () => {
  return (
    <div className="prouct-info">
      <h1 className="prouct-title">Nike Air Max 97 SE</h1>
      <p className="product-type">Men's Shoes</p>
      <p className="product-price">MRP : ₹ 16 995.00</p>

      <div className="block-sizes">
        <div className="sizes-header">
          <h4>Select Size</h4>
          <p>Size Guide</p>
        </div>
        <ul className="sizes-list">
          <li className="size">UK 6 (EU 40)</li>
          <li className="size">UK 6.5</li>
          <li className="size">UK 7</li>
          <li className="size active">UK 7.5</li>
          <li className="size">UK 8</li>
          <li className="size">UK 8.5</li>
          <li className="size">UK 9</li>
          <li className="size">UK 9.5</li>
          <li className="size">UK 10</li>
          <li className="size">UK 10.5</li>
          <li className="size">UK 11</li>
          <li className="size">UK 11.5</li>
        </ul>
        <button className="button btn--black long--btn">Add to Bag</button>
        <button className="button btn--light long--btn border">
          Favourite
        </button>

        <p className="discr">
          Layer on style with the Air Max 97. The cracked leather and soft suede
          update the iconic design while the original look (inspired by Japanese
          bullet trains and water droplets) still takes centre stage.
          Easy-to-style colours let you hit the streets quickly.
        </p>
        <div className="details">
          <p>
            Colour Shown: Flat Pewter/
            <br />
            Light Bone/Black/White
          </p>
          <p>Style: DV7421-001</p>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
