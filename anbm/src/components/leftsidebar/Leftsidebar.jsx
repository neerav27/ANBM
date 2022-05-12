import "./leftsidebar.css"
import {Save} from "@material-ui/icons";
import {Home} from "@material-ui/icons";
import {ViewColumn} from "@material-ui/icons";

export default function Leftsidebar() {
    return (
        <div className="leftsidebar">
            <div className="leftsidebarWrapper">
                <div className="leftsidebarList">
                <div className="leftsidebarListItem">
                        <Home className="leftsidebarIcon"/>
                    <span className="leftsidebarListItemText">Home</span>
                  </div>
                    <div className="leftsidebarListItem">
                        <Save className="leftsidebarIcon"/>
                    <span className="leftsidebarListItemText">Saved Posts</span>
                  </div>
                  <div className="leftsidebarListItem">
                        <ViewColumn className="leftsidebarIcon"/>
                    <span className="leftsidebarListItemText">Genre Columns</span>
                  </div>
                  <hr className="leftsidebarhr" />
                  <div className="leftsidebarInfo">
                    <div className="leftsidebarInfoItem">
                        <span className="leftsidebarInfoKey">#Pop </span>
                        <span className="leftsidebarInfoValue"> </span>
                    </div>
                    <div className="leftsidebarInfoItem">
                        <span className="leftsidebarInfoKey">#Hip hop </span>
                        <span className="leftsidebarInfoValue">  </span>
                    </div>
                    <div className="leftsidebarInfoItem">
                        <span className="leftsidebarInfoKey">#Art Punk</span>
                        <span className="leftsidebarInfoValue"> </span>
                    </div>
                    <div className="leftsidebarInfoItem">
                        <span className="leftsidebarInfoKey">#College Rock</span>
                        <span className="leftsidebarInfoValue">  </span>
                    </div>
                    <div className="leftsidebarInfoItem">
                        <span className="leftsidebarInfoKey">#Folk Punk</span>
                        <span className="leftsidebarInfoValue"> </span>
                    </div>
                    <div className="leftsidebarInfoItem">
                        <span className="leftsidebarInfoKey">#Hard Rock:</span>
                        <span className="leftsidebarInfoValue">  </span>
                    </div>
                    <div className="leftsidebarInfoItem">
                        <span className="leftsidebarInfoKey">#Lo-fi</span>
                        <span className="leftsidebarInfoValue"> </span>
                    </div>
                    <div className="leftsidebarInfoItem">
                        <span className="leftsidebarInfoKey">#New Wave</span>
                        <span className="leftsidebarInfoValue">  </span>
                    </div>
                    <div className="leftsidebarInfoItem">
                        <span className="leftsidebarInfoKey">#African Blues</span>
                        <span className="leftsidebarInfoValue"> </span>
                    </div>
                    <div className="leftsidebarInfoItem">
                        <span className="leftsidebarInfoKey">#Chicago Blues</span>
                        <span className="leftsidebarInfoValue">  </span>
                    </div>
                    <div className="leftsidebarInfoItem">
                        <span className="leftsidebarInfoKey">#Chamber Music</span>
                        <span className="leftsidebarInfoValue"> </span>
                    </div>
                    <div className="leftsidebarInfoItem">
                        <span className="leftsidebarInfoKey">#Contemporary Classical</span>
                        <span className="leftsidebarInfoValue">  </span>
                    </div>
                    <div className="leftsidebarInfoItem">
                        <span className="leftsidebarInfoKey">#Parody Music</span>
                        <span className="leftsidebarInfoValue"> </span>
                    </div>
                    <div className="leftsidebarInfoItem">
                        <span className="leftsidebarInfoKey">#Alternative Country</span>
                        <span className="leftsidebarInfoValue"> </span>
                    </div>
                    <div className="leftsidebarInfoItem">
                        <span className="leftsidebarInfoKey">#Australian Country</span>
                        <span className="leftsidebarInfoValue"> </span>
                    </div>
                    <div className="leftsidebarInfoItem">
                        <span className="leftsidebarInfoKey">#Brostep</span>
                        <span className="leftsidebarInfoValue"> </span>
                    </div>
                    <div className="leftsidebarInfoItem">
                        <span className="leftsidebarInfoKey">#Glitch Pop</span>
                        <span className="leftsidebarInfoValue"> </span>
                    </div>
                    <div className="leftsidebarInfoItem">
                        <span className="leftsidebarInfoKey">#Horrorcore</span>
                        <span className="leftsidebarInfoValue"> </span>
                    </div>
                    <div className="leftsidebarInfoItem">
                        <span className="leftsidebarInfoKey">#Chicago House</span>
                        <span className="leftsidebarInfoValue"> </span>
                    </div>
                    <div className="leftsidebarInfoItem">
                        <span className="leftsidebarInfoKey">#Trap</span>
                        <span className="leftsidebarInfoValue"> </span>
                    </div>
                    <div className="leftsidebarInfoItem">
                        <span className="leftsidebarInfoKey">#Trance</span>
                        <span className="leftsidebarInfoValue"> </span>
                    </div>
                    <div className="leftsidebarInfoItem">
                        <span className="leftsidebarInfoKey">#Electronica</span>
                        <span className="leftsidebarInfoValue"> </span>
                    </div>
                    <div className="leftsidebarInfoItem">
                        <span className="leftsidebarInfoKey">#Christmas</span>
                        <span className="leftsidebarInfoValue"> </span>
                    </div>
                    <div className="leftsidebarInfoItem">
                        <span className="leftsidebarInfoKey">#Grindcore</span>
                        <span className="leftsidebarInfoValue"> </span>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
    
}
