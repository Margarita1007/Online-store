import React from 'react';
import 'rc-slider/assets/index.css';
//import 'rc-tooltip/assets/bootstrap.css';
import Slider from 'rc-slider';
import Range from 'rc-slider'

const PriceSlider: React.FC = () => {
    return (
        <>
        <Slider
            min={0}
            max={100}
            // step={Number}
            // value={Number}
            // orientation={String}
            // reverse={Boolean}
            // tooltip={Boolean}
            // labels={Object}
            // handleLabel={String}
            // format={Function}
            // onChangeStart={Function}
            // onChange={Function}
            // onChangeComplete={Function}
        />
        
        </>
    )
}

// const PriceSlider: React.FC = () => {
//     return (
//         <>
//         <input
//             type='range'
//             name='price-min'
//             min={0}
//             max={10}
//         />
//         <input
//             type='range'
//             name='price-max'
//             min={60}
//             max={100}
//         />
//         </>
//     )
// }

export default PriceSlider