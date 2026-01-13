import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

const Orders = () => {
  // Sample data - you'll replace this with your actual data later
  const orders = [
    {
      id: '#ORD-001',
      restaurant: 'Burger Palace',
      status: 'Delivered',
      date: 'Today, 2:30 PM',
      items: '2x Cheeseburger, 1x Fries',
      total: '$24.50',
      rating: 5,
    },
    {
      id: '#ORD-002',
      restaurant: 'Sushi Zen',
      status: 'Preparing',
      date: 'Yesterday, 7:15 PM',
      items: 'Sushi Platter, Miso Soup',
      total: '$38.75',
      rating: null,
    },
    {
      id: '#ORD-003',
      restaurant: 'Pizza Corner',
      status: 'On the way',
      date: 'Oct 15, 12:45 PM',
      items: 'Large Pepperoni Pizza',
      total: '$19.99',
      rating: 4,
    },
    {
      id: '#ORD-004',
      restaurant: 'Taco Fiesta',
      status: 'Delivered',
      date: 'Oct 12, 6:20 PM',
      items: '3x Tacos, Guacamole',
      total: '$16.80',
      rating: 5,
    },
    {
      id: '#ORD-005',
      restaurant: 'Coffee Brew',
      status: 'Delivered',
      date: 'Oct 10, 9:00 AM',
      items: '2x Latte, Croissant',
      total: '$12.50',
      rating: 4,
    },
  ];

  const getStatusColor = (status) => {
    switch(status) {
      case 'Delivered': return '#4CAF50';
      case 'On the way': return '#FF9800';
      case 'Preparing': return '#2196F3';
      default: return '#666';
    }
  };

  const getStatusIcon = (status) => {
    switch(status) {
      case 'Delivered': return 'checkmark-circle';
      case 'On the way': return 'bicycle';
      case 'Preparing': return 'time';
      default: return 'ellipsis-horizontal';
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>My Orders</Text>
        
      </View>

      <ScrollView 
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Stats Cards */}
        <View style={styles.statsContainer}>
          <View style={styles.statCard}>
            <View style={[styles.statIcon, { backgroundColor: 'rgba(76, 175, 80, 0.1)' }]}>
              <Ionicons name="checkmark-circle" size={24} color="#4CAF50" />
            </View>
            <Text style={styles.statNumber}>42</Text>
            <Text style={styles.statLabel}>Delivered</Text>
          </View>
          
          <View style={styles.statCard}>
            <View style={[styles.statIcon, { backgroundColor: 'rgba(255, 152, 0, 0.1)' }]}>
              <Ionicons name="bicycle" size={24} color="#FF9800" />
            </View>
            <Text style={styles.statNumber}>3</Text>
            <Text style={styles.statLabel}>Active</Text>
          </View>
          
          <View style={styles.statCard}>
            <View style={[styles.statIcon, { backgroundColor: 'rgba(33, 150, 243, 0.1)' }]}>
              <Ionicons name="time" size={24} color="#2196F3" />
            </View>
            <Text style={styles.statNumber}>1</Text>
            <Text style={styles.statLabel}>Preparing</Text>
          </View>
        </View>

        {/* Recent Orders Title */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Recent Orders</Text>
          <TouchableOpacity>
            <Text style={styles.seeAll}>See All</Text>
          </TouchableOpacity>
        </View>

        {/* Orders List */}
        {orders.map((order, index) => (
          <TouchableOpacity key={order.id} style={styles.orderCard}>
            <View style={styles.orderHeader}>
              <View>
                <Text style={styles.orderId}>{order.id}</Text>
                <Text style={styles.restaurantName}>{order.restaurant}</Text>
              </View>
              <View style={[styles.statusBadge, { backgroundColor: getStatusColor(order.status) + '20' }]}>
                <Ionicons 
                  name={getStatusIcon(order.status)} 
                  size={14} 
                  color={getStatusColor(order.status)} 
                />
                <Text style={[styles.statusText, { color: getStatusColor(order.status) }]}>
                  {order.status}
                </Text>
              </View>
            </View>

            <View style={styles.orderDetails}>
              <View style={styles.detailRow}>
                <Ionicons name="time-outline" size={16} color="#666" />
                <Text style={styles.detailText}>{order.date}</Text>
              </View>
              <View style={styles.detailRow}>
                <Ionicons name="fast-food-outline" size={16} color="#666" />
                <Text style={styles.detailText}>{order.items}</Text>
              </View>
              <View style={styles.detailRow}>
                <Ionicons name="cash-outline" size={16} color="#666" />
                <Text style={styles.detailText}>{order.total}</Text>
              </View>
            </View>

            <View style={styles.orderFooter}>
              {order.rating ? (
                <View style={styles.ratingContainer}>
                  {[...Array(5)].map((_, i) => (
                    <Ionicons 
                      key={i}
                      name={i < order.rating ? "star" : "star-outline"}
                      size={16}
                      color="#FFD54F"
                    />
                  ))}
                  <Text style={styles.ratedText}>Rated</Text>
                </View>
              ) : (
                <TouchableOpacity style={styles.rateButton}>
                  <Text style={styles.rateButtonText}>Rate Order</Text>
                </TouchableOpacity>
              )}
              
              <TouchableOpacity style={styles.reorderButton}>
                <Text style={styles.reorderButtonText}>Reorder</Text>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
  },
  header: {
    backgroundColor: '#111',
    paddingHorizontal: 20,
    paddingTop: 100,
    paddingBottom: 20,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerTitle: {
    color: '#fff',
    fontSize: 26,
    fontWeight: '700',
  },
  
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    padding: 20,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 25,
  },
  statCard: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 15,
    alignItems: 'center',
    marginHorizontal: 5,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  statIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  statNumber: {
    fontSize: 22,
    fontWeight: '700',
    color: '#111',
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 12,
    color: '#666',
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#111',
  },
  seeAll: {
    color: '#999',
    fontSize: 14,
  },
  orderCard: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 20,
    marginBottom: 15,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  orderHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 15,
  },
  orderId: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
  },
  restaurantName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#111',
  },
  statusBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 12,
    gap: 4,
  },
  statusText: {
    fontSize: 12,
    fontWeight: '600',
  },
  orderDetails: {
    backgroundColor: '#f9f9f9',
    borderRadius: 12,
    padding: 15,
    marginBottom: 15,
  },
  detailRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  detailText: {
    fontSize: 14,
    color: '#666',
    marginLeft: 8,
    flex: 1,
  },
  orderFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  ratedText: {
    fontSize: 12,
    color: '#666',
    marginLeft: 8,
  },
  rateButton: {
    backgroundColor: '#f0f0f0',
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 20,
  },
  rateButtonText: {
    fontSize: 14,
    color: '#666',
    fontWeight: '500',
  },
  reorderButton: {
    backgroundColor: '#111',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
  },
  reorderButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
});

export default Orders;