import {StyleSheet} from "react-native"
import mainStyle from "@src/styles"

const styleSheet = StyleSheet.create({
    card: {
        marginTop: 8,
        marginLeft: 8,
        marginRight: 8,
        padding: 16,
        height: 128,
        borderRadius: 5,
        backgroundColor: "gray"
    },
    cardText: {
      color: "white",
      fontSize: 18,
      fontWeight: "bold"
    }
    
});

export default styleSheet;