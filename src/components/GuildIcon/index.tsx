import React from "react";
import { Image, View } from "react-native";

import { styles } from "./styles";
const { CDN_IMAGE } = process.env;
import DiscordSvg from "../../assets/discord.svg";

type Props = {
  guildId: string;
  guildIcon: string | null;
};

export function GuildIcon({ guildId, guildIcon }: Props) {
  const uri = `${CDN_IMAGE}/icons/${guildId}/${guildIcon}.png`;

  return (
    <View style={styles.container}>
      {guildIcon ? (
        <Image source={{ uri }} style={styles.image} resizeMode="cover" />
      ) : (
        <DiscordSvg width={40} height={40} />
      )}
    </View>
  );
}
