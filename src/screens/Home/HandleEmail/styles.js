import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 5
  },
  containerEmail: {
    margin: 15,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  icon: {
    width: 40,
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    borderRadius: 1000,
    marginRight: 10
  },
  description: {
    flexDirection: 'column',
    flexShrink: 1
  },
  color: {
    color: '#757575'
  },
  others: {
    alignItems: 'center'
  },
  title: {
    color: '#454649',
    fontSize: 16,
    fontWeight: 'bold'
  },
  textIcon: {
    color: 'white',
    fontSize: 24,
    fontWeight: '500'
  },
  leftAction: {
    flex: 1,
    backgroundColor: '#D83025',
    justifyContent: 'center',
    paddingLeft: 30
  }
});
export default styles;
