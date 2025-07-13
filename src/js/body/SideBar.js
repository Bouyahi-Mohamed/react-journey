import { Component } from "react";
import '../../css/sideBar.css';

class SideBar extends Component {
    render() {
        return (
            <div className="ContainerSideBar">
                <SideBarContent />
                <SideBarContent />
                <SideBarContent />
                <SideBarContent />
                <SideBarContent />
                <SideBarContent />  
                <SideBarContent />
                <SideBarContent />
                <SideBarContent />
                <SideBarContent />
                <SideBarContent />
                <SideBarContent />      
            </div>
        );
    }
}

function SideBarContent() {

    return (
            <button className="tagButton">tag Button</button>
    )
}

export default SideBar;