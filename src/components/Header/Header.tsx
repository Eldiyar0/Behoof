import "./Header.css";
import logo from "../../assets/image/logo.svg";
import { GoHeart } from "react-icons/go";
import { IoStatsChart } from "react-icons/io5";
import { CiUser } from "react-icons/ci";

const Header = () => {
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
    </div>
  );
};

export default Header;
