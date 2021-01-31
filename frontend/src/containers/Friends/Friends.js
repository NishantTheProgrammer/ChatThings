import { Link } from 'react-router-dom';
import classes from './Friends.module.scss';

const Home = props => {

    return (
        <div className={classes.container}>
            <h1>Friends</h1>
            <h1>
                <Link to="/logout">logout</Link>
            </h1>
        </div>
    );
}
export default Home;