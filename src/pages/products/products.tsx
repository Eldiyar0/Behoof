import "./products.css";
import logo from "../../assets/image/logo.svg";
import { GoHeart } from "react-icons/go";
import { IoStatsChart } from "react-icons/io5";
import { CiUser } from "react-icons/ci";

const Products = () => {
  return (
    <div id="header">
      <div className="container">
        <div className="header">
          <img className="logo" src={logo} alt="" />
          <h4>
            Лучшие цены <br /> в интернет-магазинах{" "}
          </h4>
          <button className="products">Каталог товаров</button>
          <input type="text" placeholder="Поиск товаров" />
          <div className="btns">
            <button>
              <GoHeart />
            </button>
            <button>
              <IoStatsChart />
            </button>
            <button>
              <CiUser />
            </button>
          </div>
        </div>
      </div>
      <div className="products__text">
        <h1 className="main">главная </h1>
        <h1 className="qwe">/</h1>
        <h1 className="smartphone"> смартфоны</h1>
      </div>
      <div className="hero">
        <h1 className="title">смартфоны</h1>
        <p className="hero-text">Все что нужно знать при выборе Смартфона</p>
      </div>
      <div className="characteristics">
        <h1 className="characteristics-title">Качественные характеристики</h1>
        <p className="characteristics-text">Цена</p>
        <div className="characteristics__btn">
          <button className="btn">От 12 511</button>
          <button className="btn">До 99 511</button>
          
        </div>
        <div className="Range">
    <input type="radio" className="radio" />0 - 10 000 ₽
    <input type="radio" className="radio" />10 000 - 20 000 ₽
    <input type="radio" className="radio" />20 000 - 30 000 ₽
    <input type="radio" className="radio" />30 000 ₽
      </div>

        <div className="Battery">
          <h1 className="Battary-title">Батарея</h1>
          <input type="checkbox" />
          Text label
          <input type="checkbox" />
          Text label
          <input type="checkbox" />
          Text label
          <input type="checkbox" />
          Text label
          <input type="checkbox" />
          Text label
          <input type="checkbox" />
          Text label
        </div>
        <div className="Camera">
          <h1 Camera-title>Камера</h1>
          <input type="checkbox" />
          Text label
          <input type="checkbox" />
          Text label
          <input type="checkbox" />
          Text label
          <input type="checkbox" />
          Text label
          <input type="checkbox" />
          Text label
          <input type="checkbox" />
          Text label
        </div>
      </div>
    </div>
  );
};

export default Products;
