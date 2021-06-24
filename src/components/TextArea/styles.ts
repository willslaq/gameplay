import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.secondary40,
    width: "100%",
    height: 95,
    borderRadius: 8,
    marginRight: 4,
    paddingHorizontal: 16,
    paddingTop: 16,
    borderWidth: 1,
    borderColor: theme.colors.secondary50,
    color: theme.colors.heading,
    fontSize: 13,
    fontFamily: theme.fonts.text400,
    textAlignVertical: "top",
  },
});
