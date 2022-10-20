import React, { Dispatch, SetStateAction, useState } from "react";
import { Image, Modal, Pressable, Text, TextInput, View } from "react-native";
import styles from "../StylesApp";
import Logo from "../assets/images/taskList.png";

type GoalInputProps = {
  visible: boolean;
  goalList: string[];
  setGoalList: Dispatch<SetStateAction<string[]>>;
  setModalIsVisible: (value: boolean) => void;
};

const GoalInput = ({
  goalList,
  setGoalList,
  visible: modalIsVisible,
  setModalIsVisible,
}: GoalInputProps) => {
  const [newGoalTitle, setNewGoalTitle] = useState<string>("");

  const goalInputHandler = (enteredText: string) => {
    setNewGoalTitle(enteredText);
  };

  const addGoalHandler = () => {
    try {
      if (newGoalTitle === "") throw new Error("No Title It");
      if (goalList.find((goal: string) => goal === newGoalTitle))
        throw new Error("Goal Already Exists");

      setGoalList((prevValue: any) => [...prevValue, newGoalTitle]);
      setNewGoalTitle("");
      setModalIsVisible(false);
    } catch (error: unknown | any) {
      console.log(error.message);
    }
  };

  const endModal = () => {
    setModalIsVisible(false);
  };

  return (
    // <View style={styles.appContainer}>
    <Modal visible={modalIsVisible} animationType={"slide"}>
      <View style={styles.inputContainer}>
        <Image
          style={{ height: 250, width: 250, marginBottom: 24 }}
          source={Logo}
        />
        <TextInput
          placeholder="Your course goals"
          placeholderTextColor="#fff"
          style={styles.textInput}
          onChangeText={goalInputHandler}
          value={newGoalTitle}
          onEndEditing={addGoalHandler}
        />
        <View style={styles.buttonsContainer}>
          <Pressable
            style={{ width: "40%", justifyContent: "center" }}
            onPress={addGoalHandler}
            disabled={newGoalTitle === ""}
          >
            <Text
              style={
                newGoalTitle === ""
                  ? { ...styles.buttonStyle, ...styles.addGoalDisabled }
                  : styles.buttonStyle
              }
            >
              Add Goal
            </Text>
          </Pressable>
          <Pressable
            onPress={endModal}
            style={{ width: "40%", justifyContent: "center" }}
          >
            <Text style={{ ...styles.buttonStyle, ...styles.cancelButton }}>
              Cancel
            </Text>
          </Pressable>
        </View>
      </View>
    </Modal>
    // </View>
  );
};

export default GoalInput;
