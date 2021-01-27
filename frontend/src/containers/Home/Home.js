import { Link } from 'react-router-dom';
import classes from './Home.module.scss';

const Home = props => {
    return (
        <div className={classes.home}>
            <h1>Home page</h1>
            <h1>
            <Link to="/login">Login</Link>
            </h1>
        </div>
    );
}
export default Home;