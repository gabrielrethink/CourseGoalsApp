import { useState } from "react";
import { Text, FlatList, View, Button, Pressable } from "react-native";
import { StatusBar } from "expo-status-bar";
import Goal from "./components/Goal";
import GoalInput from "./components/GoalInput";
import styles from "./StylesApp";

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [goalList, setGoalList] = useState<string[]>([
    "Goal 01",
    "Goal 02",
    "Goal 03",
    "Goal 04",
    "Goal 05",
  ]);
  const startModal = () => {
    setModalIsVisible(true);
  };

  const removeGoalHandler = (id: number) => {
    setGoalList((oldGoalList) =>
      oldGoalList.filter((item, index) => index !== id)
    );
  };

  return (
    <>
      <StatusBar style="light" />

      <View style={styles.appContainer}>
        <View style={{ alignItems: "center" }}>
          <Pressable
            style={({ pressed }) =>
              pressed
                ? { ...styles.addGoalButton, backgroundColor: "green" }
                : styles.addGoalButton
            }
            onPress={startModal}
          >
            <Text style={styles.addGoalText}>Add a new Goal</Text>
          </Pressable>
        </View>

        <GoalInput
          setModalIsVisible={setModalIsVisible}
          visible={modalIsVisible}
          goalList={goalList}
          setGoalList={setGoalList}
        />

        <View style={styles.goalsContainer}>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={goalList}
            renderItem={({ item, index }) => {
              return (
                <Goal
                  removeGoalHandler={removeGoalHandler}
                  item={item}
                  id={index}
                />
              );
            }}
          />
        </View>
      </View>
    </>
  );
}
