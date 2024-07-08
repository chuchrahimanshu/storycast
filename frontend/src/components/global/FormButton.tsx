import {FC} from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';
import {colors} from '../../utils/colors.util';

interface Props {
  title: string;
  onPress(): void;
}

const FormButton: FC<Props> = props => {
  return (
    <Pressable style={styles.container} onPress={props.onPress}>
      <Text style={styles.title}>{props.title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: colors.SECONDARY,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
  },
  title: {
    color: colors.CONTRAST,
    fontSize: 18,
    fontWeight: '600',
    paddingTop: 7,
    paddingBottom: 9,
  },
});

export default FormButton;
