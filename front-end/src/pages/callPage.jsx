import { useSelector } from "react-redux"
import Timer from "../components/call/timer"
import CallingButtons from "../components/call/callingbtns"


const CallPage = () => {

    const num=useSelector((state)=>state.dial)
  return (
    <div className="Pages">
       <div className="callingPage">
       <h3>{num}</h3>
       <Timer/>
       <CallingButtons/>
       

       </div>
    </div>
  )
}

export default CallPage