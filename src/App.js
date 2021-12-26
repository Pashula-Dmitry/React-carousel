import {useState, useEffect} from "react";
import kura1 from './assets/images/Kura.jpg';
import kura2 from './assets/images/kura2.jpg';
import kura3 from './assets/images/kura3.jpg';
import kura4 from './assets/images/kura4.jpg';

import './App.css';


function App() {
    const [indexActive, setIndexActive] = useState(0);
    const cards = [
        {id: 1, image: kura1},
        {id: 2, image: kura2},
        {id: 3, image: kura3},
        {id: 4, image: kura4},
    ];

    useEffect(() => {
        setTimeout(() => {
            setIndexActive((indexActive + 1) % cards.length);
        }, 2000)
    }, [indexActive]);


    const mod = (n, lengthArr) => {
        let result = n % lengthArr;
        return result >= 0 ? result: result + lengthArr;
    }

    const generateClassName = (idx, indexLeft, indexRight) => {
        if(idx === indexActive) {
            return 'card card--active';
        } else if(idx === indexRight) {
            return  'card card--right';
        } else if(idx === indexLeft) {
            return 'card card--left';
        } else {
            return 'card';
        }
    };
  return (
    <div className="App">
        <div className="carousel">
            {
                cards.map((item, i) => {
                    const indexLeft  = mod(indexActive-1, cards.length);
                    const indexRight = mod(indexActive + 1, cards.length);
                    const className  = generateClassName(i, indexLeft, indexRight);
                    return (<img key={item.id} src={item.image} alt="non found" className={className}/>)
                })
            }
        </div>
    </div>
  );
}

export default App;
