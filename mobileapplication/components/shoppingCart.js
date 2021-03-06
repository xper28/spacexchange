import React, {Component, useState, useEffec} from 'react'
import { Text, View, StyleSheet, TouchableHighlight, Dimensions, Image } from 'react-native';

export default class ShoppingCart extends Component {
    constructor(props){
        super(props);
    }
    state = {
        date: new Date(),
    }
     
    onChange = date => this.setState({ date })

    render(){
        const {navigate} = this.props.navigation;
        return(
            <View style={styles.full_screen}>
                <View style={styles.header}>
                    <Text style={fontSize= 14}>
                        Shopping Cart
                    </Text>
                </View>

                <View style={styles.listItem}>
                    <Image source={require('../assets/cubical.jpg')} style={styles.listImage} resizeMode="cover"/>
                    <View style={styles.listItemContent}>
                        <Text style={styles.listItemTitle}>Cubical</Text>
                        <Text style={styles.listItemSubText}>January 5th, 2020</Text>
                        <Text style={styles.listItemSubText}>$15/day</Text>
                        <TouchableHighlight style={styles.cancelButton} onPress={() => navigate('CancelBooking')}><Text style={{color: "white", textAlign: "center",}}>Cancel Booking</Text></TouchableHighlight>
                    </View>
                    
                </View>
                <View style={styles.listItem}>
                    <Image source={require('../assets/spaces/office_space.jpg')} style={styles.listImage} resizeMode="cover"/>
                    <View style={styles.listItemContent}>
                        <Text style={styles.listItemTitle}>Private Office</Text>
                        <Text style={styles.listItemSubText}>January 16th, 2020</Text>
                        <Text style={styles.listItemSubText}>$30/day</Text>
                        <TouchableHighlight style={styles.cancelButton} onPress={() => navigate('CancelBooking')}><Text style={{color: "white", textAlign: "center",}}>Cancel Booking</Text></TouchableHighlight>
                    </View>
                    
                </View>
                <View style={styles.listItem}>
                    <Image source={require('../assets/spaces/board_room.jpeg')} style={styles.listImage} resizeMode="cover"/>
                    <View style={styles.listItemContent}>
                        <Text style={styles.listItemTitle}>Boardroom</Text>
                        <Text style={styles.listItemSubText}>January 20th, 2020</Text>
                        <Text style={styles.listItemSubText}>$20/hour</Text>
                        <TouchableHighlight style={styles.cancelButton} onPress={() => navigate('CancelBooking')}><Text style={{color: "white", textAlign: "center",}}>Cancel Booking</Text></TouchableHighlight>
                    </View>
                    
                </View>

                <View style={styles.white_space} />
                <TouchableHighlight onPress={() => navigate('ConfirmCart')}>
                    <View style={styles.add_cart}>
                        <Text style={styles.add_cart_text}>
                            Checkout
                        </Text>
                    </View>
                </TouchableHighlight>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    full_screen: {
        display: "flex",
        flexDirection: "column",
        minHeight: "100%"
    },
    header: {
        height: 80,
        width: "100%",
        justifyContent: "flex-end",
        alignItems: "center",
        borderBottomWidth: 2,
        padding: 10,
        borderBottomColor: "black"
    },
    list: {
        display : "flex",
        flexDirection : "column",
        width : Dimensions.get('window').width,
        borderTopWidth : 2,
        borderTopColor : "black"
    },
    listItem: {
        borderBottomWidth : 2,
        borderBottomColor : "black",
        display : "flex",
        flexDirection : "row",
        padding: 5
    },
    listImage: {
        width:"50%",
        maxHeight: 200,
    },
    listItemContent:{
        marginLeft:  15,
    },
    listItemTitle: {
        fontSize: 25,
    },
    listItemSubText:{
        marginLeft: 15,
        marginTop: 5
        
    },
    white_space: {
        flexGrow: 1
    },
    add_cart: {
        height: 75,
        padding: 16,
        backgroundColor: "blue",
        justifyContent: "center",
        alignItems: "center"
    },
    add_cart_text: {

        color: "white",
        fontSize: 20
    },
    cancelButton: {
        backgroundColor: "red",
        padding: 15,
        fontSize: 20,
        borderRadius: 5,
        marginTop: "auto",
        marginBottom: 0,
        marginLeft: "auto",
        marginRight: "auto"
       
    }
});
  
