import React, { Component } from 'react';
import { View, Image, StyleSheet, Dimensions, StatusBar, TouchableOpacity } from 'react-native'
import * as Animatable from 'react-native-animatable'
import { Button, Text, Item, Input, Label, Toast } from 'native-base'
import { Actions } from 'react-native-router-flux'
import Icon from 'react-native-vector-icons/Ionicons';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { clickButton } from '../actions';

import imgLogo from '../img/logoBarber.png'
import imgBack from '../img/back.jpg'


import gifLoadingWhite from '../img/loadingWhite.gif'


var { width } = Dimensions.get('window');

class Login extends Component {

    constructor(props) {
        super(props)

        this.state = {
            username: "admin",
            password: "admin",
            login: false,
            data: [],
            opacity: 0,
            clickLogin: 1,
            loadingWhite: false
        }
    }
    componentDidMount() {

    }

    login() {

        const { clickButton } = this.props;
        this.state.clickLogin == 1 ? this.setState({ loadingWhite: true }) : false

        if (this.state.clickLogin == 1) {

            this.setState({ clickLogin: 0 })

            if (this.state.username != null || this.state.password != null) {

                if (this.state.username != 'admin' || this.state.password != 'admin') {
                    Toast.show({
                        text: 'Login e/ou senha incorreto',
                        position: "top",
                        type: "warning",
                        buttonText: 'Ok'
                    })
                }
                else {
                    this.setState({ loadingWhite: false, clickLogin: 1 })
                    clickButton(this.state.data)
                    Actions.reset('tabs')
                }
            }
        }
        else {
            Toast.show({
                text: 'Preencha todos os campos',
                position: "top",
                type: "danger",
                buttonText: 'Ok'
            })
            this.setState({ clickLogin: 1, loadingWhite: false })
        }
    }

    changeStateUser(text) {
        let username = text;
        this.setState({ username })
    }

    changeStatePass(text) {
        let password = text;
        this.setState({ password })
    }

    LoginPage = props => {

        return (
            <Animatable.View
                animation="slideInUp" duration={50} iterationCount={1}
                style={stylesLogin.containerLogin}>

                <View style={stylesLogin.divInputs}>


                    <Item style={stylesLogin.input} placeholderLabel>
                        <Label style={stylesLogin.label}>Usuario</Label>
                        <Input style={{ color: '#969696' }} onChangeText={(text) => this.changeStateUser(text)} />
                    </Item>

                    <Item style={stylesLogin.input} placeholderLabel>
                        <Label style={stylesLogin.label}>Senha</Label>
                        <Input style={{ color: '#969696' }} secureTextEntry={true} onChangeText={(text) => this.changeStatePass(text)} />
                    </Item>

                    <Button onPress={() => this.login()} style={stylesLogin.button}>
                        <Text>Entrar</Text>
                    </Button>
                    <Text style={stylesLogin.inscreva}>Não possui conta? Inscreva-se</Text>

                    {

                        this.state.loadingWhite == true ? <Image style={stylesLogin.gifLoading} source={gifLoadingWhite} /> : false

                    }

                </View>

                <View style={stylesLogin.divTermos}>
                    <Text style={stylesLogin.termos}>Ao entrar, você concorda com os termos de uso e politica de privacidade do Barbertime</Text>
                </View>

            </Animatable.View>
        );
    }

    InicioPage = props => {
        return (
            <View>


                <View style={stylesInicio.divBotoes}>

                    <View style={{ width: width, height: '35%', backgroundColor: 'rgba(200, 200, 200, .2)', justifyContent: 'center' }}>
                        <Text style={stylesInicio.text}>Inscrever-se</Text>
                    </View>
                    <View
                        style={{ width: width, height: '35%', backgroundColor: 'rgba(200, 200, 200, .1)', justifyContent: 'center' }}
                    >
                        <TouchableOpacity onPress={() => this.setState({ login: true, opacity: 10 })}>

                            <Text style={stylesInicio.text}>Já possui uma conta</Text>
                        </TouchableOpacity>

                    </View>

                </View>

                <View style={stylesLogin.divTermos}>
                    <Text style={{ fontSize: 10, textAlign: 'center', color: 'white' }}>Ao inscrever-se você concorda com o nosso </Text>
                    <TouchableOpacity>
                        <Text style={{ fontSize: 10, textAlign: 'center', textDecorationLine: 'underline', color: 'white' }}>
                            termos e política de privacidade
                                </Text>
                    </TouchableOpacity>
                </View>

            </View>
        );
    }

    render() {

        const LoginPage = this.LoginPage;
        const InicioPage = this.InicioPage;

        return (
            <View style={styles.container}>
                <StatusBar hidden={true} />

                <Image style={styles.imageBack} source={imgBack} />
                <View style={{
                    position: 'absolute',
                    height: 60, width: 60,
                    top: 30,
                    left: 25,
                    zIndex: 100,
                    opacity: this.state.opacity
                }}>
                    <TouchableOpacity onPress={() => this.setState({ login: false, opacity: 0 })}>
                        <Icon name="ios-arrow-back" size={35} color="white" />
                    </TouchableOpacity>

                </View>

                <View style={styles.divImage}>
                    <Image style={styles.image} source={imgLogo} />
                </View>

                {

                    this.state.login == false ? <InicioPage /> : <LoginPage />
                }

            </View>
        )

    }

}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        padding: 30
    },
    imageBack: {
        position: 'absolute',
    },
    divImage: {
        width: '100%',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: 200
    },
    image: {
        width: 200,
        height: 70,
    },
    arrowBack: {
        width: 20,
        height: 20,
    }
})

const stylesLogin = StyleSheet.create({
    label: {
        color: 'white'
    },
    divInputs: {
        flex: 4,
        marginTop: 50,
        width: '100%',
        flexDirection: 'column',
        paddingTop: 30,
        alignItems: 'center'

    },
    input: {
        width: '100%',
        borderBottomWidth: 1,
        borderBottomColor: 'white',
        padding: 5,
        marginTop: 20,
        color: 'white'
    },
    button: {
        marginTop: 50,
        justifyContent: 'center',
        width: width - 50,
        backgroundColor: '#5b18b2'
    },
    inscreva: {
        fontSize: 12,
        color: 'white',
        textAlign: 'center',
        marginTop: 10
    },
    divTermos: {
        flex: 2,
    },
    termos: {
        fontSize: 12,
        color: 'white',
        paddingHorizontal: 30,
        textAlign: 'center'

    },
    gifLoading: {
        width: 30,
        height: 30,
        marginTop: 20,
    }
})

const stylesInicio = StyleSheet.create({
    divBotoes: {
        flex: 2,
        marginTop: 300,
        width: '100%',
        flexDirection: 'column',
        justifyContent: 'center',

    },
    text: {
        fontSize: 20,
        color: 'white',
        textAlign: 'center',
    },
})


const mapDispatchToProps = dispatch =>
    bindActionCreators({ clickButton }, dispatch);

export default connect(null, mapDispatchToProps)(Login);
