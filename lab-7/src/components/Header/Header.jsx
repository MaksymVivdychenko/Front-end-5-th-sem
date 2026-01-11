import React, { useState } from 'react';
import './Header.css';

const Header = () => {
    // Стан для першого елемента (Header)
    const [isHeaderActive, setIsHeaderActive] = useState(false);
    // Стан для другого елемента (Date)
    const [isDateActive, setIsDateActive] = useState(false);

    return (
        <header>
            <h2
                id="header-name"
                onClick={() => setIsHeaderActive(!isHeaderActive)}
                className={isHeaderActive ? "active-header" : ""}
            >
                Вівдиченко Максим Сергійович
            </h2>

            <p
                id="birth-date"
                onClick={() => setIsDateActive(!isDateActive)}
                className={isDateActive ? "active-date" : ""}
            >
                Дата і місце народження: 19.08.2006, м. Охтирка
            </p>

            <p>Освіта: Охтирський ліцей №2, НТУУ "КПІ"</p>
        </header>
    );
};

export default Header;