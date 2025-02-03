import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { CategoryType } from "@/types/type";
import { Colors } from "@/constants/Colors";

type Props = {
  categories: CategoryType[];
};

const Categories = ({ categories }: Props) => {
  return (
    <View>
      <View style={styles.titleWrapper}>
        <Text style={styles.title}>Categories</Text>
        <TouchableOpacity>
          <Text style={styles.titleBtn}>See All</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={categories}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ index, item }) => (
          <TouchableOpacity>
            <View style={styles.item}>
              <Image source={{ uri: item.image }} style={styles.itemImage} />
              <Text>{item.name}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({
  titleWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    letterSpacing: 0.6,
    color: Colors.black,
  },
  titleBtn: {
    fontSize: 14,
    fontWeight: "500",
    letterSpacing: 0.6,
    color: Colors.black,
  },
  item: {
    marginVertical: 10,
    gap: 5,
    alignItems: "center",
    marginLeft: 20,
  },
  itemImage: {
    width: 50,
    height: 50,
    borderRadius: 30,
    color: Colors.gray,
  },
});
