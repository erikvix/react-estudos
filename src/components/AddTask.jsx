import React, { useState } from 'react';

import "./AddTask.css"
import Button from './Button';

const Add = ( {TaskAdd}) => {
    const [inputdata, setinputdata] = useState('');

    const handleinputchange = (e) =>{
        setinputdata(e.target.value);
    };
    const handleinputchange = () =>{
        TaskAdd(inputdata)
    }
    return (
        <div className='addtask-container'>
            < input type="text" className='add-input' onChange={handleinputchange}/>
            <div className="add-button">
            <Button>Adicionar</Button>
            </div>
        </div>
     );
}
 
export default Add;