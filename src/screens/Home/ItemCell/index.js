import React from 'react';
import ItemCellUI from './ItemCellUI';

class ItemCell extends React.Component {    
    render() {
        return <ItemCellUI itemText={this.props.text} onPress={() => {}}/>
    }
}

export default ItemCell;