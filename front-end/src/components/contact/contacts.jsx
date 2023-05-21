/* eslint-disable react/prop-types */
import CallIcon from '@mui/icons-material/Call';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addContactNumber } from '../../store/slices/dialSlice';
const Contact = (props) => {
    const dispacth=useDispatch()
    const navigate=useNavigate()

    const call=()=>{
        dispacth(addContactNumber(props.name))
        
        navigate('/call')
    }
  return (
    <div className="contactItems">
    <span>{props.name}</span>
    <span onClick={call} className="btn s"><CallIcon/></span>

    </div>
  )
}

export default Contact