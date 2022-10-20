import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  appContainer: {
    minHeight: 90,
    paddingTop: 50,
    paddingHorizontal: 16,
  },

  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderColor: "#ccc",
    gap: 24,
  },

  addGoalDisabled: {
    borderColor: "#ccc",
    color: "#ccc",
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",

    width: "60%",
  },
  buttonStyle: {
    borderColor: "#228B22",
    color: "#228B22",
    borderWidth: 2,
    paddingVertical: 6,
    textAlign: "center",
    borderRadius: 18,
  },

  textInput: {
    borderWidth: 1,
    borderColor: "green",
    width: "70%",
    padding: 8,
    color: "green",
    marginBottom: 12,
  },

  goalsContainer: {
    // backgroundColor: "cyan",
  },

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
