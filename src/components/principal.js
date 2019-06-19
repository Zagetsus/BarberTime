import React, { Component } from 'react';
import { View, StyleSheet, Text, StatusBar, Image, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Swiper from "./slideNative";


const { width, height } = Dimensions.get("window");


class Principal extends Component {
    constructor(props) {
        super(props)

    }

    render() {
        return (
            <View style={{ backgroundColor: 'white', flex: 1, justifyContent: 'center' }}>
                <StatusBar hidden={false} backgroundColor="white" barStyle="dark-content" />

                <View style={{ marginTop: 15, flex: 1.5, justifyContent: 'center', alignItems: 'center' }}>
                    <Image source={require('../img/logoBasrber.png')} style={{ width: 170, height: 70 }} />
                </View>

                <Text style={{
                    fontSize: 16,
                    marginTop: 20,
                    color: 'gray',
                    alignSelf: 'center'
                }}>Logado como Administrador</Text>



                <View style={{ flex: 10, justifyContent: 'center' }}>

                    <Swiper style={{ height: 350 }} navigation={this.props.navigation}>
                        
                        <View style={styles.slide}>
                            <View style={{ flexDirection: 'row' }}>
                                <Image style={{ width: 23, height: 23, marginRight: 5 }} source={require('../img/scisor.png')} />
                                <Text style={{
                                    color: '#f2f2f2',
                                    fontWeight: 'bold',
                                    fontSize: 16,
                                }}>Você realizou 20 serviços hoje</Text>
                            </View>

                            <View>
                                <Text style={{
                                    color: '#f2f2f2',
                                    marginTop: 10,
                                    fontSize: 14,
                                }}>Realizados no mês: 39 serviços</Text>
                            </View>

                            <View style={{ flexDirection: 'row', marginTop: 50 }}>
                                <Image style={{ width: 23, height: 23, marginRight: 5, marginTop: 8 }} source={require('../img/calendar.png')} />
                                <Text style={{
                                    color: '#f2f2f2',
                                    fontSize: 15,
                                    fontWeight: 'bold'
                                }}>Você possui 12 horarios marcados para hoje</Text>
                            </View>
                            <View>
                                <Text style={{
                                    color: '#bababa',
                                    marginTop: 5,
                                    fontSize: 12,
                                    textAlign: 'center'
                                }}>Proximo cliente: Otávio Souza</Text>
                            </View>

                        </View>

                        <View style={styles.slide}>

                            <View>
                                <Text style={{
                                    color: '#bababa',
                                    marginTop: -40,
                                    fontSize: 14,
                                    textAlign: 'center'
                                }}>Neste mês voce realizou 39 serviços</Text>
                            </View>

                            <View style={{ flexDirection: 'row' }}>
                                <Image style={{ width: 23, height: 23, marginRight: 8, marginTop: 8 }} source={require('../img/money.png')} />
                                <View>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Text style={{
                                            color: '#f2f2f2',
                                            fontWeight: 'bold',
                                            fontSize: 15,
                                        }}>Você gerou </Text>
                                        <Text style={{
                                            color: '#07bf26',
                                            fontWeight: 'bold',
                                            fontSize: 15,
                                        }}>R$ 120,90</Text>
                                    </View>
                                    <View>
                                        <Text style={{
                                            color: '#f2f2f2',
                                            fontWeight: 'bold',
                                            fontSize: 15,
                                        }}>com todos serviços diarios</Text>
                                    </View>
                                </View>
                            </View>

                            <View style={{ flexDirection: 'row', marginTop: 50}}>
                                <Image style={{ width: 23, height: 23, marginRight: 8, marginTop: 10}} source={require('../img/cashier.png')} />
                                <View>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Text style={{
                                            color: '#f2f2f2',
                                            fontWeight: 'bold',
                                            fontSize: 15,
                                        }}>Você obteve </Text>
                                        <Text style={{
                                            color: 'red',
                                            fontWeight: 'bold',
                                            fontSize: 15,
                                        }}>R$ 75,63</Text>
                                    </View>
                                    <View>
                                        <Text style={{
                                            color: '#f2f2f2',
                                            fontWeight: 'bold',
                                            fontSize: 15,
                                        }}>em despesas, saiba mais</Text>
                                    </View>
                                </View>
                            </View>

                        </View>

                    </Swiper>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    slide: {
        padding: 30,
        alignSelf: 'center',
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#323232',
        width: width - 50,
    },
    text: {
        color: 'white'
    },
    cardHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10
    }
})



export default Principal;
