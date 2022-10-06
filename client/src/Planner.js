import {useEffect, useState} from 'react';
import PlannerFaireCard from './PlannerFaireCard';

function Planner({ user, setFaires, notes, setNotes }) {

    const [dataOfUser, setDataOfUser] = useState(null)
    // const [loading, setLoading] = useState(true)
    // console.log(user)

    useEffect(() => {
        fetch(`/users/me/planners`)
        .then(res => res.json())
        .then(userData => setDataOfUser(userData))
        // setLoading(!loading)
    }, []);

    
    
    const renderFaires = () => dataOfUser.map(faire => { 
        return <ul> <PlannerFaireCard faire={faire}  setFaires={setFaires} user={user} notes={notes} setNotes={setNotes} setDataOfUser={setDataOfUser} dataOfUser={dataOfUser}/> </ul>
    })

    return(
        <div className="container">
            <div className="image_grid">
                {dataOfUser === null ? 
                <p>"Loading your faires. Apologies, my liege..."</p> 
                : 
                <div className="image_grid">{renderFaires()}</div>
                }
                </div>
                </div>
    )
}

export default Planner









// <FaireCard key={dou.faire[key].id} faire={key}/>
// console.log(dataOfUser)
//     const renderFaires = () => dataOfUser.map(dou => { 
//         return <div><ul>{Object.keys(dou.faire).map(key => {
//        return <div>{dou.faire[key]}</div> })}
//     </ul></div>
// })