import React, { useEffect, useState } from 'react'

const Message = () => {
    const [cord, setCord] = useState({x: 0, y: 0});
    const {x, y} = cord;

    //ejemplo para no cargar un efecto y desmontarlo. Para no ocupe espacion en la memoria
    useEffect(() => {
        const mouseMove = (e)=>{
            const cord = {x: e.x, y:e.y}
            setCord(cord)
        }
        window.addEventListener('mousemove', mouseMove);
        return () => {
            window.removeEventListener('mousemove', mouseMove);    
        }
    }, [])

    return (
        <div>
            <h2>It´s Ok</h2>
            <p>
                x: {x} y: {y}
            </p>
        </div>
    )
}

export default Message
