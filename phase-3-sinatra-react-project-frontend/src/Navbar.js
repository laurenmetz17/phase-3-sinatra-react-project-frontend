import { NavLink} from "react-router-dom";

function NavBar (){

    let storesActive = true;
    let entryActive = false;
    let playlistActive = false;
    const linkStyles = {
        display: "inline-block",
        width: "31.2%",
        padding: "12px",
        background: "LightSeaGreen",
        textDecoration: "none",
        color: "white",
    }
    const activeStyles = {
        display: "inline-block",
        width: "31.2%",
        padding: "12px",
        background: "LightBlue",
        textDecoration: "none",
        color: "white",
    }

    return (
        <div id="links">
            <NavLink to="/" exact="true" style={window.location.href === "http://localhost:3001/" || window.location.href === "http://localhose:3001"? activeStyles :linkStyles}  
            onClick={() => {
                if(storesActive !== true) {
                storesActive = !storesActive
                playlistActive = false;
                entryActive = false;
            }}}>Stores</NavLink>
            <NavLink to="/new" exact="true" style={window.location.pathname === "/new" ? activeStyles :linkStyles} 
            onClick={() => {
                if(entryActive !== true) {
                entryActive = !entryActive;
                playlistActive = false;
                storesActive = false;
            }}}>Create</NavLink>
        </div>
    )

}

export default NavBar;