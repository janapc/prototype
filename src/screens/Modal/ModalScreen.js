import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Modal,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './styles';

const perfil = require('../../assets/perfil.jpg');

export default function ModalScreen() {
  const [modalVisible, setModalVisible] = useState(false);

  function handleModal(visible) {
    setModalVisible(visible);
  }
  return (
    <>
      <Modal animationType="fade" transparent visible={modalVisible}>
        <View style={styles.container}>
          <View style={styles.containerModal}>
            <Icon name="close" style={styles.close} size={24} color="#757575" onPress={() => handleModal(!modalVisible)} />
            <View style={styles.containerInfo}>
              <View style={styles.containerUser}>
                <Image
                  resizeMode="cover"
                  borderRadius={14}
                  source={perfil}
                  style={[styles.image, { marginLeft: 10 }]}
                />
                <View style={{ marginLeft: 10 }}>
                  <Text style={styles.title}>Test</Text>
                  <Text style={styles.subTitle}>Test@test.com</Text>
                </View>
              </View>
              <View style={styles.containerButton}>
                <TouchableOpacity>
                  <Text style={styles.title}>manage your account</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.border} />
              <View style={styles.containerServices}>
                <View style={styles.service}>
                  <Icon name="account-plus-outline" style={{ marginRight: 10 }} size={20} color="#757575" />
                  <Text>Add another account</Text>
                </View>
                <View style={styles.service}>
                  <Icon name="account-check-outline" style={{ marginRight: 10 }} size={20} color="#757575" />
                  <Text>Manage accounts on this device</Text>
                </View>
              </View>
              <View style={styles.border} />
            </View>
            <View style={styles.outherService}>
              <Text style={styles.titleService}>Privacy Policy</Text>
              <View style={styles.separator} />
              <Text style={styles.titleService}>Service Terms</Text>
            </View>
          </View>
        </View>
      </Modal>
      <TouchableOpacity onPress={() => handleModal(true)}>
        <Image
          resizeMode="cover"
          borderRadius={14}
          source={perfil}
          style={styles.image}
        />
      </TouchableOpacity>
    </>
  );
}
