import "./NavBar.css";
import { Search, Person, Chat, Notifications } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";

export default function NavBar() {

    const { user } = useContext(AuthContext);
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const open =document.getElementById('open');
    const modal_container = document.getElementById('modal_container');
    const close = document.getElementById('close');

    console.log(user.username);
    return (
        <div className="NavBarContainer">
            <div className="NavBarLeft">
                <Link to="/" style={{ textDecoration: "none" }}>
                    <span className="logo">BANd</span>
                </Link>
            </div>
            <div className="NavBarCenter">
                <div className="searchbar">
                    <Search className="searchIcon" />
                    <input placeholder="Search for friends, songs, or artists" className="searchInput" />
                </div>
            </div>
            <div className="NavBarRight">
                <div className="NavBarLinks">
                    <span className="NavBarLink1">
                    <Link to='/share' >
                        <button class="Upload"> Upload</button>
                    </Link>
                    </span>
                                 

                    <Link to='/login' style={{ textDecoration: "none" }}>
                        <span className="NavBarLink"> Logout</span>
                    </Link>
                    <Link to='/register' style={{ textDecoration: "none" }}>
                        <span className="NavBarLink3"> Register</span>
                    </Link>
                </div>
                <div className="NavBarIcons">
                    <div className="NavBarIconItems">
                        <Person />
                        <span className="NavBarIconBadge">1.2k</span>
                    </div>
                    <div className="NavBarIconItems">
                        <Chat />
                        <span className="NavBarIconBadge">657</span>
                    </div>
                    <div className="NavBarIconItems">
                        <Notifications />
                        <span className="NavBarIconBadge">1.0k</span>
                    </div>
                </div>
                <Link to={`/profile/${user.username}`}>
                    <img
                        src={user.profilePicture 
                            ? PF + user.profilePicture
                            : PF + "profile/noAvatar.png"
                        }
                        alt=""
                        className="NavBarImg"
                    />
                </Link>
            </div>
        </div>
    )
}
