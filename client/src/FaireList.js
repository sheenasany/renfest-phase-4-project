import FaireCard from "./FaireCard"

function FaireList( { faires, setFaires }){

    const faireList = faires.map(faire => 
       <ul><FaireCard
            key={faire.id}
            faire={faire}
        /> </ul>)

    return(
            <div className="faire-list">
                <h1>Behold! The Treasure Trove</h1>
                <div className="image_grid">
                {faireList}
                </div>
            </div>
    )
}

export default FaireList
