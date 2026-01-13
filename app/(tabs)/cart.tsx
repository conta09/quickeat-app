import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const Cart = () => {
  const [quantity, setQuantity] = useState(1);
  const [instructions, setInstructions] = useState('');
  
  // Dummy order data
  const order = {
    id: '#ORD-456',
    restaurant: 'Burger Palace',
    items: [
      {
        id: 'item1',
        name: 'Classic Cheeseburger',
        description: 'Beef patty, cheese, lettuce, tomato, special sauce',
        price: 12.99,
        image: require('../../assets/images/burger.jpg'), // Update path as needed
        quantity: quantity,
      }
    ],
    deliveryFee: 2.99,
    tax: 1.50,
    estimatedTime: '25-35 min',
    deliveryAddress: 'Sterling place, Brooklyn, NY 11217',
  };

  const subtotal = order.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const total = subtotal + order.deliveryFee + order.tax;

  const increaseQuantity = () => setQuantity(prev => prev + 1);
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };

  const handlePlaceOrder = () => {
    console.log('Order placed:', { ...order, items: order.items.map(item => ({...item, quantity})) });
    // You'll implement the backend logic here
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Your Cart</Text>
        <Text style={styles.orderId}>{order.id}</Text>
      </View>

      <ScrollView 
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Restaurant Info */}
        <View style={styles.restaurantCard}>
          <View style={styles.restaurantHeader}>
            <Text style={styles.restaurantName}>{order.restaurant}</Text>
            <View style={styles.timeBadge}>
              <Ionicons name="time-outline" size={14} color="#fff" />
              <Text style={styles.timeText}>{order.estimatedTime}</Text>
            </View>
          </View>
          <Text style={styles.deliveryAddress}>
            <Ionicons name="location-outline" size={14} color="#666" /> {order.deliveryAddress}
          </Text>
        </View>

        {/* Order Items */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Your Order</Text>
          <View style={styles.orderCard}>
            <View style={styles.itemContainer}>
              <Image 
                source={order.items[0].image} 
                style={styles.itemImage}
                resizeMode="cover"
              />
              <View style={styles.itemDetails}>
                <Text style={styles.itemName}>{order.items[0].name}</Text>
                <Text style={styles.itemDescription}>{order.items[0].description}</Text>
                <Text style={styles.itemPrice}>${order.items[0].price.toFixed(2)}</Text>
              </View>
            </View>

            {/* Quantity Controls */}
            <View style={styles.quantityContainer}>
              <TouchableOpacity 
                style={styles.quantityButton}
                onPress={decreaseQuantity}
                disabled={quantity === 1}
              >
                <Ionicons 
                  name="remove" 
                  size={20} 
                  color={quantity === 1 ? '#ccc' : '#111'} 
                />
              </TouchableOpacity>
              <Text style={styles.quantityText}>{quantity}</Text>
              <TouchableOpacity 
                style={styles.quantityButton}
                onPress={increaseQuantity}
              >
                <Ionicons name="add" size={20} color="#111" />
              </TouchableOpacity>
            </View>
          </View>

          {/* Special Instructions */}
          <View style={styles.instructionsCard}>
            <Text style={styles.instructionsTitle}>
              <Ionicons name="restaurant-outline" size={16} color="#111" /> Special Instructions
            </Text>
            <TouchableOpacity style={styles.instructionsButton}>
              <Text style={styles.instructionsButtonText}>
                Add cooking instructions or requests
              </Text>
              <Ionicons name="chevron-forward" size={16} color="#999" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Order Summary */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Order Summary</Text>
          <View style={styles.summaryCard}>
            <View style={styles.summaryRow}>
              <Text style={styles.summaryLabel}>Subtotal</Text>
              <Text style={styles.summaryValue}>${subtotal.toFixed(2)}</Text>
            </View>
            <View style={styles.summaryRow}>
              <Text style={styles.summaryLabel}>Delivery Fee</Text>
              <Text style={styles.summaryValue}>${order.deliveryFee.toFixed(2)}</Text>
            </View>
            <View style={styles.summaryRow}>
              <Text style={styles.summaryLabel}>Tax</Text>
              <Text style={styles.summaryValue}>${order.tax.toFixed(2)}</Text>
            </View>
            <View style={styles.divider} />
            <View style={[styles.summaryRow, styles.totalRow]}>
              <Text style={styles.totalLabel}>Total</Text>
              <Text style={styles.totalValue}>${total.toFixed(2)}</Text>
            </View>
          </View>
        </View>

        {/* Payment Method */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Payment Method</Text>
          <TouchableOpacity style={styles.paymentCard}>
            <View style={styles.paymentLeft}>
              <View style={styles.paymentIcon}>
                <Ionicons name="card" size={20} color="#fff" />
              </View>
              <View>
                <Text style={styles.paymentTitle}>Credit Card</Text>
                <Text style={styles.paymentSubtitle}>**** 1234</Text>
              </View>
            </View>
            <Ionicons name="chevron-forward" size={20} color="#999" />
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Bottom Order Button */}
      <View style={styles.bottomContainer}>
        <TouchableOpacity 
          style={styles.orderButton}
          onPress={handlePlaceOrder}
          activeOpacity={0.9}
        >
          <View style={styles.orderButtonLeft}>
            <Text style={styles.orderButtonText}>Place Order</Text>
            <Text style={styles.orderButtonSubtext}>${total.toFixed(2)} • {order.estimatedTime}</Text>
          </View>
          <Ionicons name="arrow-forward" size={24} color="#fff" />
        </TouchableOpacity>
      </View>
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
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  headerTitle: {
    color: '#fff',
    fontSize: 23,
    fontWeight: '500',
    marginBottom: 5,
  },
  orderId: {
    color: '#999',
    fontSize: 14,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    padding: 20,
    paddingBottom: 100, // Space for bottom button
  },
  restaurantCard: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 20,
    marginBottom: 20,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  restaurantHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  restaurantName: {
    fontSize: 18,
    fontWeight: '700',
    color: '#111',
  },
  timeBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#4CAF50',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    gap: 5,
  },
  timeText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '600',
  },
  deliveryAddress: {
    fontSize: 14,
    color: '#666',
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#111',
    marginBottom: 15,
    marginLeft: 5,
  },
  orderCard: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 15,
    marginBottom: 15,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  itemContainer: {
    flexDirection: 'row',
    marginBottom: 15,
  },
  itemImage: {
    width: 80,
    height: 80,
    borderRadius: 12,
    marginRight: 15,
  },
  itemDetails: {
    flex: 1,
    justifyContent: 'center',
  },
  itemName: {
    fontSize: 16,
    fontWeight: '700',
    color: '#111',
    marginBottom: 5,
  },
  itemDescription: {
    fontSize: 12,
    color: '#666',
    marginBottom: 8,
    lineHeight: 16,
  },
  itemPrice: {
    fontSize: 16,
    fontWeight: '700',
    color: '#111',
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f9f9f9',
    borderRadius: 25,
    paddingVertical: 8,
    alignSelf: 'center',
    width: 120,
  },
  quantityButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  quantityText: {
    fontSize: 18,
    fontWeight: '700',
    color: '#111',
    marginHorizontal: 20,
    minWidth: 20,
    textAlign: 'center',
  },
  instructionsCard: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 20,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  instructionsTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#111',
    marginBottom: 15,
  },
  instructionsButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#f9f9f9',
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderRadius: 12,
  },
  instructionsButtonText: {
    fontSize: 14,
    color: '#999',
  },
  summaryCard: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 20,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  summaryLabel: {
    fontSize: 14,
    color: '#666',
  },
  summaryValue: {
    fontSize: 14,
    color: '#111',
    fontWeight: '500',
  },
  divider: {
    height: 1,
    backgroundColor: '#f0f0f0',
    marginVertical: 15,
  },
  totalRow: {
    marginBottom: 0,
  },
  totalLabel: {
    fontSize: 18,
    fontWeight: '700',
    color: '#111',
  },
  totalValue: {
    fontSize: 22,
    fontWeight: '700',
    color: '#111',
  },
  paymentCard: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  paymentLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  paymentIcon: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#111',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  paymentTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#111',
    marginBottom: 2,
  },
  paymentSubtitle: {
    fontSize: 14,
    color: '#666',
  },
  bottomContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: '#f0f0f0',
    paddingBottom: 30,
  },
  orderButton: {
    backgroundColor: '#111',
    borderRadius: 16,
    paddingHorizontal: 25,
    paddingVertical: 18,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  orderButtonLeft: {
    flex: 1,
  },
  orderButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 4,
  },
  orderButtonSubtext: {
    color: '#ccc',
    fontSize: 12,
  },
});

export default Cart;