import React from 'react';
import './CataloguePage.css';

const CataloguePage = () => (
  <div className="catalogue-container">
    <h1>Catalogue</h1>
    <div className="catalogue-grid">
      <div className="catalogue-item">
        <img src="https://static.zara.net/assets/public/f1c6/e364/7b5d4daf9b30/95158d1c50cb/07545270052-p/07545270052-p.jpg?ts=1716387407922&w=563" alt="Item 1" />
        <p>Casual Wear</p>
        <button>Add to Cart</button>
      </div>
      <div className="catalogue-item">
        <img src="https://static.zara.net/assets/public/ba58/8b46/26d74d40b1dc/840e7e873823/05755407500-a1/05755407500-a1.jpg?ts=1706111340116&w=563" alt="Item 2" />
        <p>Cardigan</p>
        <button>Add to Cart</button>
      </div>
      <div className="catalogue-item">
        <img src="https://static.zara.net/assets/public/a0de/67bd/16414cfb962d/fc7224778f33/06427029401-a1/06427029401-a1.jpg?ts=1709811226066&w=563" alt="Item 3" />
        <p>Long Knit Sweater</p>
        <button>Add to Cart</button>
      </div>
    </div>
  </div>
);

export default CataloguePage;
