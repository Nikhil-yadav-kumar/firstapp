import './Item.css'

function Item(props){
    const ItemName=props.ItemName;
    return (
    <div>
        <p className="Nikhil">{ItemName} </p>
    {/* {props.children}; to show some addition things; */}
     </div>
);
   

}
export default Item;
