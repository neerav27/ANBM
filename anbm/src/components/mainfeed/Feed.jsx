import "./feed.css";
import Post from "../post/Post";
import Share from "../share/Share";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { axiosInstance } from "../../config";
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

export default function Feed({ username }) {
    const [posts, setPosts] = useState([])
    const { user } = useContext(AuthContext)
    useEffect(() => {
        const fetchPosts = async () => {
            const res = username
                ? await axiosInstance.get("/posts/profile/" + username)
                : await axiosInstance.get("posts/timeline/" + user._id)
                setPosts(
                    res.data.sort((p1, p2) => {
                      return new Date(p2.createdAt) - new Date(p1.createdAt);
                    })
                );
        };
        fetchPosts();
    }, [username, user._id]);
    return (
        <div className="feed">
            <div className="feedWrapper">
                
                {posts.map(p => (
                    <Post key={p._id} post={p} />
                ))}
            </div>
        </div>
    )
}
