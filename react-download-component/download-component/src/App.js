
import { useReducer } from 'react';
import './App.css';
import ControlButton from './blocks/ControlButton/ControlButton';
import ProgressBar from './blocks/ProgressBar/ProgressBar';
import ProgressValue from './blocks/ProgressValue/ProgressValue';
import { Context } from './context';
import progressReducer from './reducer';

function App() {
  const [state, dispatch] = useReducer(progressReducer, {
    progress: 0,
    isLoad: true
  })

  return (
    <Context.Provider value={{ dispatch }}>
      <div className='progress-bar-wrapper'>
        <ProgressValue state={state} />
        <ProgressBar state={state} />
        <ControlButton state={state} />
      </div>
    </Context.Provider>
  )
}

export default App;
