import FaireCard from "./FaireCard"

function FaireList( { faires, setFaires }){

    const faireList = faires.map(faire => 
       <ul><FaireCard
            key={faire.id}
            faire={faire}
        /> </ul>)

    return(
            <div className="faire-list">
                <style>
@import url('https://fonts.googleapis.com/css2?family=Passions+Conflict&display=swap');
</style>
                <h1 className="titles">Behold! The Treasure Trove</h1>
                <div className="image_grid">
                {faireList}
                </div>
            </div>
    )
}

export default FaireList
