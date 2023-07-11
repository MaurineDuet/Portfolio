import '../../styles/main/note.scss'
import React from 'react'

function Note(props) {
    return (
        <div className="note">

            <div className="note_title">
                <p>x</p>
            </div>

            {props.img && <img src={props.img} alt="" />}

            <div className="note_text">
                <p>{props.text}</p>
            </div>

        </div>
    )
}

export default Note