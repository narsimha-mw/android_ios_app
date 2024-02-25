import { Platform } from 'react-native';
import { StyleSheet } from 'react-native';
import DeviceInfo from 'react-native-device-info';
const deviceJSON = {};
deviceJSON.isTablet = DeviceInfo.isTablet();

const commonFontStyle = StyleSheet.create({
    usFontFamily: {
        fontFamily: 'UnileverShilling',
        fontFamilyMedium: 'UnileverShillingMedium', // font-weight: 600
        fontFamilyBold: 'UnileverShillingBold', // font-weight: 900
    },
    nsFontFamily: {
        fontFamily: 'NotoSans'
    },
    fontSize8: {
        fontSize: deviceJSON && deviceJSON.isTablet ? 10 : 8
    },
    fontSize10: {
        fontSize: deviceJSON && deviceJSON.isTablet ? 12 : 10
    },
    fontSize11: {
        fontSize: deviceJSON && deviceJSON.isTablet ? 13 : 11
    },
    fontSize14: {
        fontSize: deviceJSON && deviceJSON.isTablet ? 16 : 14
    },
    fontSize15: {
        fontSize: deviceJSON && deviceJSON.isTablet ? 17 : 15
    },
    fontSize18: {
        fontSize: deviceJSON && deviceJSON.isTablet ? 20 : 18
    },
    fontSize22: {
        fontSize: deviceJSON && deviceJSON.isTablet ? 24 : 22
    },
    fontSize24: {
        fontSize: deviceJSON && deviceJSON.isTablet ? 26 : 24
    },
    fontSize28: {
        fontSize: deviceJSON && deviceJSON.isTablet ? 30 : 28
    },
    fontSize32: {
        fontSize: deviceJSON && deviceJSON.isTablet ? 34 : 32
    },
    fontSize16: {
        fontSize: deviceJSON && deviceJSON.isTablet ? 18 : 16
    },
    fontSize12: {
        fontSize: deviceJSON && deviceJSON.isTablet ? 14 : 12
    },
    fontSize11: {
        fontSize: deviceJSON && deviceJSON.isTablet ? 13 : 11
    },
    fontSize13: {
        fontSize: deviceJSON && deviceJSON.isTablet ? 15 : 13
    },
    fontSize20: {
        fontSize: deviceJSON && deviceJSON.isTablet ? 22 : 20
    },
    fontSize26:{
        fontSize: deviceJSON && deviceJSON.isTablet ? 28 : 26
    },
    fontSize22: {
        fontSize: deviceJSON && deviceJSON.isTablet ? 24 : 22
    },
    fontWeight400: {
        fontWeight: Platform.OS === 'ios'? 500 : 500
    },
})

export default commonFontStyle; 