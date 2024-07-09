import {StyleSheet} from 'react-native';
import {colors} from '../../utils/colors.util';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.PRIMARY,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    marginBottom: 50,
  },
  formContainer: {
    width: '100%',
    paddingHorizontal: 25,
    marginBottom: 150,
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
    fontSize: 17,
    fontWeight: '500',
  },
  iconContainer: {
    position: 'relative',
  },
  iconPress: {
    width: 45,
    height: 45,
    position: 'absolute',
    top: 18.5,
    right: 0,
  },
  navigateLinkContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  navigateText: {
    color: colors.CONTRAST,
    fontSize: 14,
  },
  navigateLink: {
    color: colors.CONTRAST,
    fontSize: 14,
    fontWeight: '600',
  },
  formLinkContainer: {
    width: '100%',
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  formLinkSubContainer: {
    flexDirection: 'row',
  },
});
