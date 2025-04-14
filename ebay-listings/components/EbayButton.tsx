import { TouchableOpacity, Text, StyleSheet } from "react-native";

type Props = {
  onPress: () => void;
  title: string;
};

export default function EbayButton({ onPress, title }: Props) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    borderWidth: 4,
    borderColor: "#007eb9",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    backgroundColor: "red",
  },
  buttonText: {
    color: "#007eb9",
    fontWeight: "bold",
    textAlign: "center",
  },
});
