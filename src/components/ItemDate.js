import './ItemDate.css';

function ItemDate(props){
    
    const day=props.day;
    const month=props.month;
    const year=props.year;

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