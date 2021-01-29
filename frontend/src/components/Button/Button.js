import classes from './Button.module.scss';

const Button = props => {
    return (
        <button className={classes.button} {...props}>{props.children}</button>
    );
}
export default Button;