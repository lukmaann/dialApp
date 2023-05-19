import { useSelector } from "react-redux"

const DialScreen = () => {
    const numbers=useSelector((state)=>state.dial)
  return (
    <div className="dialScreen">
        <input value={numbers}/>
    </div>
  )
}

export default DialScreen