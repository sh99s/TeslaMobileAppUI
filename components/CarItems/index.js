import { View, Text, ImageBackground } from "react-native";
import React from "react";
import styles from "./styles";
import StyledButton from "../StyledButton";
import cars from "../CarsList/cars";

const CarItem = ({ name, tagline, image, taglineCTA }) => {
  return (
    <View style={styles.carContainer}>
      <ImageBackground source={image} style={styles.image} />
      <View style={styles.titles}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subtitle}>
          {tagline} <Text style={styles.taglineCTA}>{taglineCTA}</Text>
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <StyledButton
          onPress={() => console.log("customer order pressed")}
          content={"Custom Order"}
          type={"primary"}
        />
        <StyledButton
          onPress={() => console.log("Existing inventory  pressed")}
          content={"Existing Inventory"}
          type={"secondary"}
        />
      </View>
    </View>
  );
};

export default CarItem;
