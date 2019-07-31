import { StyleSheet, Dimensions } from "react-native";

const dHeight = Dimensions.get("window").height;
const dWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.7)"
  },
  containerModal: {
    width: dWidth - 20,
    borderRadius: 10,
    marginHorizontal: 100,
    backgroundColor: "#FFF"
  },
  image: {
    width: 30,
    height: 30
  },
  containerButton: {
    alignSelf: "center",
    borderColor: "#E6E7E9",
    borderWidth: 1,
    borderRadius: 30,
    marginTop: 30,
    width: 200,
    height: 30,
    alignItems: "center",
    justifyContent: "center"
  },
  close: {
    alignSelf: "flex-end",
    padding: 5
  },
  containerInfo: {
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start"
  },
  containerUser: {
    flexDirection: "row",
    alignItems: "center"
  },
  border: {
    marginTop: 20,
    width: "100%",
    borderWidth: 0.5,
    borderColor: "#E3E4E7"
  },
  title: {
    fontSize: 16,
    color: "#3C4043",
    fontWeight: "500"
  },
  subTitle: {
    fontSize: 14,
    color: "#5B5E61"
  },
  outherService: {
    flexDirection:"row",
    justifyContent:"center",
    alignItems: "center",
    padding: 20
  },
  titleService: {
    color:"#64666B", 
    fontWeight: "100"
  },
  separator: {
    backgroundColor: "#64666B", 
    width:4,
    height:4,
    borderRadius: 2,
    marginHorizontal: 15
  },
  containerServices: {
    flexDirection: "column", 
    justifyContent: "space-between", 
    alignItems: "flex-start"
  },
  service: {
    flexDirection: "row", 
    alignItems: "center", 
    margin: 10
  }
});
export default styles;
