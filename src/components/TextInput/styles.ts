import {StyleSheet} from 'react-native';

const ICON_SIZE = 18;

const styles = StyleSheet.create({
  mainContainer: {
    width: '100%',
  },
  title: {paddingBottom: 4},
  iconContainer: {width: ICON_SIZE, height: ICON_SIZE, marginHorizontal: 12},
  passwordIcon: {marginRight: 12},
  icon: {width: '100%', height: '100%'},
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
