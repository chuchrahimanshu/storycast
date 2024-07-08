// External Import Section
import {FC, useState} from 'react';
import {Pressable, SafeAreaView, Text, TextInput, View} from 'react-native';
import {Formik} from 'formik';
import Icon from 'react-native-vector-icons/Ionicons';

// Internal Import Section
import {colors} from 'src/utils/colors.util';
import FormButton from 'src/components/global/FormButton';
import {styles} from 'src/styles/screens/auth.styles';
import {signUpValidationSchema} from 'src/validators/screens/auth.screen.validator';
import {SignUpInterface} from 'src/interfaces/screens/auth.screen.interface';

// Component Section
const SignUp: FC = () => {
  const initialState: SignUpInterface = {
    name: '',
    email: '',
    password: '',
  };

  const [showPassword, setShowPassword] = useState(false);
  const handleSignInNavigation = () => {};

  // Returning the Component JSX
  return (
    <SafeAreaView style={styles.container}>
      <Formik
        initialValues={initialState}
        onSubmit={(values): void => {
          console.log(values);
        }}
        validationSchema={signUpValidationSchema}>
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
            <View style={styles.iconContainer}>
              <TextInput
                placeholder="Create a strong password"
                placeholderTextColor={colors.INACTIVE_CONTRAST}
                style={styles.input}
                autoCapitalize="none"
                secureTextEntry={showPassword ? false : true}
                value={values.password}
                onChangeText={handleChange('password')}
              />
              <Pressable
                style={styles.iconPress}
                onPress={() => setShowPassword(prevState => !prevState)}>
                <Icon
                  name={showPassword ? 'eye-off' : 'eye'}
                  color={colors.SECONDARY}
                  size={22}
                />
              </Pressable>
            </View>
            <View style={styles.navigateLinkContainer}>
              <Text style={styles.navigateText}>Already a member? </Text>
              <Pressable onPress={handleSignInNavigation}>
                <Text style={styles.navigateLink}>Sign In</Text>
              </Pressable>
            </View>
            <FormButton title="Sign Up" onPress={handleSubmit} />
          </View>
        )}
      </Formik>
    </SafeAreaView>
  );
};

// Export Section
export default SignUp;
