import {
  Text,
  Pressable,
  PressableProps,
  StyleProp,
  TextStyle,
  ColorValue,
  ViewStyle,
  PressableStateCallbackType,
} from 'react-native';
import React, {useMemo} from 'react';
import {Colors} from '../../constants';
import styles from './styles';

const BUTTON_HEIGHT = 45;
const BUTTON_PRESSED_OPACITY = 0.75;
const BUTTON_DISABLED_OPACITY = 0.6;
const DEFAULT_BUTTON_BACKGROUND_COLOR = Colors.white;

type AppButtonProps = PressableProps & {
  title?: string;
  titleStyle?: StyleProp<TextStyle>;
  buttonStyle?: StyleProp<ViewStyle>;
  backGroundColor?: ColorValue;
  borderColor?: ColorValue;
};

const AppButton: React.FC<AppButtonProps> = props => {
  const buttonBackgroundColor = useMemo(
    () => props.backGroundColor ?? DEFAULT_BUTTON_BACKGROUND_COLOR,
    [props.backGroundColor],
  );

  const pressableStyles: (
    state: PressableStateCallbackType,
  ) => StyleProp<ViewStyle> = useMemo(
    () =>
      ({pressed}) =>
        [
          {
            height: BUTTON_HEIGHT,
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            borderWidth: props.borderColor ? 1 : 0,
            borderColor: props.borderColor,
            borderRadius: BUTTON_HEIGHT / 2,
            backgroundColor: buttonBackgroundColor,
            marginTop: 10,
          },
          pressed && {
            opacity: BUTTON_PRESSED_OPACITY,
          },
          props.disabled && {opacity: BUTTON_DISABLED_OPACITY},
          props.buttonStyle,
        ],
    [props.borderColor, props.disabled, props.buttonStyle],
  );

  return (
    <Pressable {...props} style={pressableStyles}>
      <Text style={[styles.title, props.titleStyle]}>{props.title}</Text>
    </Pressable>
  );
};

AppButton.defaultProps = {
  title: '',
};

export default AppButton;
