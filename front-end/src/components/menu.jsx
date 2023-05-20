import { Link, useNavigate } from "react-router-dom";
import DialpadIcon from '@mui/icons-material/Dialpad';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';

const MenuBar = () => {
  const navigate=useNavigate();
  return (
    <div className="menuBar">
      <div className="menuItems">
      <button className="btn btn-dark" onClick={()=>navigate('/log')}> <AddIcCallIcon/></button>
      <p><Link to="/log" className="text-light text-decoration-none">
        
        Logs
      </Link></p>
        
      </div>
      <div className="menuItems ps-3 ">
      <button className="btn btn-dark" onClick={()=>navigate('/')}> <DialpadIcon/></button>


      <p><Link to="/" className="text-light text-decoration-none">
      Dial
        
      </Link></p>
      </div>
      <div className="menuItems">
      <button className="btn btn-dark" onClick={()=>navigate('/contact')}> <LocalLibraryIcon/></button>

      <p><Link to="/contact" className="text-light  text-decoration-none">
        
        contacts
      </Link></p>
      </div>
    </div>
  );
};

export default MenuBar;
