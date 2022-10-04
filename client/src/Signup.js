import { useState } from "react";
import {Link} from "react-router-dom";

function Signup(){
    
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [avatarUrl, setAvatarUrl] = useState("")

    const handleForm = (e) => {
        e.preventDefault();

        let userData = {
            username: username,
            password: password,
            avatar_url: avatarUrl
        }

        fetch('/signup', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userData)
        })
        .then(res => res.json())
        .then(console.log(userData))

        setUsername("")
        setPassword("")
        setAvatarUrl("")

    }

    return(
        <div className="form">
                <form className="form-group" onSubmit={handleForm}>
                        <label htmlFor="username">Signup!</label>
                        <br/>
                        <input
                            className="user-box"
                            type="text"
                            name="username"
                            placeholder="Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <br/>
                        <label htmlFor="username">Enter a Username</label>
                        <br/>
                        <input 
                            className="password-box"
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <br/>
                        <label htmlFor="username">Enter a Password</label>
                        <br/>
                        <input
                            className="avatar-box"
                            type="text"
                            name="avatar_url"
                            placeholder="Avatar URL"
                            value={avatarUrl}
                            onChange={(e) => setAvatarUrl(e.target.value)}
                        />
                        <br/>
                        <button type="submit" name="save" value="submit" className="submit-btn">Create a New User</button>
                </form>
                <div>
                    <ul>Already have an account? <Link to='/login'>Login here!</Link></ul>
                </div>
            </div>
    )
}

export default Signup;
