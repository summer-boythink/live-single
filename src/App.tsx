import { Button } from 'antd';
import { Link } from "react-router-dom";
import './App.css'

function App() {
  return (
    <div className="App">
      <Button type='primary'><Link to={"/watch"}>看直播</Link></Button>
      <Button type='default'><Link to={"/playself"}>自己直播</Link></Button>
    </div>
  )
}

export default App
