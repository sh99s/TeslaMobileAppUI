import { StyleSheet } from "react-native";
export default styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 50,
    zIndex: 100,
    width: "100%",
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  logo: {
    width: 100,
    height: 20,
    resizeMode: "contain",
  },

  menu: {
    width: 25,
    height: 25,
    resizeMode: "contain",
  },
});
