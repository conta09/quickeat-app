import burger from "@/assets/images/burger.jpg";
import burrito from "@/assets/images/burrito.jpeg";
import chicken from "@/assets/images/chicken.jpg";
import profile from "@/assets/images/profile.jpg";
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
      {/* Header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.helloText}>Hello,</Text>
          <Text style={styles.nameText}>John Doe</Text>
        </View>

        <Image source={profile} style={styles.avatar} />
      </View>

      {/* Cards */}
      <View style={styles.cardsContainer}>
        <Pressable style={styles.card}>
          <Image source={burrito} style={styles.cardImage} />
          <Text style={styles.cardText}>Burrito</Text>
        </Pressable>

        <Pressable style={styles.card}>
          <Image source={burger} style={styles.cardImage} />
          <Text style={styles.cardText}>Burger</Text>
        </Pressable>

        <Pressable style={styles.card}>
          <Image source={chicken} style={styles.cardImage} />
          <Text style={styles.cardText}>Chicken</Text>
        </Pressable>
        <Pressable style={styles.card}>
          <Image source={burrito} style={styles.cardImage} />
          <Text style={styles.cardText}>Burrito</Text>
        </Pressable>
      </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  /* Header styles */
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
  },
  helloText: {
    fontSize: 22,
    fontWeight: "600",
    paddingBottom: 4,
  },
  nameText: {
    fontSize: 12,
    fontWeight: "300",
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },

  /* Cards */
  cardsContainer: {
    padding: 10,
  },
  card: {
    height: 180,
    width: "100%",
    borderRadius: 12,
    marginBottom: 12,
    overflow: "hidden",
  },
  cardImage: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: "cover",
  },
  cardText: {
    position: "absolute",
    bottom: 10,
    left: 10,
    color: "white",
    fontSize: 18,
    fontWeight: "700",
  },
});
