import { Link } from 'react-router-dom';
import ChatBox from '../../components/ChatBox/ChatBox';
import ChatUsers from '../../components/ChatUsers/ChatUsers';
import classes from './Chat.module.scss';

const Home = props => {

    return (
        <div className={classes.container}>
            <ChatUsers />
            <ChatBox />
        </div>
    );
}
export default Home;