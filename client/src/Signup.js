import { useState } from "react";

function Signup(){
    const [users, setUsers] = useState([])
    const [formData, setFormData] = useState({
        username: "",
        password: "",
        avatar_url: ""
    })

    const addNewUser = (newUser) => {
        setUsers([...users, newUser])
    }

    const handleForm = (e) => {
        e.preventDefault();
        fetch('/signup', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })
        .then(res => res.json())
        .then(addNewUser(formData))

        setFormData({
            username: "",
            password: "",
            avatar_url: ""
        });
    }

    const handleChange = (e) => {
       setFormData(e.target.value)
}
    return(
        <div className="form">
            <div className="row">
                <form className="form" onSubmit={handleForm}>
                    <div className="form-group">
                        <label htmlFor="username">Signup!</label>
                        <br/>
                        <input
                            className="user-box"
                            type="text"
                            name="username"
                            placeholder="Username"
                            value={formData.username}
                            onChange={handleChange}
                        />
                        <input 
                            className="password-box"
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={formData.password}
                            onChange={handleChange}
                        />
                        <input
                            className="avatar-box"
                            type="text"
                            name="avatar_url"
                            placeholder="Avatar URL"
                            value={formData.avatar_url}
                            onChange={handleChange}
                        />
                        <button type="submit" name="save" value="submit" className="submit-btn">Submit</button>
                    </div>
                </form>
            </div>
            </div>
    )
}

export default Signup;
