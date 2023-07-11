//Style
import '../../styles/main/note.scss'
import React from 'react'

function Note(props) {
    const { text, img, className } = props; //Defining needed props for a single note

    return (
        <div className={`note ${className}`}>

            <div className="note_title">
                <p>x</p>
            </div>

            {props.img && <img src={img} alt="" />}

            <div className="note_text">
                <p>{text}</p>
            </div>

        </div>
    )
}

export default Note