import PhonePausedIcon from '@mui/icons-material/PhonePaused';
import VoicemailIcon from '@mui/icons-material/Voicemail';
import NotesIcon from '@mui/icons-material/Notes';
import VideoCameraFrontIcon from '@mui/icons-material/VideoCameraFront';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';
import ContactEmergencyIcon from '@mui/icons-material/ContactEmergency';
import {  useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addLog } from '../../store/slices/logSlice';
import { eraseAll } from '../../store/slices/dialSlice';

const CallingButtons = () => {
  const navigate=useNavigate()
  const dispatch=useDispatch();
  const numb=useSelector((state)=>state.dial)

  const handleEnd=(number)=>{
    navigate('/')

    dispatch(addLog(number))
    dispatch(eraseAll())
  }
  return (
    <div className='callingButtonArea'>
    <div className="callingButtons">

        <button className="btn rounded-0 btn-dark"><NotesIcon/></button>
        <button className="btn rounded-0 btn-dark"><VolumeOffIcon/></button>
        <button className="btn rounded-0 btn-dark"><ContactEmergencyIcon/></button>
        <button className="btn rounded-0 btn-dark"><VoicemailIcon/></button>
        <button className="btn rounded-0 btn-dark"><VideoCameraFrontIcon/></button>
        <button className="btn rounded-0 btn-dark"><PhonePausedIcon/></button>

    </div>
  <button className='btn btn-danger m-2' onClick={()=>handleEnd(numb)}>End</button>
    </div>
  )
}

export default CallingButtons