import './ItemDate.css';

function ItemDate(){
    
    const day=20;
    const month="june";
    const year=2004;

    return(
        <div className='mfg-Date'>
            <span>{day}</span>
            <span>{month}</span>
            <span>{year}</span>
        </div>
    )
    // return (
    //     <div className="mfg-Date">
    //         <span>20</span>
    //         <span>june</span>
    //         <span>2004</span>
    //     </div>
    // )
}

export default ItemDate;