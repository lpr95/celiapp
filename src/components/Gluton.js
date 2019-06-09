import React from 'react';
import {
    View,
    StyleSheet,
    Text,
    Image,
    TouchableOpacity,
    Animated,
} from 'react-native';

import Gluton_HAPPY from "../assets/images/vielfrass_org.png";
import Gluton_SAD from "../assets/images/vielfrass_sad.png";
import Gluton_LOVE from "../assets/images/heart.png";

export default class Gluton extends React.Component {
    state = {
        trust: .5,
        happy: true,
        message: "Hello World!\nMy Name is Gluton.\n\nNice to meet you, Buddy!",
        love: new Animated.Value(0),
    }

    onSpreadTheLove() {
        if (!this.speadingLove) {
            this.speadingLove = true;

            Animated.sequence([
                Animated.timing(                  // Animate over time
                    this.state.love,            // The animated value to drive
                    {
                        toValue: 1,                   // Animate to opacity: 1 (opaque)
                        duration: 1000,              // Make it take a while
                    }
                ),
                Animated.timing(                  // Animate over time
                    this.state.love,            // The animated value to drive
                    {
                        toValue: 0,                   // Animate to opacity: 1 (opaque)
                        duration: 5000,              // Make it take a while
                    }
                )
            ]).start();                        // Starts the animation

            let currMsg = this.state.message;
            this.setState({message: "Hahahahaha!\nStop tickling me like that!\nHahahahaha!"});

            setTimeout(() => { 
                this.setState({message: currMsg});
                this.speadingLove = false;
            }, 5000);
        }
    }
    
    render() {
        return (
            <View style={this.props.style}>
                <Text style={styles.message}>{this.state.message}</Text>   
                <View style={styles.bubbleSeparator} />
                <View style={{alignItems: 'center'}}>
                    <TouchableOpacity activeOpacity={0} onPress={() => this.onSpreadTheLove()}>
                        <Image style={
                            {
                                width: 284 * this.state.trust, 
                                height: 360 * this.state.trust,
                                borderWidth: 1,
                            }} source={this.state.happy ? Gluton_HAPPY : Gluton_SAD} />
                    </TouchableOpacity>   
                    <Animated.Image source={Gluton_LOVE} style={
                        { 
                            width: 60, 
                            height: 60, 
                            position: 'absolute', 
                            top: 0, 
                            right: 0, 
                            transform: [{ rotate: '25deg' }],
                            opacity: this.state.love 
                        }}/>
                </View>            
            </View>
        );
    }  
}

const styles = StyleSheet.create({
    bubbleSeparator: {
        width: 0,
        height: 0,
        marginLeft: 33,
        borderLeftWidth: 10,
        borderRightWidth: 25,
        borderBottomWidth: 10,
        //borderStyle: 'solid',
        backgroundColor: 'transparent',
        borderLeftColor: 'transparent',
        //borderRightColor: 'transparent',
        //borderBottomColor: '#000',
        transform: [{ rotate: '45deg'}]
    },
    message: {
        backgroundColor: '#fff',
        borderWidth: 5, 
        borderRadius: 33, 
        textAlignVertical: 'center',
        padding: 10,
        paddingLeft: 20,
        //width: '50%',
    },
});