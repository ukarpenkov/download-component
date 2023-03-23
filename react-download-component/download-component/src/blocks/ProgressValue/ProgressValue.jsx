import './ProgressValue.css'

const ProgressValue = ({ state }) => {
    return <h1>
        {state.progress}%
    </h1>
}

export default ProgressValue