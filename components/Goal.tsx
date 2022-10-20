import { Pressable, Text, TextInput, FlatList, View } from "react-native";
import styles from "../StylesApp";

type GoalProps = {
  removeGoalHandler: (value: number) => void;
  item: string;
  id: number;
};

const Goal = ({ removeGoalHandler, item, id }: GoalProps) => {
  return (
    <View>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? { ...styles.goalItemPressed, ...styles.goalItem }
            : styles.goalItem
        }
        onPress={() => removeGoalHandler(id)}
      >
        <Text style={{ fontWeight: "bold", color: "white" }}>{item}</Text>
      </Pressable>
    </View>
  );
};

export default Goal;
