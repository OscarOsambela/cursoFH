import React from 'react'
import NotesAppBar from './NotesAppBar'

const NoteScreen = () => {
    return (
        <div>
            <div className='notes__main-content'>
                <NotesAppBar/>
                <div className='notes__content'>
                    <form>
                        <input
                            type="text"
                            placeholder='Save awesome title'
                            className='notes__title-input'
                            autoComplete='off'
                        />
                        <textarea placeholder='What happened today' className='notes__textarea'>
                        </textarea>
                        <div className='notes__image'>
                            <img src='https://i.pinimg.com/736x/25/e0/f1/25e0f19870cedd384111c531b2bf812b.jpg' alt='background'/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default NoteScreen
