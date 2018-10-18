import {StyleSheet, Dimensions} from 'react-native';
import {
    fontFamily, 
    primaryFontSize
} from '../../globalStyles';

const { width, height } = Dimensions.get("window");
const mapViewHeihgt = height / 1.8;

const styles = StyleSheet.create({
    container: {
        flex:1,   
        backgroundColor: '#ffffff'     
    },
    mapContainer:{
        height: mapViewHeihgt,
        width: width,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
    descriptionContainer: {
        height: height - mapViewHeihgt,
        flexDirection: 'row',
        paddingTop: 2,
        paddingRight: 10,
        paddingLeft: 10,
        backgroundColor: '#ffffff'
    },
    description: {
        width: width/2,
        height: height - mapViewHeihgt
    },
    iconContainer: {
        width: width/2,
        height: height - mapViewHeihgt,
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginTop: 30
    },
    locationName: {
        fontFamily: fontFamily,
        fontSize: primaryFontSize+8,
        fontWeight: 'bold',
        paddingBottom: 5,
        color: '#000'
    },
    weather: {
        fontFamily: fontFamily,
        color: '#000',
        paddingBottom: 5
    },
    icon: {
        width: 50, 
        height: 50,
    },
    iconText: {
        fontFamily: fontFamily,
        fontSize: primaryFontSize+10,
        fontWeight: 'bold',
        paddingBottom: 5,
        color: '#000'
    }
});

export default styles;