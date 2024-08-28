import React, { useState, useCallback } from 'react';
import debounce from 'lodash/debounce';

const ImageSlider = () => {
  const [sliderValue, setSliderValue] = useState(50);
  const [imageSize, setImageSize] = useState(300);

  // Використовуємо useCallback для створення мемоізованої версії функції,
  // щоб вона не створювалася заново при кожному рендері
  const debouncedResize = useCallback(
    debounce((value) => {
      setImageSize(value * 3); // Змінюємо розмір зображення відповідно до значення слайдера
    }, 300), // 300 мс затримка
    []
  );

  const handleSliderChange = (event) => {
    const value = parseInt(event.target.value);
    setSliderValue(value);
    debouncedResize(value);
  };

  return (
    <div className="slider max-w-md mx-auto p-4">
      <input
        type="range"
        min="1"
        max="100"
        value={sliderValue}
        onChange={handleSliderChange}
        className="slider__input w-full"
      />
      <img
        src={`https://via.placeholder.com/${imageSize}x${imageSize}`}
        alt="Resizable placeholder"
        className="slider__image block mx-auto mt-5 max-w-full"
        style={{ width: `${imageSize}px`, height: `${imageSize}px` }}
      />
    </div>
  );
};

export default ImageSlide;



const box = document.getElementById('box');

const moveBox = (e) => {
    box.style.left = `${e.clientX - 25}px`;
    box.style.top = `${e.clientY - 25}px`;
};

const debouncedMoveBox = _.debounce(moveBox, 100);

document.addEventListener('mousemove', debouncedMoveBox);