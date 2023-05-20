import Logs from "../components/logs/log"
import { useSelector } from "react-redux"

const LogPage = () => {
  const logs=useSelector(state=>state.log)
  return (
    <div className="Pages">
    {
      logs.slice(0).reverse().map((items,index)=><Logs id={index} num={items}  key={index}/>)
    }

    

    </div>
  )
}

export default LogPage