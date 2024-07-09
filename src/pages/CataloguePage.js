import React from 'react';
import './CataloguePage.css';

const CataloguePage = () => (
  <div className="catalogue-container">
    <h1>Catalogue</h1>
    <div className="catalogue-grid">
      <div className="catalogue-item">
        <img src="https://assets.vogue.in/photos/5d981ab9fe373c0008956c8d/2:3/w_1600,c_limit/Mahesh%20Babu%20Vogue%20India%20October%202019%20interview%20shoot.jpg" alt="Item 1" />
        <p>Casual Wear</p>
        <button>Add to Cart</button>
      </div>
      <div className="catalogue-item">
        <img src="https://d1ebi6y8mvowaj.cloudfront.net/wp-content/uploads/2022/05/mahesh_babu_may_issue_2022-104.jpg" alt="Item 2" />
        <p>3 Piece Suit</p>
        <button>Add to Cart</button>
      </div>
      <div className="catalogue-item">
        <img src="https://pbs.twimg.com/media/GKIzVp0XMAEC1cZ?format=jpg&name=large" alt="Item 3" />
        <p>Linen Wear</p>
        <button>Add to Cart</button>
      </div>
    </div>
  </div>
);

export default CataloguePage;
