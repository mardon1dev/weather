import './App.css'
import { WeatherProvider } from "./Context/Context";
import Header from './Header/Header';
import ShowInfo from './ShowInfo/ShowInfo';




function App() {

  return (
    <WeatherProvider>
      <Header />
      <ShowInfo />
    </WeatherProvider>
  )
}

export default App
