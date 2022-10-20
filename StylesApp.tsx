import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  appContainer: {
    minHeight: 90,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: "#202020",
    flex: 1,
  },

  inputContainer: {
    backgroundColor: "#202020",
    // flex: 1,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 24,

    gap: 24,
  },

  addGoalDisabled: {
    borderColor: "#ccc",
    color: "#fff",
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",

    width: "60%",
  },
  buttonStyle: {
    borderColor: "#228B22",
    color: "#228B22",
    borderWidth: 3,
    paddingVertical: 6,
    textAlign: "center",
    fontWeight: "bold",
    borderRadius: 18,
  },

  textInput: {
    borderWidth: 2,
    borderRadius: 6,
    borderColor: "white",
    width: "70%",
    padding: 8,
    color: "white",
    marginBottom: 12,
  },

  goalsContainer: {},

  goalItem: {
    backgroundColor: "#5e0acc",
    margin: 8,
    padding: 8,
    borderRadius: 20,
  },

  goalButtonText: {
    color: "#5e0acc",
    fontWeight: "bold",
  },
  goalItemPressed: {
    opacity: 0.8,
  },

  goalButtomContainer: {
    backgroundColor: "white",
  },
  cancelButton: {
    borderColor: "red",
    color: "red",
  },
});

export default styles;
