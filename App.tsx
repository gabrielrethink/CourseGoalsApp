import { useState } from "react";
import { Text, FlatList, View, Button, Pressable } from "react-native";
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
    <View style={styles.appContainer}>
      <Pressable onPress={startModal}>
        <Text
          style={{
            color: "#fff",
            textAlign: "center",
            marginBottom: 10,
            fontSize: 22,
            fontWeight: "bold",
          }}
        >
          Add a new Goal
        </Text>
      </Pressable>
      {/* <Button title="Add a new Goal" color={"#5e0acc"}*/}
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
  );
}
