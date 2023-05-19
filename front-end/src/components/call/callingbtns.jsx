import PhonePausedIcon from '@mui/icons-material/PhonePaused';
import VoicemailIcon from '@mui/icons-material/Voicemail';
import NotesIcon from '@mui/icons-material/Notes';
import VideoCameraFrontIcon from '@mui/icons-material/VideoCameraFront';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';
import ContactEmergencyIcon from '@mui/icons-material/ContactEmergency';
import { Link } from 'react-router-dom';
const CallingButtons = () => {
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
    <Link to="/"><button className='btn btn-danger m-2'>End</button></Link>
    </div>
  )
}

export default CallingButtons