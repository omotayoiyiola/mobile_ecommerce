import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import Animated, { FadeInDown } from "react-native-reanimated";
import { Href, Link } from "expo-router";
import { Colors } from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";

type Props = {
  emailHref: Href<string | object>;
};

const SocialLoginButtons = (props: Props) => {
  const { emailHref } = props;
  return (
    <View style={styles.socialLoginWrapper}>
      <Animated.View entering={FadeInDown.delay(300).duration(500)}>
        <Link href={emailHref} asChild>
          <TouchableOpacity style={styles.button}>
            <Ionicons name="mail" size={20} color={Colors.black} />
            <Text>Continue with Email</Text>
          </TouchableOpacity>
        </Link>
      </Animated.View>
      <Animated.View entering={FadeInDown.delay(700).duration(500)}>
        <TouchableOpacity style={styles.button}>
          <Ionicons name="logo-google" size={20} color={Colors.black} />
          <Text>Continue with Google</Text>
        </TouchableOpacity>
      </Animated.View>
      <Animated.View entering={FadeInDown.delay(1100).duration(500)}>
        <TouchableOpacity style={styles.button}>
          <Ionicons name="logo-apple" size={20} color={Colors.black} />
          <Text>Continue with Apple</Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};

export default SocialLoginButtons;

const styles = StyleSheet.create({
  wrapper: {
    paddingBottom: 50,
    paddingHorizontal: 20,
    alignItems: "center",
  },

  socialLoginWrapper: {
    alignSelf: "stretch",
  },
  button: {
    flexDirection: "row",
    padding: 10,
    borderColor: Colors.gray,
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    gap: 5,
    marginBottom: 15,
  },
});
