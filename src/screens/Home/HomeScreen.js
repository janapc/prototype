import React, { useState, useEffect } from 'react';
import {
  View,
  Image,
  SafeAreaView,
  TextInput,
  Text,
  FlatList,
  TouchableOpacity,
  ScrollView,
  StatusBar
} from 'react-native';
import { DrawerActions } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './styles';
import emails from '../utils/emails.json';
import EmailScreen from './HandleEmail/EmailScreen';
import ModalScreen from '../Modal/ModalScreen';
import hasnotch from '../utils/hasNotch';

const btnIcon = require('../../assets/button32dp.png');

export default function HomeScreen(props) {
  const [text, setText] = useState('');
  const [dataSource, setDataSource] = useState([]);
  const [arrayholder, setArrayholder] = useState([]);

  const { navigation } = props;

  useEffect(() => { renderList(); }, []);

  function renderList() {
    setDataSource(emails);
    setArrayholder(emails);
  }

  function searchFilterFunction(onText) {
    const newData = arrayholder.filter((item) => {
      const itemData = `${item.title.toUpperCase()}`;
      const textData = onText.toUpperCase();
      return itemData.indexOf(textData) === 0;
    });
    setDataSource(newData);
    setText(onText);
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <View style={[styles.container, { marginTop: hasnotch() }]}>
        <ScrollView>
          <View style={styles.containerSearch}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Icon name="menu" size={29} style={{ alignSelf: 'center' }} color="#757575" onPress={() => navigation.dispatch(DrawerActions.openDrawer())} />
              <TextInput
                style={{ marginLeft: 20 }}
                placeholder="Find email"
                onChangeText={onText => searchFilterFunction(onText)}
                value={text}
              />
            </View>
            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-end' }}>
              <ModalScreen />
            </View>
          </View>

          <View>
            <Text style={styles.textInbox}>Inbox</Text>
            <FlatList
              data={dataSource.sort((a, b) => a.time < b.time)}
              keyExtractor={item => item.id.toString()}
              renderItem={item => <EmailScreen {...item} />}
            />
          </View>
        </ScrollView>
      </View>

      <View style={styles.containerAdd}>
        <TouchableOpacity onPress={() => navigation.navigate('Send')}>
          <Image
            resizeMode="cover"
            borderRadius={14}
            source={btnIcon}
            style={styles.image}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
