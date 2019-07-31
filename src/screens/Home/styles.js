import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1,
    backgroundColor: '#fff'
  },
  containerSearch: {
    paddingHorizontal: 15,
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#DEDEDE',
    height: 45,
    marginHorizontal: 5
  },
  image: {
    width: 30,
    height: 30
  },
  textInbox: {
    marginVertical: 15,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    color: '#7C7E82'
  },
  containerAdd: {
    position: 'absolute',
    bottom: 10,
    right: 20,
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
    height: 50,
    borderRadius: 1000,
    backgroundColor: 'white',
    shadowColor: '#000000',
    shadowOpacity: 0.2,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 1
    }
  },
  icon: {
    width: 40,
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    borderRadius: 1000,
    marginRight: 10
  }
});
export default styles;
