import React from 'react';
import { View, Text } from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './styles';


export default function EmailScreen({ item }) {
  function leftActions() {
    return (
      <View style={styles.leftAction}>
        <Icon name="trash-can-outline" size={22} color="white" />
      </View>
    );
  }

  return (
    <Swipeable renderLeftActions={leftActions}>
      <View style={styles.container}>
        <View key={item.id} style={styles.containerEmail}>
          <View style={[styles.icon, { backgroundColor: `${item.color}` }]}>
            <Text style={styles.textIcon}>{item.icon}</Text>
          </View>
          <View style={styles.description}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.color}>{item.subTitle}</Text>
            <Text numberOfLines={1} ellipsizeMode="tail" style={styles.color}>
              {item.description}
            </Text>
          </View>
          <View style={styles.others}>
            <Text style={styles.color}>{item.time}</Text>
            <View>{item.star && <Icon name="star-outline" size={20} color="#EECF89" />}</View>
          </View>
        </View>
      </View>
    </Swipeable>
  );
}
