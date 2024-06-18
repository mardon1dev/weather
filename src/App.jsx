import './App.css'
import { WeatherProvider } from "./Context/Context";
import ShowInfo from './ShowInfo/ShowInfo';




function App() {

  return (
    <WeatherProvider>
      <ShowInfo />
    </WeatherProvider>
  )
}

export default App
