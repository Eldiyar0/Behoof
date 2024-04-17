import React from "react";
import {
    FaInstagram,
    FaTelegramPlane,
    FaTiktok,
    FaYoutube,
} from "react-icons/fa";
import Logo from "../../assets/image/logo.svg";
import { SlSocialVkontakte } from "react-icons/sl";

import "./Footer.css";
import { GoHeart } from "react-icons/go";
import { IoStatsChart } from "react-icons/io5";
import { CiUser } from "react-icons/ci";
import { CgPlayListSearch } from "react-icons/cg";
import { RiHome4Line } from "react-icons/ri";

const Footer: React.FC = () => {
    return (
        <footer id="footer">
            <div
                className="        justify-content: space-between;
"
            >
                <div className="footer">
                    <div className="footerTegs">
                        <img src={Logo} alt="" />
                        <h5>Мы в соц сетях</h5>
                        <div className="footerIcons">
                            <h4 className="vk">
                                <SlSocialVkontakte />
                            </h4>
                            <h4>
                                <FaTiktok />
                            </h4>
                            <h4>
                                <FaInstagram />
                            </h4>
                            <h4>
                                <FaTelegramPlane />
                            </h4>
                            <h4>
                                <FaYoutube />
                            </h4>
                        </div>
                    </div>
                    <div className="footerTegs">
                        <h5>Пользователю</h5>
                        <h4>Связаться с нами</h4>
                        <h4>Поддерка пользователей</h4>
                        <h4>FAQ & Руководства</h4>
                        <h4>Политика конфиденциальности</h4>
                        <h4>Пользовательское соглашение</h4>
                    </div>
                    <div className="footerTegs">
                        <h5>Популярные категории</h5>
                        <h4>Смартфоны</h4>
                        <h4>Teteras electricas</h4>
                        <h4>Стиральные машины</h4>
                        <h4>Телевизоры</h4>
                        <h4>Ноутбуки</h4>
                    </div>

                    <div className="footerTegs">
                        <h5>Команда Behoof</h5>
                        <h4>О нас</h4>
                        <h4>Работа у нас</h4>
                    </div>
                </div>
                <h4 className="footerEndText">
                    Copyright © 2023 Behoof, Inc. Все права защищены
                </h4>
            </div>
            <div className="footer-btns">
                <button>
                    <RiHome4Line />
                    <li> Главная</li>
                </button>
                <button>
                    <CgPlayListSearch />
                    <li>Католог</li>
                </button>
                <button>
                    <GoHeart />
                    <li>Избранное</li>
                </button>
                <button>
                    <IoStatsChart />
                    <li>Сравнения</li>
                </button>
                <button>
                    <CiUser />
                    <li>Профиль</li>
                </button>
            </div>
        </footer>
    );
};

export default Footer;
