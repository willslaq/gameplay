import React from "react";
import { View, FlatList } from "react-native";
import { GuildProps } from "../../components/Guild";

import { Guild } from "../../components/Guild";
import { ListDivider } from "../../components/ListDivider";

import { styles } from "./styles";

type Props = {
  handleGuildSelect: (guild: GuildProps) => void;
};

export function Guilds({ handleGuildSelect }: Props) {
  const guilds = [
    {
      id: "4",
      name: "A Vanguarda",
      icon: "image.png",
      owner: true,
    },
    {
      id: "1",
      name: "Lendários",
      icon: "image.png",
      owner: false,
    },
    {
      id: "2",
      name: "Retalhadores",
      icon: "image.png",
      owner: false,
    },
    {
      id: "3",
      name: "Praeotorians",
      icon: "image.png",
      owner: false,
    },
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={guilds}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Guild data={item} onPress={() => handleGuildSelect(item)} />
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 68, paddingTop: 104 }}
        ItemSeparatorComponent={() => <ListDivider isCentered />}
        ListHeaderComponent={() => <ListDivider isCentered />}
        style={styles.guilds}
      />
    </View>
  );
}
