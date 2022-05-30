import "./NavBar.css";
import {
  Search,
  Person,
  Chat,
  Notifications,
  GetApp,
} from "@material-ui/icons";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { useContext, useState, useRef, useEffect } from "react";
import Popup from "../Popup";

import { MusicNote, LibraryMusic, LeakAdd } from "@material-ui/icons";
import { axiosInstance } from "../../config";

export default function NavBar() {
  const [user, setUser] = useState({});
  let navigate = useNavigate();
  const handleClick = () => {
    localStorage.removeItem("user");
  };
  const { user: currentUser } = useContext(AuthContext);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [modalOpen, setModalOpen] = useState(false);
  const [buttonPopup, setButtonPopup] = useState(false);
  const [file, setFile] = useState(null);
  const desc = useRef();
  const url = useRef();
  const friendID = useRef();

  const submitHandler = async (e) => {
    e.preventDefault();
    const newPost = {
      userId: currentUser._id,
      desc: desc.current.value,
      img: url.current.value,
    };
    try {
      await axiosInstance.post("/posts", newPost);
      window.location.reload();
    } catch (err) {}
  };

  const searchHandler = () => {
    const fetchUser = async () => {
      const res = await axiosInstance.get(
        `/users?userId=${friendID.current.value}`
      );
      navigate(`/profile/${res.data.username}`);
      //setUser(res.data);
      //console.log(user);
    };
    fetchUser();
  };
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
          <input
            placeholder="Search for friends, songs, or artists"
            className="searchInput"
            ref={friendID}
          />
          <div className="searchBox">
            <button className="searchParty" onClick={searchHandler}>
              Search
            </button>
          </div>
          <ul className="list"></ul>
        </div>
      </div>
      <div className="NavBarRight">
        <div className="NavBarLinks">
          <span className="NavBarLink1">
            <main>
              <span onClick={() => setButtonPopup(true)}>Upload</span>
            </main>
            <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
              <div className="shareTop">
                <img
                  className="shareProfileImg"
                  src={
                    currentUser.profilePicture
                      ? PF + currentUser.profilePicture
                      : PF + "profile/noAvatar.png"
                  }
                  alt=""
                />
                <input
                  placeholder={
                    "What amazing music would you like to share today,  " +
                    currentUser.username +
                    "?"
                  }
                  className="shareInput"
                  ref={desc}
                />
              </div>
              <form className="shareBottom" onSubmit={submitHandler}>
                <li className="shareOptions">
                  <li className="shareOption">
                    <MusicNote htmlColor="Red" className="shareIcon" />
                    <span className="shareOptionText">Name</span>
                  </li>
                  <li className="shareOption">
                    <Person htmlColor="DodgerBlue" className="shareIcon" />
                    <span className="shareOptionText">Artist</span>
                  </li>
                  <li className="shareOption">
                    <LibraryMusic
                      htmlColor="DarkOrange"
                      className="shareIcon"
                    />
                    <span className="shareOptionText">Album</span>
                  </li>
                  <li className="shareOption">
                    <LeakAdd htmlColor="Gold" className="shareIcon" />

                    <main>
                      <span className="shareOptionText">Link</span>
                      <input
                        placeholder={"Paste link here..."}
                        className="urlInput"
                        ref={url}
                      />
                    </main>
                  </li>
                </li>
                <button className="shareButton" type="submit">
                  Share
                </button>
              </form>
            </Popup>
          </span>

          <form className="logoutBox">
            <span className="logoutButton" onClick={handleClick}>
              <a href="/login" style={{ textDecoration: "none" }}>
                Logout
              </a>
            </span>
          </form>
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
        <Link to={`/profile/${currentUser.username}`}>
          <img
            src={
              currentUser.profilePicture
                ? PF + currentUser.profilePicture
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
