import React, { useState, useEffect } from 'react';

import './styles.scss';
import arrowLeft from '../../../assets/epiccoders/arrowleft.svg';
import arrowRight from '../../../assets/epiccoders/arrowright.svg';

export default function ContainerSlider({ children }) {
    const [activeIndex, setActiveIndex] = useState(0);
    const [slideDone, setSlideDone] = useState(true);
    const [timeID, setTimeID] = useState(null);

    useEffect(() => {
        if (slideDone) {
            setSlideDone(false);
            setTimeID(
                setTimeout(() => {
                    slideNext();
                    setSlideDone(true);
                }, 5000),
            );
        }
    }, [slideDone]);

    const slideNext = () => {
        setActiveIndex(val => {
            if (val >= children.length - 1) {
                return 0;
            } else {
                return val + 1;
            }
        });
    };

    const slidePrev = () => {
        setActiveIndex(val => {
            if (val <= 0) {
                return children.length - 1;
            } else {
                return val - 1;
            }
        });
    };

    const AutoPlayStop = () => {
        if (timeID > 0) {
            clearTimeout(timeID);
            setSlideDone(false);
        }
    };

    const AutoPlayStart = () => {
        if (!slideDone) {
            setSlideDone(true);
        }
    };

    return (
        <div>
            <div
                className="container__slider"
                onMouseEnter={AutoPlayStop}
                onMouseLeave={AutoPlayStart}
            >
                {children.map((item, index) => {
                    return (
                        <div
                            className={'slider__item slider__item-active-' + (activeIndex + 1)}
                            key={index}
                        >
                            {item}
                        </div>
                    );
                })}
            </div>

            <button
                className="slider__btn-prev"
                onClick={e => {
                    e.preventDefault();
                    slidePrev();
                }}
            >
                <img src={arrowLeft}></img>
            </button>
            <button
                className="slider__btn-next"
                onClick={e => {
                    e.preventDefault();
                    slideNext();
                }}
            >
                <img src={arrowRight}></img>
            </button>
        </div>
    );
}
