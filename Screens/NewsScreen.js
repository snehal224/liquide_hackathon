import React, { useState } from "react";
import { Dimensions, StyleSheet, View, Text, Animated } from "react-native";
import Carousel from "react-native-snap-carousel";
import SingleNews from "../components/SingleNews";
import SwipeGesture from "react-native-swipe-gestures";

const NewsScreen = ({ newsItems }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const windowHeight = Dimensions.get("window").height;
  const [endOfList, setEndOfList] = useState(false);

  const onSwipeUp = () => {
    if (activeIndex < newsItems.length - 1) {
      setActiveIndex(activeIndex + 1);
    } else {
      setEndOfList(true);
    }
  };

  const config = {
    velocityThreshold: 0.3,
    directionalOffsetThreshold: 80
  };

  return (
    <View style={styles.container}>
      <SwipeGesture
        onSwipeUp={onSwipeUp}
        config={config}
        style={styles.swipeContainer}
      >
        <Carousel
          data={newsItems}
          sliderHeight={300}
          itemHeight={windowHeight}
          vertical={true}
          renderItem={({ item }) => <SingleNews item={item} />}
          onSnapToItem={(index) => setActiveIndex(index)}
        />
      </SwipeGesture>
      {endOfList && (
        <Animated.View style={styles.endOfListNotification}>
          <Text style={styles.endOfListText}>End of News List</Text>
        </Animated.View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  swipeContainer: {
    flex: 1,
    transform: [{ scaleY: -1 }],
  },
  endOfListNotification: {
    position: "absolute",
    bottom: 20,
    alignSelf: "center",
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
  },
  endOfListText: {
    color: "white",
    fontSize: 16,
  },
});

export default NewsScreen;

