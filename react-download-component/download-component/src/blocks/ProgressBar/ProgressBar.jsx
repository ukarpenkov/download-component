import { useContext, useEffect, useReducer } from 'react'
import './ProgressBar.css'
import { Context } from '../../context'

const ProgressBar = ({ state }) => {
    const { dispatch } = useContext(Context)


    useEffect(() => {
        const progressBarInterval = setInterval(() => {
            if (state.progress < 100 && state.isLoad) {
                console.log(state.progress);
                dispatch({
                    type: 'DOWNLOAD_PROGRESS'
                })
            }
            else {
                clearInterval(progressBarInterval)
            }
        }, 100)
        return () => clearInterval(progressBarInterval)
    }, [state.progress, state.isLoad])



    return <div className='progress-bar-container'>
        <div className='progress-bar' style={{ width: `${state.progress}%` }}>
        </div>

    </div>
}

export default ProgressBar