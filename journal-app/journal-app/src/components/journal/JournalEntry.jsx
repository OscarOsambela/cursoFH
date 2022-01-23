import React from 'react'

const JournalEntry = () => {
    return (
        <div className='journal__entry pointer'>
            <div    
                className='journal__entry-picture'
                style={{
                    backgroundSize: 'cover',
                    backgroundImage: 'url(https://i.pinimg.com/736x/25/e0/f1/25e0f19870cedd384111c531b2bf812b.jpg)'
                }}
            ></div>
            <div className='journal__entry-body'>
                <p className='journal__entry-title'>
                    Un nuevo día
                </p>
                <p className='journal__entry-content'>
                    Lorem ipsum dek eekda defr09sjda qdkfw  dolor.
                </p>
            </div>
            <div className='journal__entry-date-box'>
                <span>Monday</span>
                <h4>28</h4>
            </div>
        </div>
    )
}

export default JournalEntry
