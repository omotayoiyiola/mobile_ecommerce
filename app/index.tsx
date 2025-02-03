import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { Link, Stack } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import { Colors } from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import Animated, { FadeInDown, FadeInRight } from "react-native-reanimated";
import SocialLoginButtons from "@/components/SocialLoginButtons";

type Props = {};

const WelcomeScreen = (props: Props) => {
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <View style={{ flex: 1 }}>
        <ImageBackground
          source={require("@/assets/images/ecommerce-splash.jpg")}
          style={styles.imageBackground}
          resizeMode="cover"
        />

        <LinearGradient
          colors={[
            "transparent",
            "rgba(255, 255, 255, 0.9)",
            "rgba(255, 255, 255, 1)",
          ]}
          style={styles.background}
        >
          <View style={styles.wrapper}>
            <Animated.Text
              style={styles.title}
              entering={FadeInRight.delay(300).duration(300).springify()}
            >
              ShopX
            </Animated.Text>
            <Animated.Text
              style={styles.description}
              entering={FadeInRight.delay(500).duration(300)}
            >
              One stop solution for all your need
            </Animated.Text>
            <SocialLoginButtons emailHref={"/signup"} />
            <Text style={styles.loginTxt}>
              Already have an account?{" "}
              <Link href={"/signin"} asChild>
                <TouchableOpacity>
                  <Text style={styles.loginTxtSpan}>SignIn</Text>
                </TouchableOpacity>
              </Link>
            </Text>
          </View>
        </LinearGradient>
      </View>
    </>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  background: {
    flex: 1,
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: "flex-end",
  },
  wrapper: {
    paddingBottom: 50,
    paddingHorizontal: 20,
    alignItems: "center",
  },
  title: {
    fontSize: 22,
    color: Colors.primary,
    fontWeight: "700",
    letterSpacing: 2.4,
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    color: Colors.gray,
    letterSpacing: 1.2,
    lineHeight: 30,
    marginBottom: 20,
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
  btnTxt: {
    fontSize: 14,
    fontWeight: "600",
    color: Colors.black,
  },
  loginTxt: {
    marginTop: 30,
    fontSize: 14,
    color: Colors.black,
    lineHeight: 24,
  },
  loginTxtSpan: {
    color: Colors.primary,
    fontWeight: "600",
  },
});
