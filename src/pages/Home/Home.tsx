import "./Home.css";
import { MdNavigateNext } from "react-icons/md";
import phone from "../../assets/image/phone.svg";
import laptop from "../../assets/image/laptop.svg";
import tablet from "../../assets/image/tablet.svg";
import clock from "../../assets/image/smart clock.svg";
import play from "../../assets/image/play station.svg";
import head from "../../assets/image/head phones.svg";
import speaker from "../../assets/image/speaker.svg";
import acc from "../../assets/image/accessory.svg";
import { GrFormClose } from "react-icons/gr";

const Home = () => {
  return (
    <div id="home">
      <div className="container">
        <div className="home">
          <div className="category">
            <div className="category1">
              <h1>
                <span>1.8 млн</span> товаров в <span>2272</span> магазинах{" "}
                <br /> найди, сравни, выберай!
              </h1>
              <button>
                Перейти к категориям
                <MdNavigateNext />
              </button>
            </div>
            <div className="category2">
              <h1>
                <span>Топ-10</span> смартфонов <br /> 2023 года
              </h1>
              <button>
                Смотреть
                <MdNavigateNext />
              </button>
            </div>
          </div>
          <div className="bestChoise">
            <div className="gadgets">
              <h2>Лучший выбор</h2>
              <div className="products">
                <div className="phone">
                  <img src={phone} alt="" />
                  <h5>Смартфоны</h5>
                </div>
                <div className="laptop">
                  <img src={laptop} alt="" />
                  <h5>Ноутбуки</h5>
                </div>
                <div className="tablet">
                  <img src={tablet} alt="" />
                  <h5>Планшеты</h5>
                </div>
                <div className="clock">
                  <img src={clock} alt="" />
                  <h5>Умные часы</h5>
                </div>
                <div className="play">
                  <img src={play} alt="" />
                  <h5>Игровые приставки</h5>
                </div>
                <div className="head-phones">
                  <img src={head} alt="" />
                  <h5>Наушники</h5>
                </div>
                <div className="speaker">
                  <img src={speaker} alt="" />
                  <h5>Портативные колонки</h5>
                </div>
                <div className="acc">
                  <img src={acc} alt="" />
                  <h5>Аксесуары</h5>
                </div>
              </div>
            </div>
            <div className="proDet">
              <div className="btnCategory">
                <button>
                Дизайн
                  <GrFormClose />
                </button>
                <button>
                Портативность
                  <GrFormClose />
                </button>
                <button>Камера</button>
                <button>Ответ</button>
                <button>Дисплей</button>
                <button>Батарея</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
