import React from 'react'

const Small = React.memo(({value}) => {

    console.log('llamada del componente Small');
    return (
        <small>
            {value}
        </small>
    )
})

export default Small
