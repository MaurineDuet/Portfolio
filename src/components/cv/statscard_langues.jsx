//Style
import '../../styles/cv/card.scss'

function Language() {
    
    return (
        <div className='cv_card_details'>

            <div className='cv_card_title cv_card_skills'>
                <h3>Langues IRL</h3>
                <ul>
                    <li>
                        <progress id="strong_skills" max="100" value="100"></progress>
                        <label for="strong_skills">Français - langue maternelle</label>
                    </li>
                    <li>
                        <progress id="good_skills" max="100" value="90"></progress>
                        <label for="good_skills">Anglais - C1/C2</label>
                    </li>
                    <li>
                        <progress id="average_skills" max="100" value="70"></progress>
                        <label for="average_skills">Coréen - B2</label>
                    </li>
                    <li>
                        <progress id="weak_skills" max="100" value="25"></progress>
                        <label for="weak_skills">Allemand - A2/B1</label>
                    </li>
                </ul>
            </div>

            <div className='cv_card_title cv_card_skills'>
                <h3>Langages de code</h3>
                <ul>
                    <li>
                        <progress id="strong_skills" max="100" value="90"></progress>
                        <label for="strong_skills">HTML, CSS, SCSS</label>
                    </li>
                    <li>
                        <progress id="good_skills" max="100" value="80"></progress>
                        <label for="good_skills">JavaScript Vanilla, React, json</label>
                    </li>
                    <li>
                        <progress id="average_skills" max="100" value="40"></progress>
                        <label for="average_skills">NodeJS côté server</label>
                    </li>
                </ul>
            </div>

        </div>
    )
}

export default Language