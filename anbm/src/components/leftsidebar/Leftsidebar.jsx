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
                        <span className="leftsidebarInfoKey">#Hip-hop </span>
                        <span className="leftsidebarInfoValue">  </span>
                    </div>
                    <div className="leftsidebarInfoItem">
                        <span className="leftsidebarInfoKey">#ArtPunk</span>
                        <span className="leftsidebarInfoValue"> </span>
                    </div>
                    <div className="leftsidebarInfoItem">
                        <span className="leftsidebarInfoKey">#CollegeRock</span>
                        <span className="leftsidebarInfoValue">  </span>
                    </div>
                    <div className="leftsidebarInfoItem">
                        <span className="leftsidebarInfoKey">#FolkPunk</span>
                        <span className="leftsidebarInfoValue"> </span>
                    </div>
                    <div className="leftsidebarInfoItem">
                        <span className="leftsidebarInfoKey">#HardRock</span>
                        <span className="leftsidebarInfoValue">  </span>
                    </div>
                    <div className="leftsidebarInfoItem">
                        <span className="leftsidebarInfoKey">#Lo-fi</span>
                        <span className="leftsidebarInfoValue"> </span>
                    </div>
                    <div className="leftsidebarInfoItem">
                        <span className="leftsidebarInfoKey">#NewWave</span>
                        <span className="leftsidebarInfoValue">  </span>
                    </div>
                    <div className="leftsidebarInfoItem">
                        <span className="leftsidebarInfoKey">#AfricanBlues</span>
                        <span className="leftsidebarInfoValue"> </span>
                    </div>
                    <div className="leftsidebarInfoItem">
                        <span className="leftsidebarInfoKey">#ChicagoBlues</span>
                        <span className="leftsidebarInfoValue">  </span>
                    </div>
                    <div className="leftsidebarInfoItem">
                        <span className="leftsidebarInfoKey">#ChamberMusic</span>
                        <span className="leftsidebarInfoValue"> </span>
                    </div>
                    <div className="leftsidebarInfoItem">
                        <span className="leftsidebarInfoKey">#ContemporaryClassical</span>
                        <span className="leftsidebarInfoValue">  </span>
                    </div>
                    <div className="leftsidebarInfoItem">
                        <span className="leftsidebarInfoKey">#ParodyMusic</span>
                        <span className="leftsidebarInfoValue"> </span>
                    </div>
                    <div className="leftsidebarInfoItem">
                        <span className="leftsidebarInfoKey">#AlternativeCountry</span>
                        <span className="leftsidebarInfoValue"> </span>
                    </div>
                    <div className="leftsidebarInfoItem">
                        <span className="leftsidebarInfoKey">#AustralianCountry</span>
                        <span className="leftsidebarInfoValue"> </span>
                    </div>
                    <div className="leftsidebarInfoItem">
                        <span className="leftsidebarInfoKey">#Brostep</span>
                        <span className="leftsidebarInfoValue"> </span>
                    </div>
                    <div className="leftsidebarInfoItem">
                        <span className="leftsidebarInfoKey">#GlitchPop</span>
                        <span className="leftsidebarInfoValue"> </span>
                    </div>
                    <div className="leftsidebarInfoItem">
                        <span className="leftsidebarInfoKey">#Horrorcore</span>
                        <span className="leftsidebarInfoValue"> </span>
                    </div>
                    <div className="leftsidebarInfoItem">
                        <span className="leftsidebarInfoKey">#ChicagoHouse</span>
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
