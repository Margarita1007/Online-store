import React from "react";
import './multiRangeSlider.css'
import classnames from "classnames";
import PropTypes from "prop-types";
import { useState } from "react";
import { useRef } from "react";
import { useCallback, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks";
import { setPrice } from "../../components/Main/StateSlice";
import { info_cards } from "../../components/Main/Cards/info-cards";

const MultiRangeSlider: React.FC = () => {
  
  //const stateCards = useAppSelector(state => state.cards.filters.price);
  let sortCardsPrice = [...info_cards]
  sortCardsPrice.sort((a, b) => a.price - b.price);
  const min = sortCardsPrice[0].price;
  const max = sortCardsPrice[sortCardsPrice.length - 1].price;

  const statePrice = useAppSelector(state => state.cards.filters.price);
  const minInitial = statePrice.min;
  const maxInitial = statePrice.max;
  // const minPrice = Math.floor(sortCardsPrice[0].price);
  // const maxPrice = Math.ceil(sortCardsPrice[sortCardsPrice.length - 1].price);
  
  const [minVal, setMinVal] = useState<number>(minInitial);
  const [maxVal, setMaxVal] = useState<number>(maxInitial);
  const minValRef = useRef<any>(null);
  const maxValRef = useRef<any>(null);
  const range = useRef<any>(null);
  const dispatch = useAppDispatch();


  console.log('initial', minInitial, maxInitial);
  console.log('range', range);

  const getPercent = useCallback((value: number) => {
    return Math.round(((value - min) / (max - min)) * 100);
  }, [min, max]);

  // const rangeInit = document.getElementById('range') as HTMLElement;
  // console.log(rangeInit)



  
  // rangeInit.style.width = `${getPercent(maxInitial) - getPercent(minInitial)}%`;
  // rangeInit.style.left = `${getPercent(minInitial)}%`;
  //rangeInit.style.width = `${getPercent(maxInitial) - getPercent(minInitial)}%`;

  function changeMin(event: React.ChangeEvent<HTMLInputElement>) {
    const value = Math.min(+event.target.value, maxVal - 1);
    setMinVal(value);
    event.target.value = value.toString();
    dispatch(setPrice({min: value, max: maxVal}))
  }

  function changeMax(event: React.ChangeEvent<HTMLInputElement>) {
    const value = Math.max(+event.target.value, minVal + 1);
    setMaxVal(value);
    event.target.value = value.toString();
    dispatch(setPrice({min: minVal, max: value}))
  }

  function changeRangeMin() {
    if (maxValRef.current) {
      const minPercent = getPercent(minVal);
      const maxPercent = getPercent(+maxValRef.current.value); 
  
      if (range.current) {
        range.current.style.left = `${minPercent}%`;
        range.current.style.width = `${maxPercent - minPercent}%`;
      } 
    }
    // } else {
    //   const rangeInit = document.getElementById('range') as HTMLElement;
    //   rangeInit.style.left = `${getPercent(minInitial)}%`;
    //   rangeInit.style.width = `${getPercent(maxInitial) - getPercent(minInitial)}%`;
    // }
  }

  function changeRangeMax() {
    if (minValRef.current) {
      const minPercent = getPercent(+minValRef.current.value);
      const maxPercent = getPercent(maxVal);
  
      if (range.current) {
       range.current.style.width = `${maxPercent - minPercent}%`;
      } 
    }
    // } else {
    //   const rangeInit = document.getElementById('range') as HTMLElement;
    //   console.log('nen')
    //   rangeInit.style.width = `${getPercent(maxInitial) - getPercent(minInitial)}%`;
    // }
  }

  // changeRangeMin();
  // changeRangeMax();

  useEffect(() => {
    changeRangeMin();
  }, [minVal, getPercent]);

  useEffect(() => {
    changeRangeMax()
  }, [maxVal, getPercent]);

//   useEffect(() => {
//     onChange({ min: minVal, max: maxVal });
// }, [minVal, maxVal, onChange]);

  return (
    <>
      <input
        type="range"
        min={min}
        max={max}
        value={minVal}
        ref={minValRef}
        onChange={(event) => changeMin(event)}
          //console.log('input value min', value)
        className={classnames("thumb thumb--zindex-3", {
          "thumb--zindex-5": minVal > max - 100
        })}
      />
      <input
        type="range"
        min={min}
        max={max}
        value={maxVal}
        ref={maxValRef}
        onChange={(event) => changeMax(event)}
        className="thumb thumb--zindex-4"
      />
      <div className="slider">
        <div className="slider__track" />
        <div id="range" ref={range} className="slider__range" style={{width: `${getPercent(maxInitial) - getPercent(minInitial)}%`, left:  `${getPercent(minInitial)}%`}}/>
        <div className="slider__left-value">{minVal}</div>
        <div className="slider__right-value">{maxVal}</div>
      </div>
    </>
  );
};
    
// MultiRangeSlider.propTypes = {
//   min: PropTypes.number.isRequired,
//   max: PropTypes.number.isRequired,
//   // onChange: PropTypes.func.isRequired
// };
    

    export default MultiRangeSlider;