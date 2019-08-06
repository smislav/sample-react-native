import React from "react"

import styles from "./styles"

import { TouchableOpacity, Text } from "react-native";

const ItemCellUI = (props) => (
    <TouchableOpacity style={styles.card} onPress={props.onPress}>
        <Text style={styles.cardText}>{props.text}</Text>
    </TouchableOpacity>
);

export default ItemCellUI;