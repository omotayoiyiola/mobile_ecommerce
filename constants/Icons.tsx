import { Ionicons } from "@expo/vector-icons";
import { Image, StyleSheet } from "react-native";

export const icon = {
  index: ({ color }: { color: string }) => (
    <Ionicons name="home-outline" size={22} color={color} />
  ),
  explore: ({ color }: { color: string }) => (
    <Ionicons name="search-outline" size={22} color={color} />
  ),
  notifications: ({ color }: { color: string }) => (
    <Ionicons name="notifications-outline" size={22} color={color} />
  ),
  cart: ({ color }: { color: string }) => (
    <Ionicons name="cart-outline" size={22} color={color} />
  ),
  profile: ({ color }: { color: string }) => (
    <Image
      source={{
        uri: "https://media.licdn.com/dms/image/v2/D4D03AQFIePUb6q2qHw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1700818319551?e=1744243200&v=beta&t=MSuO90IvrkaqVXFMb_9EhM_IljSPl4ZsJBM7dOvl6RY",
      }}
      style={styles.userImage}
    />
  ),
};

const styles = StyleSheet.create({
  userImage: { height: 24, width: 24, borderRadius: 20 },
});
