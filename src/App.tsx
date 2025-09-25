import './App.css'
import Button from './components/Button'
import CounterPage from './components/CounterPage'
import StopWatchTimer from './components/StopWatchTimer'

function App() {
  return (
    <>
      <div style={{display: 'flex', justifyContent: 'space-evenly', width: '300px'}}>
        <Button color="red" label="Red" />
        <Button color="green" label="Green" />
        <Button color="blue" label="Blue" />
      </div>

      <CounterPage />
      <StopWatchTimer />
    </>
  )
}

export default App
