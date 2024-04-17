import "./Header.css";
import logo from "../../assets/image/logo.svg";
import { GoHeart } from "react-icons/go";
import { IoStatsChart } from "react-icons/io5";
import { CiUser } from "react-icons/ci";
import { useState } from "react";
import SimpleModal from "../SimpleModal/SimpleModal";

const Header = () => {
    const [modal, setModal] = useState(false);

    function openModal() {
        setModal(true);
    }

    function closeModal() {
        setModal(false);
    }

    return (
        <div id="header">
            <div className="container">
                <div className="header">
                    <div className="headerImginH4">
                        <img className="logo" src={logo} alt="" />
                        <h4>
                            Лучшие цены <br /> в интернет-магазинах{" "}
                        </h4>
                    </div>
                    <div
                        style={{
                            display: modal ? "block" : "none",
                        }}
                    >
                        <SimpleModal closeModal={closeModal} />
                    </div>
                    <div className="headerButtonInInput">
                        <div className="f">
                            {modal ? (
                                <button
                                    onClick={closeModal}
                                    className="products"
                                >
                                    close
                                </button>
                            ) : (
                                <button
                                    onClick={openModal}
                                    className="products"
                                >
                                    Католог Товаров
                                </button>
                            )}
                        </div>

                        <input type="text" placeholder="Поиск товаров" />
                    </div>

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
