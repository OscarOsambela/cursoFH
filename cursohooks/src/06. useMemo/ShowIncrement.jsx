import React from 'react'

const ShowIncrement = React.memo(({increment}) => {
    console.log('increment generado');
    return (
        <div>
            <button className='btn btn-primary' onClick={()=>{
                increment(5);
            }}>Incrementar</button>
        </div>
    )
})

export default ShowIncrement