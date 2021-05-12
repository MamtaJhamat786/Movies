import React from 'react'
const ListGroup = (props) => {
    const { items, valueProperty, textProperty,selectedItem, onItemSelect } = props;
    return ( 
        <ul className="list-group">
            {items.map(item => 
            <li onClick={()=> onItemSelect(item)} 
            key={[valueProperty]} 
            className={item=== selectedItem ? "list-group-item active" :"list-group-item"}> 
            {item[textProperty]}
            </li>)}
        </ul>
     );
};
ListGroup.defaultProps = {
    textProperty :'name',
    valueProperty: '_id'


}
 
export default ListGroup;