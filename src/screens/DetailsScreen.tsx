import React, { FC } from "react";
import { Text, View } from "react-native";
import { useRoute } from "@react-navigation/native";

import { DetailsScreenRouteProp } from "../navigation/types";

export const DetailsScreen: FC = () => {
  const route = useRoute<DetailsScreenRouteProp>();

  const { name, birthYear } = route.params;

  return (
    <View style={{ flex: 1, paddingTop: 12, paddingHorizontal: 10 }}>
      <Text style={{ fontSize: 18, paddingBottom: 12 }}>Name: {name}</Text>
      <Text style={{ fontSize: 18 }}>Birth Year: {birthYear}</Text>
    </View>
  );
};
