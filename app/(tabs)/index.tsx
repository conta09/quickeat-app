import { Ionicons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        {/* TOP CONTAINER */}
        <View style={styles.topContainer}>
          {/* Location Row */}
          <View style={styles.locationRow}>
            <View style={styles.locationLeft}>
              <Ionicons name="location-outline" size={18} color="#fff" />
              <Text style={styles.locationText}>
                Sterling place, Brooklyn
              </Text>
            </View>
            <Ionicons name="notifications-outline" size={20} color="#fff" />
          </View>

          {/* Heading */}
          <Text style={styles.heading}>
            What are you going{"\n"}to deliver today?
          </Text>

          {/* Search Row */}
          <View style={styles.searchRow}>
            <View style={styles.searchBox}>
              <Ionicons name="search-outline" size={18} color="#888" />
              <TextInput
                placeholder="Search here..."
                placeholderTextColor="#888"
                style={styles.searchInput}
              />
            </View>

            <Pressable style={styles.filterButton}>
              <Ionicons name="options-outline" size={20} color="#000" />
            </Pressable>
          </View>
        </View>

        {/* BOTTOM CONTAINER */}
        <View style={styles.bottomContainer}>
          <View style={styles.offerHeader}>
            <Text style={styles.offerTitle}>Today Offers!</Text>
            <Text style={styles.seeAll}>See All</Text>
          </View>

          <Text style={styles.offerMainText}>Free Delivery</Text>
          <Text style={styles.offerSubText}>
            Enjoy exclusive discounts on tasty food today!
          </Text>

          <Pressable style={styles.orderButton}>
            <Text style={styles.orderButtonText}>Order Now</Text>
          </Pressable>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f4f4",
  },

  scrollView: {
    flex: 1,
  },

  /* TOP */
  topContainer: {
    backgroundColor: "#111",
    paddingHorizontal: 20,
    paddingTop: 100,
    paddingBottom: 40,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },

  locationRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  locationLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },

  locationText: {
    color: "#fff",
    fontSize: 14,
  },

  heading: {
    color: "#fff",
    fontSize: 26,
    fontWeight: "700",
    marginVertical: 20,
  },

  searchRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },

  searchBox: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingHorizontal: 12,
    paddingVertical: 18,
    borderRadius: 23,
    gap: 8,
  },

  searchInput: {
    flex: 1,
    fontSize: 14,
  },

  filterButton: {
    backgroundColor: "#FFD54F",
    padding: 12,
    borderRadius: 25,
  },

  /* BOTTOM */
  bottomContainer: {
    backgroundColor: "#fff",
    margin: 20,
    padding: 20,
    borderRadius: 20,
  },

  offerHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },

  offerTitle: {
    fontSize: 16,
    fontWeight: "600",
  },

  seeAll: {
    color: "#999",
    fontSize: 14,
  },

  offerMainText: {
    fontSize: 22,
    fontWeight: "700",
    marginTop: 10,
  },

  offerSubText: {
    color: "#666",
    marginVertical: 8,
  },

  orderButton: {
    backgroundColor: "#000",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    alignSelf: "flex-start",
    marginTop: 10,
  },

  orderButtonText: {
    color: "#fff",
    fontWeight: "600",
  },
});