import React, { Children } from 'react'

const Board = () => {
    const drop = (e)=>{
        e.preventDefault();
        const card_id = e.dataTransfer.getData
    }

    return (
        <div>
            {...Children}
        </div>
    )
}

export default Board
