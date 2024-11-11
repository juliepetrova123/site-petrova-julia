import React, { useRef } from 'react';
import './style.css';  // Импортируем CSS для стилизации

const ImageCarousel = () => {
    // const carouselRef = useRef(null);

    const images = [
        { src: './images/land-1.jpg', text: 'Альпы — это величественная горная система в Европе, простирающаяся через восемь стран, включая Францию, Швейцарию, Италию и Австрию. Известные своими захватывающими пейзажами, Альпы представляют собой популярное направление для туристов круглый год.' },
        { src: './images/land-2.jpg', text: 'Амазонка — крупнейшая река в мире по объему воды, протекающая через несколько стран Южной Америки, включая Бразилию, Перу и Колумбию. Этот массивный экосистемный комплекс считается "легким дыхания" планеты' },
        { src: './images/land-3.jpg', text: 'Гранд-Каньон — это грандиозная природная формация в штате Аризона, США, широко известная своими впечатляющими пропорциями и яркими цветами. Этот каньон глубиной более 1,6 километра образовался в результате эрозии реки Колорадо и предлагает потрясающие виды' },
        { src: './images/land-4.jpg', text: 'Большой барьерный риф — это самый большой коралловый риф в мире, расположенный у побережья Австралии. Протяженность рифа составляет более 2,300 километров, и он включает тысячи отдельных рифов и островов' },
        { src: './images/land-5.jpg', text: 'Сахара — это самая большая пустыня в мире, занимающая территорию около 9,2 миллиона квадратных километров в Северной Африке. Пустыня известна своими обширными песчаными дюнами, каменистыми плато и засушливыми равнинами' },
    ];

    const [currentIndex, setCurrentIndex] = React.useState(0);

    const nextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return (
        <div className="container carousel-container">
            <h1 className="carousel-title">
                Величайшие природные чудеса
            </h1>
            <div className="container-scroll">
                <button className="scroll-button" onClick={prevImage}>←</button>
                <div className="carousel">
                    <img src={images[currentIndex].src} alt={`Изображение ${currentIndex + 1}`}/>
                    <p>{images[currentIndex].text}</p>
                </div>
                <button className="scroll-button" onClick={nextImage}>→</button>
            </div>
        </div>
    );
};

export default ImageCarousel;