import "./products.css";
import logo from "../../assets/image/logo.svg";
import { GoHeart } from "react-icons/go";
import { IoStatsChart } from "react-icons/io5";
import { CiUser } from "react-icons/ci";
import { CiShare1 } from "react-icons/ci";
import { GrFormNext } from "react-icons/gr";
import React from "react";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, MenuProps, Space, message } from "antd";
import { BsHeart } from "react-icons/bs";
import img1 from "../../assets/image/img1.png";
import Frame6 from "../../assets/image/Frame 7.png";
import { IoCheckmark } from "react-icons/io5";
import { IoCloseOutline } from "react-icons/io5";
import { LuBarChart2 } from "react-icons/lu";
import { GoTriangleDown } from "react-icons/go";
import { BsArrowDownUp } from "react-icons/bs";
import { BsSliders2Vertical } from "react-icons/bs";

const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
  message.info("Click on left button.");
  console.log("click left button", e);
};

const handleMenuClick: MenuProps["onClick"] = (e) => {
  message.info("Click on menu item.");
  console.log("click", e);
};

const items: MenuProps["items"] = [
  {
    label: "По релевантности",
    key: "1",
  },
  {
    label: "По релевантности",
    key: "2",
  },
  {
    label: "По последним отзывам",
    key: "3",
    danger: true,
  },
];

const menuProps = {
  items,
  onClick: handleMenuClick,
};
function button() {
  console.log("eys");
}

const Products: React.FC = () => {
  return (
    <div id="products">
      <div className="container">
        <div className="products__text">
          <a href="#" className="main">
            главная
          </a>
          <h1 className="qwe">/</h1>
          <a href="#" className="smartphone">
            смартфоны
          </a>
        </div>
        <div className="hero">
          <h1 className="title">смартфоны</h1>
          <button className="hero-btn">
            Все что нужно знать при выборе Смартфона <CiShare1 />
          </button>
        </div>
        <div className="buttons">
          <button className="button" onClick={button}>
            <BsArrowDownUp /> Сортировка
          </button>
          <button className="button" onClick={button}>
            {" "}
            <BsSliders2Vertical /> Фильтры
          </button>
        </div>
        <section className="character1">
          <div className="character">
            <h1 className="character__title">Качественные характеристики</h1>
            <div className="character__content">
              <div className="character-title1">
                <h1 className="price">Цена</h1>
                <button className="btn">От 12 511</button>
                <button className="btn">До 99 511</button>
                <h1 className="character-title1">Диапазон</h1>
                <div className="Radio">
                  <input type="radio" className="radio" /> 0 - 10 000 ₽
                </div>
                <div className="Radio">
                  <input type="radio" className="radio" /> 10 000 - 20 000 ₽
                </div>
                <div className="Radio">
                  <input type="radio" className="radio" /> 20 000 - 30 000 ₽
                </div>
                <div className="Radio-filter">
                  <input type="radio" className="radio" /> 30 000 ₽
                </div>
              </div>
              <div className="character-title">
                <h1 className="character-title1">Батарея</h1>
                <div className="Radio0">
                  <input type="checkbox" className="radio" /> Text label
                </div>
                <div className="Radio">
                  <input type="checkbox" className="radio" /> Text label
                </div>
                <div className="Radio">
                  <input type="checkbox" className="radio" /> Text label
                </div>
                <div className="Radio-filter">
                  <input type="checkbox" className="radio" /> Text label
                </div>
                <div className="Radio-filter">
                  <input type="checkbox" className="radio" /> Text label
                </div>
                <div className="Radio-filter">
                  <input type="checkbox" className="radio" /> Text label
                </div>
              </div>
              <div className="character-title">
                <h1 className="character-title1">Камера</h1>
                <div className="Radio0">
                  <input type="checkbox" className="radio" /> Text label
                </div>
                <div className="Radio">
                  <input type="checkbox" className="radio" />
                  Text label
                </div>
                <div className="Radio2">
                  <input type="checkbox" className="radio" /> Text label
                </div>
                <div className="Radio-filter">
                  <input type="checkbox" className="radio" /> Text label
                </div>
                <div className="Radio-filter">
                  <input type="checkbox" className="radio" /> Text label
                </div>
                <div className="Radio-filter">
                  <input type="checkbox" className="radio" /> Text label
                </div>
              </div>
            </div>
          </div>

          <div className="wicker1">
            <div className="titles">
              <h1 className="wicker-title">Дополнительные фильтры</h1>
              <button className="wicker-btn">
                Все фильтры <GrFormNext />
              </button>
            </div>
            <div className="wicker__content">
              <div className="character-title">
                <h1 className="character-title1">Ответ</h1>
                <div className="Radio0">
                  <input type="checkbox" className="radio" /> Text label
                </div>
                <div className="Radio">
                  <input type="checkbox" className="radio" /> Text label
                </div>
                <div className="Radio">
                  <input type="checkbox" className="radio" /> Text label
                </div>
                <div className="Radio-filter">
                  <input type="checkbox" className="radio" /> Text label
                </div>
                <div className="Radio-filter">
                  <input type="checkbox" className="radio" /> Text label
                </div>
                <div className="Radio-filter">
                  <input type="checkbox" className="radio" /> Text label
                </div>
              </div>
              <div className="character-title">
                <h1 className="character-title1">Портативность</h1>
                <div className="Radio0">
                  <input type="checkbox" className="radio" /> Text label
                </div>
                <div className="Radio">
                  <input type="checkbox" className="radio" />
                  Text label
                </div>
                <div className="Radio">
                  <input type="checkbox" className="radio" /> Text label
                </div>
                <div className="Radio-filter">
                  <input type="checkbox" className="radio" /> Text label
                </div>
                <div className="Radio-filter">
                  <input type="checkbox" className="radio" /> Text label
                </div>
                <div className="Radio-filter">
                  <input type="checkbox" className="radio" /> Text label
                </div>
              </div>
              <div className="character-title">
                <h1 className="character-title1">4G (LTE)</h1>
                <label className="switch">
                  <input type="checkbox" />
                  <span className="slider"></span>
                  <p className="p">Есть</p>
                </label>
              </div>{" "}
            </div>
          </div>
        </section>
        <section className="According">
          <Dropdown className="According-btn" menu={menuProps}>
            <button>
              <Space>
                По последним отзывам
                <DownOutlined />
              </Space>
            </button>
          </Dropdown>
        </section>
        <section className="iPhone">
          <div className="container">
            <div className="Iphone__content">
              <div className="image">
                <img src={img1} alt="" className="img" />
              </div>
              <div className="Iphone-content1">
                <div className="Iphone__titles">
                  <h1 className="Iphone-title1">4.4 Оценка экспертов</h1>
                  <div className="Iphone-title2">
                    <div className="rating">
                      <h1 className="rating-value">4.0</h1>
                      <input
                        className="radios"
                        type="radio"
                        id="star5"
                        name="rating"
                        value="5"
                      />
                      <label htmlFor="star5"></label>
                      <input
                        className="radios"
                        type="radio"
                        id="star4"
                        name="rating"
                        value="4"
                      />
                      <label htmlFor="star4"></label>
                      <input
                        className="radios"
                        type="radio"
                        id="star3"
                        name="rating"
                        value="3"
                      />
                      <label htmlFor="star3"></label>
                      <input
                        className="radios"
                        type="radio"
                        id="star2"
                        name="rating"
                        value="2"
                      />
                      <label htmlFor="star2"></label>
                      <input
                        className="radios"
                        type="radio"
                        id="star1"
                        name="rating"
                        value="1"
                      />
                      <label htmlFor="star1"></label>
                      <h1 className="rating-values">447 Отзывов</h1>
                    </div>
                  </div>
                  <button className="BsHeart1">
                    {" "}
                    <BsHeart />
                  </button>
                  <button className="BsHeart2">
                    <LuBarChart2 />
                  </button>
                </div>
                <div className="reviews">
                  <div className="reviews__conten">
                    <div className="reviews-titles">
                      <h1 className="reviews-title">
                        Apple iPhone 13 Pro Max 256 ГБ серый
                      </h1>
                      <h1 className="reviews-title1">
                        {" "}
                        <GoTriangleDown />
                        13%
                      </h1>
                      <h1 className="reviews-title2">78 999 ₽</h1>
                    </div>
                  </div>
                </div>
                <div className="Frame-text">
                  <div className="Frame-titles">
                    <h1 className="Frame-title">
                      <IoCheckmark className="icon" /> Dual Sim, 3G, 4G, 5G,
                      VoLTE, Wi-Fi, NFC
                    </h1>
                    <h1 className="Frame-title">
                      <IoCheckmark className="icon" /> Dual Sim, 3G, 4G, 5G,
                      VoLTE, Wi-Fi, NFC
                    </h1>
                    <h1 className="Frame-title">
                      <IoCheckmark className="icon" /> Dual Sim, 3G, 4G, 5G,
                      VoLTE, Wi-Fi, NFC
                    </h1>
                    <h1 className="Frame-title">
                      <IoCheckmark className="icon" /> Dual Sim, 3G, 4G, 5G,
                      VoLTE, Wi-Fi, NFC
                    </h1>
                  </div>
                  <div className="Frame-title1">
                    <div className="Frame-titles">
                      <h1 className="Frame-title1">
                        <IoCheckmark className="icon" />4 GB RAM, 128 GB inbuilt
                      </h1>
                      <h1 className="Frame-title1">
                        <IoCloseOutline className="icon" /> Memory Card Not
                        Supported
                      </h1>
                      <h1 className="Frame-title1">
                        <IoCheckmark className="icon" /> 3240 mAh Battery with
                        Fast Charging
                      </h1>
                      <h1 className="Frame-title1">
                        <IoCheckmark className="icon" /> iOS v15
                      </h1>
                    </div>
                  </div>
                </div>
              </div>

              <div className="frame">
                <img src={Frame6} alt="" className="img" />
                <button className=" Frame-btn">Перейти к товару</button>
              </div>
            </div>
          </div>
        </section>
        <section className="iPhone">
          <div className="container">
            <div className="Iphone__content">
              <div className="image">
                <img src={img1} alt="" className="img" />
              </div>
              <div className="Iphone-content1">
                <div className="Iphone__titles">
                  <h1 className="Iphone-title1">4.4 Оценка экспертов</h1>
                  <div className="Iphone-title2">
                    <div className="rating">
                      <h1 className="rating-value">4.0</h1>
                      <input
                        className="radios"
                        type="radio"
                        id="star5"
                        name="rating"
                        value="5"
                      />
                      <label htmlFor="star5"></label>
                      <input
                        className="radios"
                        type="radio"
                        id="star4"
                        name="rating"
                        value="4"
                      />
                      <label htmlFor="star4"></label>
                      <input
                        className="radios"
                        type="radio"
                        id="star3"
                        name="rating"
                        value="3"
                      />
                      <label htmlFor="star3"></label>
                      <input
                        className="radios"
                        type="radio"
                        id="star2"
                        name="rating"
                        value="2"
                      />
                      <label htmlFor="star2"></label>
                      <input
                        className="radios"
                        type="radio"
                        id="star1"
                        name="rating"
                        value="1"
                      />
                      <label htmlFor="star1"></label>
                      <h1 className="rating-values">447 Отзывов</h1>
                    </div>
                  </div>
                  <button className="BsHeart1">
                    {" "}
                    <BsHeart />
                  </button>
                  <button className="BsHeart2">
                    <LuBarChart2 />
                  </button>
                </div>
                <div className="reviews">
                  <div className="reviews__conten">
                    <div className="reviews-titles">
                      <h1 className="reviews-title">
                        Apple iPhone 13 Pro Max 256 ГБ серый
                      </h1>
                      <h1 className="reviews-title1">
                        {" "}
                        <GoTriangleDown />
                        13%
                      </h1>
                      <h1 className="reviews-title2">78 999 ₽</h1>
                    </div>
                  </div>
                </div>
                <div className="Frame-text">
                  <div className="Frame-titles">
                    <h1 className="Frame-title">
                      <IoCheckmark className="icon" /> Dual Sim, 3G, 4G, 5G,
                      VoLTE, Wi-Fi, NFC
                    </h1>
                    <h1 className="Frame-title">
                      <IoCheckmark className="icon" /> Dual Sim, 3G, 4G, 5G,
                      VoLTE, Wi-Fi, NFC
                    </h1>
                    <h1 className="Frame-title">
                      <IoCheckmark className="icon" /> Dual Sim, 3G, 4G, 5G,
                      VoLTE, Wi-Fi, NFC
                    </h1>
                    <h1 className="Frame-title">
                      <IoCheckmark className="icon" /> Dual Sim, 3G, 4G, 5G,
                      VoLTE, Wi-Fi, NFC
                    </h1>
                  </div>
                  <div className="Frame-title1">
                    <div className="Frame-titles">
                      <h1 className="Frame-title1">
                        <IoCheckmark className="icon" />4 GB RAM, 128 GB inbuilt
                      </h1>
                      <h1 className="Frame-title1">
                        <IoCloseOutline className="icon" /> Memory Card Not
                        Supported
                      </h1>
                      <h1 className="Frame-title1">
                        <IoCheckmark className="icon" /> 3240 mAh Battery with
                        Fast Charging
                      </h1>
                      <h1 className="Frame-title1">
                        <IoCheckmark className="icon" /> iOS v15
                      </h1>
                    </div>
                  </div>
                </div>
              </div>

              <div className="frame">
                <img src={Frame6} alt="" className="img" />
                <button className=" Frame-btn">Перейти к товару</button>
              </div>
            </div>
          </div>
        </section>
        <section className="iPhone">
          <div className="container">
            <div className="Iphone__content">
              <div className="image">
                <img src={img1} alt="" className="img" />
              </div>
              <div className="Iphone-content1">
                <div className="Iphone__titles">
                  <h1 className="Iphone-title1">4.4 Оценка экспертов</h1>
                  <div className="Iphone-title2">
                    <div className="rating">
                      <h1 className="rating-value">4.0</h1>
                      <input
                        className="radios"
                        type="radio"
                        id="star5"
                        name="rating"
                        value="5"
                      />
                      <label htmlFor="star5"></label>
                      <input
                        className="radios"
                        type="radio"
                        id="star4"
                        name="rating"
                        value="4"
                      />
                      <label htmlFor="star4"></label>
                      <input
                        className="radios"
                        type="radio"
                        id="star3"
                        name="rating"
                        value="3"
                      />
                      <label htmlFor="star3"></label>
                      <input
                        className="radios"
                        type="radio"
                        id="star2"
                        name="rating"
                        value="2"
                      />
                      <label htmlFor="star2"></label>
                      <input
                        className="radios"
                        type="radio"
                        id="star1"
                        name="rating"
                        value="1"
                      />
                      <label htmlFor="star1"></label>
                      <h1 className="rating-values">447 Отзывов</h1>
                    </div>
                  </div>
                  <button className="BsHeart1">
                    {" "}
                    <BsHeart />
                  </button>
                  <button className="BsHeart2">
                    <LuBarChart2 />
                  </button>
                </div>
                <div className="reviews">
                  <div className="reviews__conten">
                    <div className="reviews-titles">
                      <h1 className="reviews-title">
                        Apple iPhone 13 Pro Max 256 ГБ серый
                      </h1>
                      <h1 className="reviews-title1">
                        {" "}
                        <GoTriangleDown />
                        13%
                      </h1>
                      <h1 className="reviews-title2">78 999 ₽</h1>
                    </div>
                  </div>
                </div>
                <div className="Frame-text">
                  <div className="Frame-titles">
                    <h1 className="Frame-title">
                      <IoCheckmark className="icon" /> Dual Sim, 3G, 4G, 5G,
                      VoLTE, Wi-Fi, NFC
                    </h1>
                    <h1 className="Frame-title">
                      <IoCheckmark className="icon" /> Dual Sim, 3G, 4G, 5G,
                      VoLTE, Wi-Fi, NFC
                    </h1>
                    <h1 className="Frame-title">
                      <IoCheckmark className="icon" /> Dual Sim, 3G, 4G, 5G,
                      VoLTE, Wi-Fi, NFC
                    </h1>
                    <h1 className="Frame-title">
                      <IoCheckmark className="icon" /> Dual Sim, 3G, 4G, 5G,
                      VoLTE, Wi-Fi, NFC
                    </h1>
                  </div>
                  <div className="Frame-title1">
                    <div className="Frame-titles">
                      <h1 className="Frame-title1">
                        <IoCheckmark className="icon" />4 GB RAM, 128 GB inbuilt
                      </h1>
                      <h1 className="Frame-title1">
                        <IoCloseOutline className="icon" /> Memory Card Not
                        Supported
                      </h1>
                      <h1 className="Frame-title1">
                        <IoCheckmark className="icon" /> 3240 mAh Battery with
                        Fast Charging
                      </h1>
                      <h1 className="Frame-title1">
                        <IoCheckmark className="icon" /> iOS v15
                      </h1>
                    </div>
                  </div>
                </div>
              </div>

              <div className="frame">
                <img src={Frame6} alt="" className="img" />
                <button className=" Frame-btn">Перейти к товару</button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Products;
