import { Link } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';
import Posts from '../../components/Posts/Posts';
import classes from './Home.module.scss';

const Home = props => {

    return (
        <>
            <NavBar />
            <div className={classes.container}>
                <Posts />
                <h1>Home page</h1>
                <h1>
                    <Link to="/logout">logout</Link>
                </h1>
            </div>
        </>
    );
}
export default Home;