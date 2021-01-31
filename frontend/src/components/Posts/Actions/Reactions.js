import {
    faAngry,
    faGrinHearts,
    faGrinSquintTears,
    faSadTear,
    faTimesCircle
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import classes from './Actions.module.scss';

const Reactions = props => {
    return (
        <>
            <div style={{color: '#2ae4f2'}}>
                <FontAwesomeIcon icon={faGrinHearts}/>
            </div>
            <div style={{color: '#ffdc46'}}>
                <FontAwesomeIcon icon={faGrinSquintTears}/>
            </div>
            <div style={{color: '#faaeae'}}>
                <FontAwesomeIcon icon={faSadTear}/>
            </div>
            <div style={{color: '#f87b18'}}>
                <FontAwesomeIcon icon={faAngry}/>
            </div>
            <div className={classes.close_btn} onClick={() => props.setActionType()}>
                <FontAwesomeIcon icon={faTimesCircle}/>
            </div>
        </>
    );
}
export default Reactions;