import { NavLink} from "react-router-dom";

function NavBar (){

    const aboutActive = true;
    const entryActive = false;
    const playlistActive = false;
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
                if(aboutActive !== true) {
                aboutActive = !aboutActive;
                playlistActive = false;
                entryActive = false;
            }}}>Stores</NavLink>
            <NavLink to="/add" exact="true" style={window.location.pathname === "/add" ? activeStyles :linkStyles} 
            onClick={() => {
                if(entryActive !== true) {
                entryActive = !entryActive;
                playlistActive = false;
                aboutActive = false;
            }}}>Create</NavLink>
        </div>
    )

}

export default NavBar;