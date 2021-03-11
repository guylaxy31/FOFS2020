import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, ScrollView, Image } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

const FoodMenuEdit = props => {

    return (

        <View style={styles.container}>
            <View style={styles.YellowTab}></View>
            <View style={{ flexDirection: 'row', paddingVertical: 20, paddingLeft: 20, alignItems: 'center' }}>
                <Image style={styles.ImageContainer} source={{ uri: props.imageUri }}></Image>
                <Text style={styles.MenuTitleText}>{props.menuTitle}</Text>
                <Text style={styles.MenuCountText}>x 0</Text>
            </View>
        </View>

    );

}

const styles = StyleSheet.create({
    container: { backgroundColor: '#FFF', borderRadius: 15 },

    YellowTab: { height: 15, backgroundColor: '#FFFC1B', borderTopLeftRadius: 15, borderTopRightRadius: 15 },
    MenuTitleText: { fontFamily: 'pr-reg', fontSize: 16, margin: 20 },
    MenuCountText: { fontFamily: 'pr-bold', fontSize: 16, margin: 20, color: '#C4C4AF' },

    ImageContainer: { width: 120, height: 120, borderRadius: 15 }

});


export default FoodMenuEdit