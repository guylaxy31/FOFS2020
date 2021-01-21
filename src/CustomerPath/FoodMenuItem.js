import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, ScrollView, Image } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

const FoodMenuEdit = props => {

    return (

        <View style={styles.container}>
            <View style={styles.YellowTab}></View>
            <View style={{ flexDirection: 'row', paddingVertical: 20, alignItems: 'center' }}>
                <Text style={styles.MenuTitleText}>{props.menuTitle}</Text>
                <Image style={styles.ImageContainer} source={props.imageUri}></Image>
                <Text style={styles.MenuCountText}>x 0</Text>
            </View>
        </View>

    );

}

const styles = StyleSheet.create({
    container: { backgroundColor: '#FFF', shadowColor: 'black', shadowOffset: { width: 0, height: 1 }, shadowRadius: 1, elevation: 3, shadowOpacity: 0.26, marginHorizontal: 3, borderRadius: 15 },

    YellowTab: { height: 15, backgroundColor: '#FFFC1B', borderTopLeftRadius: 15, borderTopRightRadius: 15 },
    MenuTitleText: { fontFamily: 'pr-reg', fontSize: Dimensions.get('window').height < 1000 ? 16 : 18, margin: 20 },
    MenuCountText: { fontFamily: 'pr-bold', fontSize: Dimensions.get('window').height < 1000 ? 16 : 18, margin: 20, color: '#C4C4AF' },

    ImageContainer: { width: 120, height: 120, marginLeft: 'auto', marginRight: 20, borderRadius: 15 }

});


export default FoodMenuEdit