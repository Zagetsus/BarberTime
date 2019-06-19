import React, { Component } from 'react';
import { ScrollView, View, StyleSheet, Text, TouchableOpacity, Image, Dimensions} from 'react-native';
import { Button } from 'native-base';
import perfil from '../img/eu.jpg'
import { Actions } from 'react-native-router-flux'

import { bindActionCreators } from 'redux';
import { clickButton } from '../actions';
import { connect } from 'react-redux';

var { width } = Dimensions.get('window');


class Conta extends Component {
    constructor(props) {
        super(props)

        const { account } = this.props;
        console.log(account)

    }

    render() {
        const { account } = this.props;
       
        return (
            <View style={styles.container}>
                <ScrollView>
                    <View style={styles.perfil}>
                        <Image source={perfil} borderRadius={500} style={{ width: 225, height: 225, marginBottom: 10 }} />
                        <Text style={{ fontSize: 20, color: '#3f3f3f', }}>{account.name}</Text>
                        <Text style={{ fontSize: 16, color: '#3f3f3f', }}>{account.nivelAccess == 1 ? "Administrador Salão" : "Administrador Salão"}</Text>
                    </View>
                    <View style={styles.vInfo}>
                        <TouchableOpacity style={styles.botao}>
                            <Text style={styles.text}>Ajuda</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.botao}>
                            <Text style={styles.text}>Perfil</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => Actions.func()} style={styles.botao}>
                            <Text style={styles.text}>Funcionários</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.botao}>
                            <Text style={styles.text}>Configurações do App</Text>
                        </TouchableOpacity>

                        <Button style={styles.button} onPress={() => Actions.exit()}>
                            <Text style={styles.buttonText}>SAIR</Text>
                        </Button>
                    </View>

                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({

    // Style container
    container: {
        flex: 1,
        backgroundColor: 'white',
    },

    perfil: {
        flex: 2,
        alignItems: 'center',
        marginTop: 25,
        marginBottom: 25,
    },
    button: {
        width: '100%',
        height: 50,
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: 30,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#5b18b2'
    },
    buttonText: {
        color: '#fff'
    },
    vInfo: {
        width: '100%',
        flex: 2,
        marginTop: 10,
        //flexDirection: 'row',
        alignItems: 'center',
        //backgroundColor: "#ccc",
        paddingHorizontal: 30
    },
    botao: {
        width: '100%',
        height: 50,
        borderBottomColor: '#e2e2e2',
        borderBottomWidth: 0.5,
        alignItems: 'center',
        flexDirection: 'row'
    },
    
    text: {
        fontSize: 16,
        color: '#404040',
        paddingLeft: 10
    },


})

const mapStateToProps = store => ({
    account: store.clickState.account
});

const mapDispatchToProps = dispatch =>
    bindActionCreators({ clickButton }, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(Conta);
