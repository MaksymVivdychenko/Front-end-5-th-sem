import React, { useState } from 'react';
import './Image.css';

function Image() {
    const [imgSrc, setImgSrc] = useState("");
    const [inputValue, setInputValue] = useState("");
    const [imgWidth, setImgWidth] = useState(300);

    const handleAdd = () => {
        setImgSrc(inputValue);
    };

    const handleRemove = () => {
        setImgSrc("");
        setInputValue("");
        setImgWidth(300);
    };

    const handleIncrease = () => {
        if (imgSrc) setImgWidth(prev => prev + 50);
    };

    const handleDecrease = () => {
        if (imgSrc) {
            if (imgWidth > 100) setImgWidth(prev => prev - 50);
            else alert("Мінімальний розмір картинки досягнуто");
        }
    };

    return (
        <div className="image-section">
            <div className="buttons-panel">
                <button onClick={handleIncrease}>Збільшити</button>
                <button onClick={handleDecrease}>Зменшити</button>
                <button onClick={handleRemove}>Видалити</button>
                <button onClick={handleAdd}>Додати</button>

                <input
                    type="text"
                    placeholder="URL картинки"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                />
            </div>

            {imgSrc && (
                <div className="dynamic-image-container">
                    <img
                        src={imgSrc}
                        alt="Preview"
                        style={{ width: `${imgWidth}px` }}
                    />
                </div>
            )}
        </div>
    );
}

export default Image;