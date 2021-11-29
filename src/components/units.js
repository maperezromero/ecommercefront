import minus from '../images/icon-minus.svg'
import plus from '../images/icon-plus.svg'
import { valuesContext } from '../App'
import { useContext } from 'react';

export const Units = () =>{
    const { units, setUnits } = useContext(valuesContext);
    
    const handleClick = (value) =>{
        (units>0 && value===-1) || value===1? setUnits(units+value) : setUnits(0);
    }

    return(
        <div className="units"> 
            <img src={minus} alt="minus" className="minus" onClick={()=>handleClick(-1)}/>
            <h2>
                {units}
            </h2>
            <img src={plus} alt="plus" className="plus" onClick={()=>handleClick(1)}/>

        </div>
    )
}