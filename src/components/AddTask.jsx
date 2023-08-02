import React from 'react';

import "./AddTask.css"
import Button from './Button';

const Add = () => {
    return (
        <div className='addtask-container'>
            < input type="text" className='add-input' />
            <Button>Adicionar</Button>
        </div>
     );
}
 
export default Add;