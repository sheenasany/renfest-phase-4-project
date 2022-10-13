import FaireCard from "./FaireCard"

function FaireList( { faires, setFaires }){

    const faireList = faires.map(faire => 
       <ul><FaireCard
            key={faire.id}
            faire={faire}
        /> </ul>)

        // const handleUpdatedFavorite = (updatedFaire) => {
        //     const updateFaire = faires.map(faire => faire.id === updatedFaire.id ? updatedFaire : faire)
        //     setFaires(updateFaire)
        //   }

    // const handleFavorites = (faire) => {
    //     fetch(`/faires/${id}`, {
    //         method: 'PATCH',
    //         headers: {
    //             "Content-Type": "application/json"
    //     },
    //     body: JSON.stringify({isFavorited: true}),
    // })
    //     .then(res => res.json())
    //     .then(updatedFavorites => handleUpdatedFavorite(updatedFavorites)
    // }


    return(
            <div className="faire-list">
                <style>
@import url('https://fonts.googleapis.com/css2?family=Berkshire+Swash&display=swap');
</style>
                <h1 className="titles">Behold! The Treasure Trove</h1>
                <div className="image_grid">
                {faireList}
                </div>
            </div>
    )
}

export default FaireList
