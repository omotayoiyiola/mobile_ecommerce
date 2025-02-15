import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import { useHeaderHeight } from "@react-navigation/elements";
import { Colors } from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";

type Props = {};

const ProfileScreen = (props: Props) => {
  const headerHeight = useHeaderHeight();
  return (
    <>
      <Stack.Screen options={{ headerShown: true, headerTransparent: true }} />
      <View style={[styles.container, { marginTop: headerHeight }]}>
        <View style={{ alignItems: "center" }}>
          <Image
            source={{
              uri: "https://media.licdn.com/dms/image/v2/D4D03AQFIePUb6q2qHw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1700818319551?e=1744243200&v=beta&t=MSuO90IvrkaqVXFMb_9EhM_IljSPl4ZsJBM7dOvl6RY",
            }}
            style={{ width: 100, height: 100, borderRadius: 50 }}
          />
          <Text style={styles.userName}>John Doe</Text>
        </View>
        <View style={styles.buttonWrapper}>
          <TouchableOpacity style={styles.button}>
            <Ionicons name="person-outline" size={20} color={Colors.black} />
            <Text style={styles.buttonText}>Your orders</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Ionicons name="card-outline" size={20} color={Colors.black} />
            <Text style={styles.buttonText}>Your Wishlist</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Ionicons name="person-outline" size={20} color={Colors.black} />
            <Text style={styles.buttonText}>Payment History</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Ionicons name="gift-outline" size={20} color={Colors.black} />
            <Text style={styles.buttonText}>Reward Point</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Ionicons
              name="help-circle-outline"
              size={20}
              color={Colors.black}
            />
            <Text style={styles.buttonText}>Customer Support</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Ionicons name="pencil-outline" size={20} color={Colors.black} />
            <Text style={styles.buttonText}>Edit Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Ionicons name="settings-outline" size={20} color={Colors.black} />
            <Text style={styles.buttonText}>Settings </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Ionicons name="log-out-outline" size={20} color={Colors.black} />
            <Text style={styles.buttonText}>Logout</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  userName: {
    fontSize: 20,
    fontWeight: "500",
    color: Colors.black,
    marginTop: 10,
  },
  buttonWrapper: {
    marginTop: 20,
    gap: 10,
  },
  button: {
    padding: 10,
    borderColor: Colors.lightGray,
    borderWidth: 1,
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  buttonText: {
    fontSize: 14,
    fontWeight: "500",
    color: Colors.black,
  },
});
