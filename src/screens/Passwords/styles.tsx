import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000'
  },
  boxTop: {
    marginHorizontal: 15,
    flexDirection: 'row', 
    justifyContent: 'flex-start', 
    alignItems: 'center'
  },
  buttonEye: {
    margin: 5,
    justifyContent: 'flex-end',
    alignSelf: 'flex-end'
  },
  txtTitulo: {
    marginTop: '25%',
    color: "#FFF",
    fontSize: 30,
    fontWeight: 'bold'
  },
  boxPasswords: {
    flex: 1,
    marginTop: 15,
    borderTopStartRadius: 15,
    borderTopEndRadius: 15,
    backgroundColor: '#ffffff'
  },
  viewPassword: {
    flexDirection: 'row',
    backgroundColor: '#000',
    margin: 5,
    padding: 8,
    borderRadius: 5,
    justifyContent: 'space-between',
  },
  viewEyePassword:{
    backgroundColor: "#FFF",
    height: "80%",
    marginTop: 4,
    borderRadius: 5,
    width: "100%"
  },
  txtPassword: {
    alignSelf: 'flex-start',
    color: "#FFF",
    fontSize: 18
  }
});