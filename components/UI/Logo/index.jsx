import React from 'react';
import {formatRuDate} from "../../../core/utils";

console.log(formatRuDate('2022-11-03T19:04:04.572Z'))


const Logo = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={'100%'}
             fill="currentColor"
             viewBox="0 0 438.6 81.81">
            <g id="Слой_2" data-name="Слой 2">
                <g id="Слой_1-2" data-name="Слой 1">
                    <path
                        d="M61.3,0H0V81.73H20.43V61.3h61.3V81.73h20.43V61.3L91.94,51.08l10.22-10.22V20.43L81.73,0ZM81.73,40.86H20.43V20.43h61.3Z"/>
                    <path
                        d="M178.47,0H137.6L117.17,20.43v61.3H137.6V61.3h61.3V81.73h20.43V20.43L198.9,0ZM198.9,40.86H137.6V20.43h61.3Z"/>
                    <polygon
                        points="295.63 0.08 275.2 0.08 254.77 0.08 234.34 20.52 234.34 40.95 234.34 61.38 234.34 81.81 254.77 81.81 254.77 61.38 275.2 61.38 295.63 61.38 316.07 61.38 316.07 40.95 295.63 40.95 275.2 40.95 254.77 40.95 254.77 20.52 275.2 20.52 295.63 20.52 316.07 20.52 336.5 20.52 336.5 0.08 316.07 0.08 295.63 0.08"/>
                    <polygon
                        points="412.81 61.38 392.37 61.38 371.94 61.38 371.94 40.95 371.94 20.52 371.94 0.08 351.51 0.08 351.51 20.52 351.51 40.95 351.51 61.38 371.94 81.81 392.37 81.81 412.81 81.81 438.6 81.81 438.6 61.38 412.81 61.38"/>
                </g>
            </g>
        </svg>
    );
};

export default Logo;