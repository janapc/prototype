import React, { useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Platform,
  TextInput,
  TouchableOpacity,
  StatusBar
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import styles from './styles';
import hasNotch from '../utils/hasNotch';

export default function SendScreen(props) {
  const [back] = useState(Platform.OS === 'ios' ? 'ios-arrow-back' : 'md-arrow-back');
  const [attach] = useState(Platform.OS === 'ios' ? 'ios-attach' : 'md-attach');
  const [send] = useState(Platform.OS === 'ios' ? 'ios-send' : 'md-send');
  const [fields] = useState([
    { id: 1, placeholder: 'From' },
    { id: 2, placeholder: 'To' },
    { id: 3, placeholder: 'Subject' }
  ]);
  const [text, setText] = useState();

  function onChange(onText) {
    setText(onText);
  }

  const { navigation } = props;
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <View style={{ marginTop: hasNotch() }}>
        <View style={styles.containerHeader}>
          <View style={styles.iconsLeft}>
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
              <Icon name={back} size={28} color="#5F6267" style={styles.iconBack} />
            </TouchableOpacity>
            {Platform.OS === 'Android' ? <Text style={styles.title}> Write </Text> : <Text />}
          </View>
          <View style={styles.iconsRight}>
            <Icon name={attach} size={28} color="#5F6267" style={styles.rotationIcons} />
            <Icon name={send} size={28} color="#5F6267" style={styles.iconSend} />
            {Platform.OS === 'Android' ? <Icon name="md-more" size={28} color="#5F6267" style={styles.rotationIcons} /> : <Icon />}
          </View>
        </View>
        {fields.map(item => (
          <View key={item.id} style={styles.containerFields}>
            <Text style={styles.textField}>{item.placeholder}</Text>
            <TextInput
              onChangeText={onText => onChange(onText)}
              value={text}
              style={styles.fieldInput}
            />
          </View>
        ))}

        <View style={styles.containerArea}>
          <TextInput
            placeholder="Write e-mail"
            placeholderTextColor="#999"
            onChangeText={onText => onChange(onText)}
            value={text}
            maxLength={40}
            style={styles.textarea}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
