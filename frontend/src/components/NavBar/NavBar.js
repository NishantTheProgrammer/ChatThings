import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment, faGamepad, faHistory, faNewspaper, faPowerOff, faUserCog, faUserFriends } from '@fortawesome/free-solid-svg-icons'


import logout from '../../containers/Auth/logout';
import classes from './NavBar.module.scss';
import axios from '../../axios';
import UserImage from '../UserImage';

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
            if(error.response.status === 401) {
                console.log(props.history.push('/login'))
            }
        })
    }, [])

    return (
        <nav className={classes.container}>
            <aside className={classes.logo}><Link to="/">ChatThings</Link></aside>
            <ul>
                <li><NavLink activeClassName={classes.active} to="/" exact ><FontAwesomeIcon icon={faNewspaper} /> <span>News</span></NavLink></li>
                <li><NavLink activeClassName={classes.active} to="/Chat" ><FontAwesomeIcon icon={faComment} /> <span>Chat</span></NavLink></li>
                <li><NavLink activeClassName={classes.active} to="/Story" ><FontAwesomeIcon icon={faHistory}/> <span>Story</span></NavLink></li>
                <li><NavLink activeClassName={classes.active} to="/Friends" ><FontAwesomeIcon icon={faUserFriends}/> <span>Friends</span></NavLink></li>
                <li><NavLink activeClassName={classes.active} to="/Games" ><FontAwesomeIcon icon={faGamepad}/> <span>Games</span></NavLink></li>
            </ul>
            <aside className={classes.profile}>
                <p>{user.username}</p>
                <UserImage src={`http://192.168.43.122:8000${user.picture}`} alt='user' />
                <Link to="/profile" className={classes.profile_btn}><FontAwesomeIcon icon={faUserCog}/></Link>
                <Link to="/logout" className={classes.logout_btn}><FontAwesomeIcon icon={faPowerOff}/></Link>
            </aside>
        </nav>
    );
}
export default NavBar;