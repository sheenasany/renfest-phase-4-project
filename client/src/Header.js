import { NavLink } from "react-router-dom";

function Header() {


    return(
        <div className="header">
            <NavLink exact to='/homepage'>
                <h3>Homepage</h3>
            </NavLink>
            <NavLink exact to='/signup'>
                <h3>Signup</h3>
            </NavLink>
            <NavLink exact to='/login'>
                <h3>Login</h3>
                </NavLink>
            <NavLink exact to='/faire_list'>
                <h3>Faire List</h3>
            </NavLink>
        </div>
    )
};

export default Header