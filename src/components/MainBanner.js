import * as React from "react";
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";
import Products from "./Products";
import { NavigationContainer } from "@react-navigation/native";

const LeftContent = (props) => <Avatar.Icon {...props} icon="folder" />;

const MainBanner = ({ navigation }) => (
  <Card
    style={{ display: "flex", justContent: "center", alignItems: "center" }}
  >
    <Card.Content>
      <Title>DON'T OVERPAY FOR YOUR GROCERIES!</Title>
      <Paragraph>Use supermAAART now!</Paragraph>
    </Card.Content>
    <Card.Cover
      source={{
        uri: "https://i.ibb.co/WDw560F/large-1.png",
      }}
    />
    <Card.Actions>
      <Paragraph>Use supermAAART now!</Paragraph>
      <Button onPress={() => navigation.navigate("Products")}>Start</Button>
    </Card.Actions>
  </Card>
);

export default MainBanner;
