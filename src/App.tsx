import {ImageSourcePropType, View} from 'react-native';
import React from 'react';
import {AppButton, AppTextInput} from './components';
import {Colors} from './constants';

const EMAIL_ICON: ImageSourcePropType = {
  uri: 'https://img.icons8.com/material-outlined/24/000000/mail.png',
};
const PASSWORD_ICON: ImageSourcePropType = {
  uri: 'https://img.icons8.com/ios-glyphs/30/000000/password--v1.png',
};

const App = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <AppTextInput
        placeholder="Email"
        placeholderTextColor={Colors.mediumGray}
        iconLeft={EMAIL_ICON}
        containerStyle={{width: '80%', alignSelf: 'center', borderWidth: 0}}
        inputContainerStyle={{
          borderWidth: 1,
          borderColor: Colors.mediumGray,
          borderRadius: 12,
        }}
        multiline
        style={{borderWidth: 0}}
      />

      <AppTextInput
        placeholder="Password"
        placeholderTextColor={Colors.mediumGray}
        iconLeft={PASSWORD_ICON}
        secureTextEntry={true}
        containerStyle={{
          width: '80%',
          alignSelf: 'center',
          marginTop: 12,
          borderWidth: 0,
        }}
        inputContainerStyle={{
          borderWidth: 1,
          borderColor: Colors.mediumGray,
          borderRadius: 12,
        }}
        style={{borderWidth: 0}}
      />

      <AppButton
        title="Click here to get the token"
        titleStyle={{fontSize: 16, fontWeight: 'bold'}}
        borderColor={Colors.mediumGray}
        backGroundColor={'gold'}
        buttonStyle={{width: '70%', marginTop: 16}}
      />
    </View>
  );
};

export default App;
