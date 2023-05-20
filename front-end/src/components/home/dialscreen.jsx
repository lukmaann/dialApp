import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

const DialScreen = () => {
  const navigate=useNavigate()

    const number=useSelector((state)=>state.dial)
    const handleClick=()=>{
      navigate('/addcontact')

    }
  return (
    <div className="dialScreen">
    <button onClick={handleClick} className="btn btn-dark rounded-0">Add</button>
        <input readOnly={true} value={number}/>
    </div>
  )
}

export default DialScreen