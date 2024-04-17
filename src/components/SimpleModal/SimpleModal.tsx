import "./SimpleModal.css";

function SimpleModal({ closeModal }) {
    return (
        <div className="modal">
            <div className="modal-wrapper">
                <div className="modal-cotalog">
                    <h1>Коталог товаров</h1>
                    <button className="cotalog-btn">Смартфоны</button>
                    <button className="cotalog-btn">Ноутбуки</button>
                    <button className="cotalog-btn">Планшеты</button>
                    <button className="cotalog-btn"> Умные Часы</button>
                    <button className="cotalog-btn"> Игровые приставки</button>
                    <button className="cotalog-btn">Наушники</button>
                    <button className="cotalog-btn">Портативные колонки</button>
                    <button className="cotalog-btn">Маниторы </button>
                    <button className="cotalog-btn">Принтеры и сканеры </button>
                    <button className="cotalog-btn">
                        Планшеты и электронные книги
                    </button>
                    <button className="cotalog-btn">
                        Корпуса и блоки питания
                    </button>
                    <button className="cotalog-btn">Аксессуары</button>
                </div>
            </div>
        </div>
    );
}

export default SimpleModal;
