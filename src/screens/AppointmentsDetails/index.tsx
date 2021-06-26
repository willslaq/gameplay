import React from "react";
import { Fontisto } from "@expo/vector-icons";
import { BorderlessButton } from "react-native-gesture-handler";

import { ImageBackground, Text, View, FlatList } from "react-native";

import { theme } from "../../global/styles/theme";
import { styles } from "./styles";
import BannerImg from "../../assets/banner.png";

import { ListDivider } from "../../components/ListDivider";
import { Background } from "../../components/Background";
import { ListHeader } from "../../components/ListHeader";
import { ButtonIcon } from "../../components/ButtonIcon";
import { Member } from "../../components/Member";
import { Header } from "../../components/Header";

export default function AppointmentDetails() {
  const members = [
    {
      id: "1",
      username: "Rodrigo",
      avatar_url: "https://github.com/rodrigorgtic.png",
      status: "online",
    },
    {
      id: "2",
      username: "Diego",
      avatar_url: "https://github.com/diego3g.png",
      status: "offline",
    },
    {
      id: "3",
      username: "Willslaq",
      avatar_url: "https://github.com/willslaq.png",
      status: "online",
    },
    {
      id: "4",
      username: "Lucas LCC",
      avatar_url: "https://github.com/extendsLcc.png",
      status: "offline",
    },
  ];

  return (
    <Background>
      <Header
        title="Teste"
        action={
          <BorderlessButton>
            <Fontisto name="share" size={24} color={theme.colors.primary} />
          </BorderlessButton>
        }
      />

      <ImageBackground source={BannerImg} style={styles.banner}>
        <View style={styles.bannerContent}>
          <Text style={styles.title}>Lendários</Text>

          <Text style={styles.subtitle}>
            É hoje que vamos chegar ao challenger sem perder uma partida da md10
          </Text>
        </View>
      </ImageBackground>

      <ListHeader title="Jogadores" subtitle="Total 3" />

      <FlatList
        data={members}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Member data={item} />}
        ItemSeparatorComponent={() => <ListDivider isCentered />}
        style={styles.members}
      />

      <View style={styles.footer}>
        <ButtonIcon title="Entrar na partida" />
      </View>
    </Background>
  );
}
