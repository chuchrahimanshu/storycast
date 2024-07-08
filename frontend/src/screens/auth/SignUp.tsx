import {FC} from 'react';
import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import {Formik} from 'formik';

import {colors} from '../../utils/colors.util';

interface SignUpInterface {
  name: string;
  email: string;
  password: string;
}

const SignUp: FC = () => {
  const initialState: SignUpInterface = {
    name: '',
    email: '',
    password: '',
  };

  return (
    <SafeAreaView style={styles.container}>
      <Formik
        initialValues={initialState}
        onSubmit={(values): void => {
          console.log(values);
        }}>
        {({handleSubmit, handleChange, values}) => (
          <View style={styles.formContainer}>
            <Text style={styles.label}>Full Name</Text>
            <TextInput
              placeholder=""
              placeholderTextColor={colors.INACTIVE_CONTRAST}
              style={styles.input}
              value={values.name}
              onChangeText={handleChange('name')}
            />
            <Text style={styles.label}>Email Address</Text>
            <TextInput
              placeholder="example@example.com"
              placeholderTextColor={colors.INACTIVE_CONTRAST}
              style={styles.input}
              keyboardType="email-address"
              autoCapitalize="none"
              value={values.email}
              onChangeText={handleChange('email')}
            />
            <Text style={styles.label}>Password</Text>
            <TextInput
              placeholder="Create a strong password"
              placeholderTextColor={colors.INACTIVE_CONTRAST}
              style={styles.input}
              autoCapitalize="none"
              secureTextEntry
              value={values.password}
              onChangeText={handleChange('password')}
            />
            <Button onPress={() => handleSubmit()} title="Sign Up" />
          </View>
        )}
      </Formik>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.PRIMARY,
    justifyContent: 'center',
    alignItems: 'center',
  },
  formContainer: {
    width: '100%',
    paddingHorizontal: 20,
  },
  input: {
    borderWidth: 2,
    borderColor: colors.SECONDARY,
    height: 45,
    borderRadius: 25,
    color: colors.CONTRAST,
    paddingHorizontal: 20,
    marginBottom: 15,
    marginTop: 8,
  },
  label: {
    color: colors.CONTRAST,
  },
});

export default SignUp;
