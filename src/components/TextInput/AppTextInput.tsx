import {
  View,
  Text,
  TextInputProps,
  TextInput,
  ViewStyle,
  TextStyle,
  StyleProp,
  ImageSourcePropType,
  Image,
  Pressable,
} from 'react-native';
import React, {Ref, useEffect, useState} from 'react';
import styles from './styles';
import {Colors} from '../../constants';

// containerStyle prop handles the main container's styles
// inputContainerStyle prop handles (text input, left icon and right icon) container styles
// style prop handles the text input styles

const PASSWORD_EYE_OPEN_ICON: ImageSourcePropType = {
  uri: 'https://img.icons8.com/ios-glyphs/30/000000/visible--v1.png',
};
const PASSWORD_EYE_CLOSED_ICON: ImageSourcePropType = {
  uri: 'https://img.icons8.com/material-rounded/24/000000/closed-eye.png',
};

type AppTextInputProps = TextInputProps & {
  inputRef?: Ref<TextInput>;
  title?: string;
  titleStyle?: StyleProp<TextStyle>;
  message?: string;
  messageStyles?: StyleProp<TextStyle>;
  iconLeft?: ImageSourcePropType;
  iconLeftStyle?: StyleProp<ViewStyle>;
  iconRight?: ImageSourcePropType;
  iconRightStyle?: StyleProp<ViewStyle>;
  inputContainerStyle?: StyleProp<ViewStyle>;
  containerStyle?: StyleProp<ViewStyle>;
};

const AppTextInput: React.FC<AppTextInputProps> = props => {
  const [secureText, setSecureText] = useState(false);

  useEffect(() => {
    props.secureTextEntry && setSecureText(props.secureTextEntry);
  }, [props.secureTextEntry]);

  return (
    <View style={[styles.mainContainer, props.containerStyle]}>
      {/* Title */}
      {props.title && (
        <Text style={[styles.title, props.titleStyle]}>{props.title}</Text>
      )}

      <View style={[styles.inputContainer, props.inputContainerStyle]}>
        {/* Left Icon  */}
        {props.iconLeft && (
          <View style={[styles.iconContainer, props.iconLeftStyle]}>
            <Image
              source={props.iconLeft as ImageSourcePropType}
              style={styles.icon}
              resizeMode="contain"
            />
          </View>
        )}

        {/* Text Input */}
        <TextInput
          {...props}
          secureTextEntry={secureText}
          style={[
            {flex: 1, color: Colors.black},
            !props.iconRight && !props.secureTextEntry && {paddingRight: 12},
            props.style,
          ]}
        />

        {/* Right Icon  */}
        {props.iconRight && (
          <View style={[styles.iconContainer, props.iconRightStyle]}>
            <Image
              source={props.iconRight as ImageSourcePropType}
              style={styles.icon}
            />
          </View>
        )}

        {props.secureTextEntry && (
          <Pressable
            onPress={() => {
              setSecureText(current => !current);
            }}
            style={({pressed}) => [
              {
                opacity: pressed ? 0.65 : 1,
              },
              styles.iconContainer,
              props.iconRightStyle,
            ]}>
            <Image
              source={
                secureText ? PASSWORD_EYE_CLOSED_ICON : PASSWORD_EYE_OPEN_ICON
              }
              style={styles.icon}
            />
          </Pressable>
        )}
      </View>

      {/* Message */}
      {!!props.message && (
        <Text
          style={[
            {textAlign: 'right', marginTop: 2, color: 'red'},
            props.messageStyles,
          ]}>
          {props.message}
        </Text>
      )}
    </View>
  );
};

export default AppTextInput;
