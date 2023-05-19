import { Link } from "react-router-dom";
import DialpadIcon from '@mui/icons-material/Dialpad';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';

const MenuBar = () => {
  return (
    <div className="menuBar">
      <div className="menuItems">
      <AddIcCallIcon/>
      <p><Link to="/log" className="text-light text-decoration-none">
        
        Logs
      </Link></p>
        
      </div>
      <div className="menuItems ps-3 ">
      <DialpadIcon/>

      <p><Link to="/" className="text-light text-decoration-none">
      Dial
        
      </Link></p>
      </div>
      <div className="menuItems">
      <LocalLibraryIcon/>
      <p><Link to="/contact" className="text-light  text-decoration-none">
        
        contacts
      </Link></p>
      </div>
    </div>
  );
};

export default MenuBar;
