import React from 'react';
import './App.css';

// Імпорт компонентів згідно з новими вимогами
import Header from './components/Header/Header';
import Content from './components/Content/Content';
import Image from './components/Image/Image';
import GoodsGallery from './components/GoodsGallery/GoodsGallery'; // Галерея з другого завдання

function App() {
    return (
        <div className="app-container">
            <Header />

            <main>
                <Content />
                <Image />
                <GoodsGallery />
            </main>
        </div>
    );
}

export default App;