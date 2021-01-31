import { Link } from 'react-router-dom';
import classes from './Story.module.scss';

const Home = props => {

    return (
        <div className={classes.container}>
            <h1>Story</h1>
            <h1>
                <Link to="/logout">logout</Link>
            </h1>
        </div>
    );
}
export default Home;