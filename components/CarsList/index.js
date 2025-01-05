import { View, Text, FlatList, Dimensions } from "react-native";
import React from "react";
import cars from "./cars";
import styles from "./styles";
import CarItem from "../CarItems";
const CarsList = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={cars}
        snapToAlignment={"start"}
        decelerationRate={"fast"}
        showsVerticalScrollIndicator={false}
        snapToInterval={Dimensions.get("window").height}
        renderItem={({ item }) => (
          <CarItem
            name={item.name}
            tagline={item.tagline}
            image={item.image}
            taglineCTA={item?.taglineCTA}
          />
        )}
      />
    </View>
  );
};

export default CarsList;
