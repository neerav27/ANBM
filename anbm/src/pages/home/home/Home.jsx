import Leftsidebar from "../../../components/leftsidebar/Leftsidebar";
import Rightsidebar from "../../../components/rightsidebar/Rightsidebar";
import Feed from '../../../components/mainfeed/Feed';
import NavBar from '../../../components/NavBar/NavBar';
import "./home.css"
import Darkmode from "darkmode-js";

new Darkmode().showWidget();
const options = {
  bottom: "64px", // default: '32px'
  right: "unset", // default: '32px'
  left: "32px", // default: 'unset'
  time: "0.1s", // default: '0.3s'
  mixColor: "#fff", // default: '#fff'
  backgroundColor: "##FF5733", // default: '#fff'
  buttonColorDark: "#100f2c", // default: '#100f2c'
  buttonColorLight: "#FF5733", // default: '#fff'
  saveInCookies: false, // default: true,
  label: "🌓", // default: ''
  autoMatchOsTheme: true, // default: true

  
};


export default function Home() {
    return (
        <>
            <NavBar />
            <div className="homeContainer">
                <Leftsidebar />
                <Feed />
                <Rightsidebar />
            </div>
        </>
    );
}
