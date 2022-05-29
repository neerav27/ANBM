import Leftsidebar from "../../../components/leftsidebar/Leftsidebar";
import Rightsidebar from "../../../components/rightsidebar/Rightsidebar";
import Feed from '../../../components/mainfeed/Feed';
import NavBar from '../../../components/NavBar/NavBar';
import "./home.css"





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
