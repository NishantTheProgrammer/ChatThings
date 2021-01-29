import jwtDecode from 'jwt-decode';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment, faGamepad, faHistory, faNewspaper, faUserFriends } from '@fortawesome/free-solid-svg-icons'


import logout from '../../containers/Auth/logout';
import classes from './NavBar.module.scss';
import userFallbackImage from './userFallback.png';
import { useEffect, useState } from 'react';
import axios from '../../axios';

const NavBar = props => {
    const [user, setUser] = useState({});
    
    
    
    useEffect(() => {
        
        axios.get('account/user/')
        .then(res => {
            if(res.status === 200){
                setUser(res.data);
            } else {
                logout();
            }
        })
        .catch(error => {
            console.log(error);
        })
    }, [])

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
                <img src={`http://localhost:8000${user.picture}`} alt='user' onError={e => {e.target.src = userFallbackImage}} />
            </aside>
        </nav>
    );
}
export default NavBar;