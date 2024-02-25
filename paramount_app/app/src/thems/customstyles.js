import colors from '../thems/colors'
import { StyleSheet , Platform} from 'react-native';
import { CSSProperties } from "react";
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';

const appStyles:CSSProperties = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  whiteContainer: {
    backgroundColor: colors.white
  },
  whiteContainerBanner: {
    backgroundColor: colors.white,
    // paddingBottom:10,
    // paddingTop:  responsiveHeight(Platform.select({ ios: 3, android: 3 })),
  },
  scannerView:{
    position: "absolute",
    alignItems: "center",
    justifyContent:'center',
    right:20,
    top:0,
    bottom:0
  },
  scannerIcon: {
    width: 20,
    height: 20,
  },
  tabBarLabel: {
    fontFamily: 'UnileverShilling',
    fontSize:12,
    fontWeight: '400'
  },
  tabBarLabelTablet: {
    fontFamily: 'UnileverShilling',
    fontSize:14,
    marginHorizontal:20,
    fontWeight: '400'
  },
  tabBarIconTablet: {
    //marginStart:40,
  },
  tabBarIcon: {
   
  },
  imageVIew:{
    width:150,
    height:150
  },
  railContent:{
    paddingHorizontal: responsiveWidth(3)
  },
  railContainer:{
    backgroundColor: colors.white
  }
});

export default appStyles;
