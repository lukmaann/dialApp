import { useDispatch } from "react-redux";
import { addNumber, removeNumber } from "../../store/slices/dialSlice";
import BackspaceIcon from '@mui/icons-material/Backspace';

import { useNavigate } from "react-router-dom";


const DialPad = () => {
  const navigate=useNavigate();
const dispatch=useDispatch();
function addNum(e){
  const {value}=e.target
  dispatch(addNumber(value))
  
}
function removenum(){
  dispatch(removeNumber())
}
function erasenum(){
  navigate('/call')

 
}

  return (
    <div className="dialPad">
      <button className="btn btn-dark rounded-0" onClick={addNum} value={1} >1</button>
      <button className="btn btn-dark rounded-0" onClick={addNum} value={2} >2</button>
      <button className="btn btn-dark rounded-0" onClick={addNum} value={3} >3</button>
      <button className="btn btn-dark rounded-0" onClick={addNum} value={4} >4</button>
      <button className="btn btn-dark rounded-0" onClick={addNum} value={5} >5</button>
      <button className="btn btn-dark rounded-0" onClick={addNum} value={6} >6</button>
      <button className="btn btn-dark rounded-0" onClick={addNum} value={7} >7</button>
      <button className="btn btn-dark rounded-0" onClick={addNum} value={8} >8</button>
      <button className="btn btn-dark rounded-0" onClick={addNum} value={9} >9</button>
      <button className="btn btn-dark rounded-0" onClick={removenum}  ><BackspaceIcon/></button>
      <button className="btn btn-dark rounded-0" onClick={addNum} value={0} >0</button>
      
      <button className=" btn-dark btn rounded-0 " onClick={erasenum} >Call</button>
      
    </div>
  );
};

export default DialPad;
