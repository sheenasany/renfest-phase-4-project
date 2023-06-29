import { Link, useNavigate} from "react-router-dom";

function Header({ user, setUser }) {

    let navigate = useNavigate()

const handleLogOut = () => {
    fetch('/logout', {
        method: 'DELETE'
    })
    .then(setUser(null))

    navigate('/')
}

    return(
        <nav className="header">
            {!user ? 
                ( <div className="links">
                    <Link className="navlinks" to='/'> Homepage </Link> 
                    <Link className="navlinks" to='/signup'> Signup</Link> 
                    <Link className="navlinks" to='/login'> Login </Link> 
                    <Link className="navlinks" to='/faire_list'> Faire List </Link> 
                </div>) 
            : 
                (<div className="links">
                    <Link className="navlinks" to='/'> Homepage </Link> 
                    <Link className="navlinks" to='/faire_list'> Faire List </Link>
                    <Link className="navlinks" to='/planner'> Planner </Link>
                    <button className="btn" onClick={handleLogOut}>Logout</button> 
                </div>
                )}
        </nav>
    )
};

export default Header