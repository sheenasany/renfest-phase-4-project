import { NavLink, useHistory } from "react-router-dom";

function Header({ user, setUser }) {

    let history = useHistory('/homepage')

const handleLogOut = () => {
    fetch('/logout', {
        method: 'DELETE'
    })
    .then(setUser(null))

    history.push('/homepage')
}

    return(
        <div className="header">
            {!user ? ( 
           <div className="links"> <NavLink exact to='/homepage'>
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
            </NavLink> </div>
            ) : ( 
            <div> <NavLink exact to='/homepage'>
                <h3>Homepage</h3>
            </NavLink> 
            <NavLink exact to='/faire_list'>
            <h3>Faire List</h3>
            </NavLink>
            <NavLink exact to='/planner'>
                <h3>Planner</h3>
            </NavLink>
        <button onClick={handleLogOut}>Logout</button> 
        </div>)}
        </div>
    )
};

export default Header