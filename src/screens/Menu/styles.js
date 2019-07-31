import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: '#fff'
  },
  containerHeader: {
    marginLeft: 20,
    paddingVertical: 10,
    borderColor: '#E3E3E3',
    borderBottomWidth: 1
  },
  textHeader: {
    color: '#D23227',
    fontSize: 24
  },
  category: {
    marginTop: 5,
    marginHorizontal: 20
  },
  categoryText: {
    fontSize: 12,
    color: '#5F6267'
  },
  containerMenu: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginTop: 20
  },
  listMenu1: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  listMenu2: {
    alignSelf: 'center'
  },
  listText: {
    color: '#5F6267',
    marginLeft: 20,
    fontSize: 16
  },
  listMessages: {
    color: '#5F6267'
  }
});
export default styles;
