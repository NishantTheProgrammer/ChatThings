import jwtDecode from 'jwt-decode';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment, faGamepad, faHistory, faNewspaper, faUserFriends } from '@fortawesome/free-solid-svg-icons'


import Logout from '../../containers/Auth/Logout';
import classes from './NavBar.module.scss';
import userFallbackImage from './userFallback.png';

const NavBar = props => {
    let user;
    try {
        user = jwtDecode(localStorage.getItem('access_token'));
    }
    catch { return <Logout />; }

    return (
        <nav className={classes.container}>
            <aside className={classes.logo}><Link to="/">ChatThings</Link></aside>
            <ul>
                <li><FontAwesomeIcon icon={faNewspaper} /> <span>News</span></li>
                <li><FontAwesomeIcon icon={faComment} /> <span>Chat</span></li>
                <li><FontAwesomeIcon icon={faHistory}/> <span>Story</span></li>
                <li><FontAwesomeIcon icon={faUserFriends}/> <span>Friends</span></li>
                <li><FontAwesomeIcon icon={faGamepad}/> <span>Games</span></li>
            </ul>
            <aside className={classes.profile}>
                <p>{user.username}</p>
                <img src={"http://user.img"} alt='user' onError={e => {e.target.src = userFallbackImage}} />
            </aside>
        </nav>
    );
}
export default NavBar;