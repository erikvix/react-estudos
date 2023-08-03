import React from 'react';

import "./AddTask.css"
import Button from './Button';

const Add = () => {
    return (
        <div className='addtask-container'>
            < input type="text" className='add-input' />
            <div className="add-button">

            <Button>Adicionar</Button>
            </div>
        </div>
     );
}
 
export default Add;