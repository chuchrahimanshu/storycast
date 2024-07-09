// External Import Section
import {FC, useState} from 'react';
import {
  Image,
  Pressable,
  SafeAreaView,
  Text,
  TextInput,
  View,
} from 'react-native';
import {Formik} from 'formik';
import Icon from 'react-native-vector-icons/Ionicons';

// Internal Import Section
import {SignInInterface} from 'src/interfaces/screens/auth.screen.interface';
import {signInValidationSchema} from 'src/validators/screens/auth.screen.validator';
import {colors} from 'src/utils/colors.util';
import {styles} from 'src/styles/screens/auth.styles';
import FormButton from '@components/global/FormButton';

// Component Section
const SignIn: FC = () => {
  const initialState: SignInInterface = {
    email: '',
    password: '',
  };
  const [showPassword, setShowPassword] = useState(false);
  const handleSignUpNavigation = () => {};
  const handleForgetPassword = () => {};

  // Returning the Component JSX
  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require('../../assets/images/Storycast.png')}
        alt="App Logo"
        style={styles.logo}
      />
      <Formik
        initialValues={initialState}
        onSubmit={(values): void => {
          console.log(values);
        }}
        validationSchema={signInValidationSchema}>
        {({handleSubmit, handleChange, values}) => (
          <View style={styles.formContainer}>
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
                placeholder="Enter your password"
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
              <View style={styles.formLinkContainer}>
                <View style={styles.formLinkSubContainer}>
                  <Text style={styles.navigateText}>New to StoryCast? </Text>
                  <Pressable onPress={handleSignUpNavigation}>
                    <Text style={styles.navigateLink}>Sign Up</Text>
                  </Pressable>
                </View>
                <View style={styles.formLinkSubContainer}>
                  <Pressable onPress={handleForgetPassword}>
                    <Text style={styles.navigateLink}>Forget Password</Text>
                  </Pressable>
                </View>
              </View>
            </View>
            <FormButton title="Sign In" onPress={handleSubmit} />
          </View>
        )}
      </Formik>
    </SafeAreaView>
  );
};

export default SignIn;
