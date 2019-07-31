import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff'
  },
  containerHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start'
  },
  iconsLeft: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  iconsRight: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  title: {
    paddingLeft: 10,
    fontSize: 24
  },
  rotationIcons: {
    transform: [{ rotate: '90deg' }]
  },
  iconSend: {
    marginHorizontal: 20
  },
  iconBack: {
    paddingLeft: 20
  },
  containerFields: {
    flexDirection: 'row',
    height: 50,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingLeft: 20,
    borderColor: '#E3E3E3',
    borderBottomWidth: 1
  },
  textField: {
    fontSize: 18,
    color: '#5F6267',
    fontWeight: '400',
    marginRight: 20
  },
  fieldInput: {
    flex: 1,
    height: 50
  },
  containerArea: {
    flexDirection: 'row',
    height: 50,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingLeft: 20,
  },
  textarea: {
    fontSize: 20
  }

});
export default styles;
