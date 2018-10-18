import {StyleSheet, Dimensions} from 'react-native';

import {
    fontFamily,
    primaryFontSize, 
    primaryFontColor
} from '../../globalStyles';
const { width, height } = Dimensions.get("window");
const cardHeight = height / 8;


const styles = StyleSheet.create({
    container: {
        width: width,
        height: cardHeight,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding :10,
        borderBottomColor: '#ddd',
        borderBottomWidth: 1,
    },
    locationContainer: {
        flex:1,
        alignItems: 'flex-start',
        justifyContent: 'center'
    },
    temp: {
        fontSize: primaryFontSize + 15
    },
    location: {
        fontSize: primaryFontSize + 6,
        color: '#000',
        fontFamily: fontFamily
    },
    weatherType: {
        fontSize: primaryFontSize,
        color: '#000',
        fontFamily: fontFamily,
    }
    
});

export default styles;