import { useState, useEffect } from "react";
import "../../App.css";

const base_url = `/api/menu.json`;

let url = `${base_url}`;

const MenuLocalJsonPage_34 = () => {
  const [product, setProduct] = useState([]);

  const changeFilter = (filter) => {
    if (filter === "all") {
      url = `${base_url}`;
    } else {
      url = `${base_url}&category=eq.${filter}`;
    }
    getMenuData_34(filter);
  };

  const getMenuData_34 = async (filter = "all") => {
    const response = await fetch(url);
    const data = await response.json();
    console.log(`${filter} data`, data);
    setProduct(data);
  };

  useEffect(() => {
    getMenuData_34();
  }, []);

  return (
    <section className="menu">
      <div className="title">
        <h2>Menu From JSON DATA</h2>
        <h3>Billy, 210410196</h3>
        <div className="underline"></div>
      </div>
      <div className="btn-container">
        <button
          type="button"
          className="filter-btn"
          data-id="all"
          onClick={() => changeFilter("all")}
        >
          all
        </button>
        <button
          type="button"
          className="filter-btn"
          data-id="breakfast"
          onClick={() => changeFilter("breakfast")}
        >
          breakfast
        </button>
        <button
          type="button"
          className="filter-btn"
          data-id="lunch"
          onClick={() => changeFilter("lunch")}
        >
          lunch
        </button>
        <button
          type="button"
          className="filter-btn"
          data-id="dessert"
          onClick={() => changeFilter("dessert")}
        >
          dessert
        </button>
        <button
          type="button"
          className="filter-btn"
          data-id="shakes"
          onClick={() => changeFilter("shakes")}
        >
          shakes
        </button>
      </div>
      <div className="section-center">
        {product.map((item) => {
          const { id, title, category, price, img, descrip } = item;
          return (
            <article className="menu-item" key={id}>
              <img src={img} alt={title} className="photo" />
              <div className="item-info">
                <header>
                  <h4>{title}</h4>
                  <h4 className="price">{price}</h4>
                </header>
                <p className="item-text">{descrip}</p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default MenuLocalJsonPage_34;
