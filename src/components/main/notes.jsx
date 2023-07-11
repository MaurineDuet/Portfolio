import React from 'react'

import '../../styles/main/notes.scss'

function Notes(props) {
    const noteCount = React.Children.count(props.children) //Initializing count function for 'Notes' children (in this case, a Note)

    return (
        <div className='notes'>

            <div className='notes_title'>
                <h3>Notes</h3>
                <nav>
                    <ul>
                        <li>File</li>
                        <li>Edit</li>
                        <li>View</li>
                        <li>Help</li>
                    </ul>
                </nav>
            </div>

            <div className='notes_main'>
                {props.children}
            </div>

            <div className='notes_footer'>
                <p>{noteCount} notes</p>
            </div>


        </div>
    )
}

export default Notes