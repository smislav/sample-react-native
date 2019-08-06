import React from "react"

import styles from "./styles"
import { FlatList } from "react-native";
import ItemCellUI from "./ItemCell"

const HomeUI = (props) => (
    <React.Fragment>
        <FlatList 
            data={props.categories}
            renderItem={({item}) => 
                <ItemCellUI 
                    itemText={item.name} 
                    itemID={item.id}/>}
            keyExtractor={(item, index) => index.toString()}/>
    </React.Fragment>
);

export default HomeUI;