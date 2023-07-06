import {Link} from 'react-router-dom'

export default function NavMenu (){
    return(
        <nav>
            <ul>
                <li> <Link to ="/">Home</Link></li>
                <li> <Link to ="/quiz">Quiz</Link></li>
            </ul>
        </nav>
    )
}