import { useNavigate } from "react-router-dom";
import React, {useState} from "react"

function Login({ setUser }){

    const [username, setUserName] = useState("")
    const [password, setPassword] = useState("")    

    let navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch('/login', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
               username,
               password})
        })
        .then(res => res.json())
        .then(user => setUser(user))

        navigate('/');
    }

    return(
        <div className="sp_container">
            <style>
@import url('https://fonts.googleapis.com/css2?family=Berkshire+Swash&display=swap');
</style>
            <label className="titles">Login</label>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username"> Username</label>
                <br/>
                <input
                    type="text"
                    id="username"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUserName(e.target.value)}
                    />
                    <br/>
                <label htmlFor="password">Password</label>
                <br/>
                <input
                    type="password"
                    id="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />  
                <br/>
                <button className="btn" type="submit">Login</button>
            </form>

        </div>
    )
}

export default Login;