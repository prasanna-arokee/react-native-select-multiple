import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  row: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    paddingVertical:15,
    alignContent:'space-between',
    justifyContent:'space-between',
    paddingHorizontal:5
  },
  checkbox: {
    width: 32,
    height: 32,
    alignContent:'flex-end',
  },
  label: {
    fontSize:18,
    fontFamily:'OpenSans-Bold',
    color:'#000000',
  }
})
