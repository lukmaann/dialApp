import DialPad from "../components/home/dialPad"
import DialScreen from "../components/home/dialscreen"

const HomePage = () => {
  return (
    <div className="Pages">
    <div className="homePageDiv">
      <DialScreen/>
    </div>
    <div className="homePageDiv2">
      <DialPad/>
    </div>

    
       </div>
  )
}

export default HomePage