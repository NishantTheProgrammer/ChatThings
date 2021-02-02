import QrReader from 'react-qr-reader';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQrcode, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import classes from './Friends.module.scss';
const Friends = props => {
    const [isBarCode, setIsBarCode] = useState(false);


    return(
        <div className={classes.container}>
            <div className={classes.buttons}>
                <form style={{color: '#2ae4f2'}} >
                        <input 
                            type="text" 
                            placeholder="Search..." />
                </form>
                <div
                    style={{maxWidth: '5rem', color: isBarCode ? 'red': 'white'}}
                    onClick={() => setIsBarCode(current => !current)}
                    title={isBarCode ? "Close BarCode" : "Show BarCode"} >
                    <FontAwesomeIcon icon={isBarCode ? faTimesCircle : faQrcode} />
                </div>
            </div>
            {isBarCode && (
                <div>
                <QrReader
                  delay={300}
                  facingMode='environment'
                  onError={error => console.log(error)}
                  onScan={data => {
                      if(data) {
                        props.history.push(`/users/${data}`);
                      }
                  }}
                  style={{ width: '100%' }}
                />
              </div>
            )}
        </div>
    )
}
export default Friends;
