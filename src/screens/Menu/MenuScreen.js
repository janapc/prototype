import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './styles';
import menu from '../utils/menu.json';

export default function MenuScreen() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.containerHeader}>
            <Text style={styles.textHeader}> Gmail </Text>
          </View>
          <View style={styles.category}>
            <Text style={styles.categoryText}>ALL OF THE BULLETS</Text>
          </View>
          <View>
            {menu.map(item => (
              <View key={item.id} style={styles.containerMenu}>
                <View style={styles.listMenu1}>
                  <Icon name={item.icon} size={24} color="#5F6267" />
                  <Text style={styles.listText}>{item.title}</Text>
                </View>
                <View style={styles.listMenu2}>
                  <Text style={styles.listMessages}>{item.messages}</Text>
                </View>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
