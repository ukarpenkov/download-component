import { useContext, useState } from 'react';
import './ControlButton.css'
import { Context } from '../../context';

const ControlButton = ({ state }) => {
    const [btnText, setBtnText] = useState('stop')
    const { dispatch } = useContext(Context)

    const buttonHanlder = () => {
        if (state.isLoad === true) {
            setBtnText('start')
            dispatch({
                type: 'STOP'
            })
        }
        else {
            setBtnText('stop')
            dispatch({
                type: 'START'
            })

        }
    }

    return <button className='progress-bar-btn' onClick={() => buttonHanlder()}>
        {btnText}
    </button>
}

export default ControlButton