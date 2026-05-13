import { StyleSheet } from "react-native";
import { COLORS } from "../../../themes/colors";

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 20,
  },
  forgotContainer: {
    alignSelf: 'flex-end',
    marginBottom: 20,
  },
  forgotText: {
    color: COLORS.primary,
    fontSize: 12,
    fontWeight: 'bold',
  },
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 30,
  },
  footerText: {
    fontSize: 14,
    color: COLORS.text,
  },
  signUpText: {
    fontSize: 14,
    color: COLORS.secondary,
    fontWeight: 'bold',
  }
});