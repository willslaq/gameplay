import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    width: 48,
    height: 48,
    borderRadius: 8,
    marginRight: 4,
    fontSize: 13,
    fontFamily: theme.fonts.text400,
    backgroundColor: theme.colors.secondary40,
    color: theme.colors.heading,
    textAlign: "center",
  },
});
