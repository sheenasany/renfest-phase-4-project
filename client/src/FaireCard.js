function FaireCard({faire}){
    return(
        <div className="card">
            <div className="card-body">
                <p><img src={faire.logo} alt="logo" /></p>
                <h4>{faire.name}</h4>
                <ul>Duration: {faire.runtime}</ul>
                <ul>Tickets: ${faire.tix}</ul>
                <ul>Location: {faire.location}</ul>
                <ul>Average Attendance: {faire.average_attendance} 👲</ul>
                </div>
            </div>
    )
}

export default FaireCard;