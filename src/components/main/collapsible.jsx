import { useState } from 'react'

import '../../styles/main/collapsible.scss'

function Collapsible(props) {
      const [open, setOPen] = useState(false)

      /* Collapse is closed initially */

      const toggle = () => {
            setOPen(!open)
      }

      const label = props.label

      /* Rendu de la logique du collapse */

      return (
            <div className="collapsible">

                  <div className='collapsible_title' onClick={toggle}>
                        <h3 >
                              {' '}
                              {label}
                        </h3>
                        <p>V</p>
                  </div>
                  {open && <div className="toggle">{props.children}</div>}
            </div>
      )
}

export default Collapsible