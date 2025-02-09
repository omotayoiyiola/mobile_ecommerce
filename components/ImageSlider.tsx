import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
  ViewToken,
} from "react-native";
import React, { useEffect, useRef, useState, useCallback } from "react";
import Pagination from "@/components/Pagination";

type Props = {
  imageList: string[];
};

const width = Dimensions.get("screen").width;

const ImageSlider = ({ imageList = [] }: Props) => {
  const [paginationIndex, setPaginationIndex] = useState(0);
  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    if (imageList.length > 0) {
      setImages(imageList);
    }
  }, [imageList]);

  // Use useCallback to stabilize the function
  const onViewableItemsChanged = useCallback(
    ({ viewableItems }: { viewableItems: ViewToken[] }) => {
      if (
        viewableItems.length > 0 &&
        viewableItems[0].index !== undefined &&
        viewableItems[0].index !== null
      ) {
        setPaginationIndex(viewableItems[0].index);
      }
    },
    [] // No dependencies, ensures stability
  );

  const viewabilityConfig = useRef({
    itemVisiblePercentThreshold: 50,
  });

  const viewabilityConfigCallbackPairs = useRef([
    { viewabilityConfig: viewabilityConfig.current, onViewableItemsChanged },
  ]);

  return (
    <View>
      <FlatList
        data={images}
        renderItem={({ item }) => (
          <View
            style={{
              width: width,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              source={{ uri: item }}
              style={{ width: 300, height: 300, borderRadius: 10 }}
            />
          </View>
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        scrollEventThrottle={16}
        viewabilityConfigCallbackPairs={viewabilityConfigCallbackPairs.current}
      />
      <Pagination items={images} paginationIndex={paginationIndex} />
    </View>
  );
};

export default ImageSlider;

const styles = StyleSheet.create({});
