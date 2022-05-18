import "./NavBar.css";
import { Search, Person, Chat, Notifications } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { useContext, useState, useRef } from "react";
import Popup from "../Popup";
import Share from "../share/Share";
import { PermMedia, Label, Room, EmojiEmotions, Cancel, Notes, MusicNote, LibraryMusic, LeakAdd } from "@material-ui/icons"


export default function NavBar() {
  const handleClick = (e) => {
    e.preventDefault();
    localStorage.clear("user");
  };
  const { user } = useContext(AuthContext);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const [modalOpen, setModalOpen] = useState(false);
    const [buttonPopup, setButtonPopup] = useState(false);
    const [file, setFile] = useState(null);
    const desc = useRef();

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
                        <main>
                            <span onClick={() => setButtonPopup(true)} >
                             Upload
                            </span>
                        </main>
                        <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>

                            <div className="shareTop">
                                <img className="shareProfileImg" src={user.profilePicture ? PF + user.profilePicture : PF + "profile/noAvatar.png"} alt="" />
                                <input
                                    placeholder={"What amazing music would you like to share today,  " + user.username + "?"}
                                    className="shareInput"
                                    ref={desc}
                                />
                            </div>
                            <form className="shareBottom">
                                <li className="shareOptions">
                                    <label htmlFor="file" className="shareOption">
                                        <MusicNote htmlColor="Red" className="shareIcon" />
                                        <span className="shareOptionText">Name</span>
                                        <input
                                            style={{ display: "none" }}
                                            type="file"
                                            id="file"
                                            accept=".png,.jpeg,.jpg"
                                            onChange={(e) => setFile(e.target.files[0])}
                                        />
                                    </label>
                                    <li className="shareOption">
                                        <Person htmlColor="DodgerBlue" className="shareIcon" />
                                        <span className="shareOptionText">Artist</span>
                                    </li>
                                    <li className="shareOption">
                                        <LibraryMusic htmlColor="DarkOrange" className="shareIcon" />
                                        <span className="shareOptionText">Album</span>
                                    </li>
                                    <li className="shareOption">
                                        <LeakAdd htmlColor="Gold" className="shareIcon" />
                                        <span className="shareOptionText">Link</span>
                                    </li>
                                </li>
                                <button className="shareButton" type="submit">
                                    Share
                                </button>
                            </form>
                        </Popup>

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
        
  );
}
