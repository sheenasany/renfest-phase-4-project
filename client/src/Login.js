import { useHistory } from "react-router-dom";
import React, {useState} from "react"

function Login({ setUser }){

    const [username, setUserName] = useState("")
    const [password, setPassword] = useState("")    

    let history = useHistory();

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

        history.push('/homepage');
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username"> Username</label>
                <input
                    type="text"
                    id="username"
                    value={username}
                    onChange={(e) => setUserName(e.target.value)}
                    />
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                 />  
                <button type="submit">Login</button>
            </form>

        </div>
    )
}

export default Login;