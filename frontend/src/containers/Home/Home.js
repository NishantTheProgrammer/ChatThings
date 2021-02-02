import Posts from '../../components/Posts/Posts';
import classes from './Home.module.scss';

const Home = props => {

    return (
        <div className={classes.container}>
            <Posts />
        </div>
    );
}
export default Home;