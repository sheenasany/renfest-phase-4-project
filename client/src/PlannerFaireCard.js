import { useState } from "react";

function PlannerFaireCard({ faire, setFaires, user, notes, setNotes, setDataOfUser, dataOfUser }) {
    
    const [newNotes, setNewNotes] = useState("")
    const [showForm, setShowForm] = useState(false)
    const [showUpdateForm, setShowUpdateForm] = useState(false)
    const [updatedNotes, setUpdatedNotes] = useState("")
    // const [planners, setPlanners] = useState([])

    const handleForm = (e) => {
        e.preventDefault()
        fetch('/planners', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                notes: newNotes,
                user_id: user.id,
                faire_id: faire.faire.id
            })
        })
        .then(res => res.json())
        .then(data => setDataOfUser([...dataOfUser, data]))
        
        setNewNotes("")
    }
    // debugger
    
    // const handleDeletedPlanner = (id) => {
    //     setPlanners(planners.filter(p => id !== p.id))
    // }
    
    const handleDelete = () => {
        fetch(`/planners/${faire.id}`, {
            method: "DELETE"
        })
       alert("Your note has been deleted at your request, your majesty!") 
        // handleDeletedPlanner(faire.id)
        window.location.reload()

    }

    function handleUpdate(){
        fetch(`/planners/${faire.id}`, {
        method: "PATCH",
         headers: {
        "Content-Type": "application/json",
        },
         body: JSON.stringify({
            notes: updatedNotes
         }),
     })
      .then((res) => res.json())
      .then(console.log);
      alert("At your request, my liege, your note has been updated!")
      window.location.reload()
    }

    const handleChange = (e) => {
        setNewNotes(e.target.value)
    }

    const handleShowForm = () => {
        setShowForm(!showForm)
    }

    const toggleUpdateForm = () => {
        setShowUpdateForm(!showUpdateForm)
    }

    const renderUpdatedNotes = (e) => {
        setUpdatedNotes(e.target.value)
    }
    // debugger
    // console.log(faire)

    return(
        <div className="card">
            <div className="card-body">
                <img className="item_image" src={faire.faire.logo} alt="logo" />
                <h4>{faire.faire.name}</h4>
                <ul>Duration: {faire.faire.runtime}</ul>
                <ul>Tickets: ${faire.faire.tix}</ul>
                <ul>Location: {faire.faire.location}</ul>
                <ul>Average Attendance: {faire.faire.average_attendance} 👲</ul>
                <p><b>Notes: {faire.notes}</b></p>
                
                <button onClick={handleShowForm}>{!showForm ? "Add A New Note" : "Hide Note Form"}</button>

                <button onClick={toggleUpdateForm}>{!showUpdateForm ? "Update Note" : "Hide Update"}</button>
                {showUpdateForm ?
                <div>
                <form onSubmit={handleUpdate}>
                    <input 
                        type="text" 
                        name="updated_notes" 
                        value={updatedNotes}
                        onChange={renderUpdatedNotes}
                    />
                    <button type="submit">Submit Update</button>
                </form>
                </div> : null}
        
                <button onClick={handleDelete}>Delete Note</button>
                
                {showForm ?  
               <div> <form onSubmit={handleForm}>
                    <input 
                    type="text" 
                    name="notes" 
                    value={newNotes} 
                    onChange={handleChange} 
                    />
                    <button type="submit">Submit New Note</button>
                </form></div> : null}
                </div>
            </div>
    )
}

export default PlannerFaireCard;