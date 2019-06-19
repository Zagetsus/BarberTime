import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet, TextInput, Dimensions, Alert, StatusBar } from 'react-native';
import { Button, Body, Container, Header, Title, Subtitle, Left, Right, Icon } from 'native-base'
import ImagePicker from 'react-native-image-picker';
import { Actions } from 'react-native-router-flux'

width = Dimensions.get('window').width;


export default class CadastroCliente extends Component {
    state = {
        image: null,
        comment: "",
    }

    pickImage = () => {
        ImagePicker.showImagePicker({
            title: 'Escolha a imagen',
        }, res => {
            if (!res.didCancel) {
                this.setState({ image: { uri: res.uri, base64: res.data } })
            }
        })
    }

    save = async () => {
        Alert.alert("Imagem Adicionada!")
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <Container>
                    <Header noShadow style={{ backgroundColor: "white" }}>
                        <Left >
                            <Button transparent
                                onPress={() => Actions.pop()}
                            >
                                <Icon name='arrow-back' style={{ color: '#000' }} />
                            </Button>
                        </Left>
                        <Body>
                            <Title style={{ color: "#4f4f4f" }}>Clientes</Title>
                            <Subtitle style={{ color: "#4f4f4f" }}>Cadastro</Subtitle>
                        </Body>
                        <Right />
                    </Header>
                    <StatusBar hidden={false} backgroundColor="white" barStyle="dark-content" />
                    <ScrollView>
                        <View style={styles.container}>
                            <View style={styles.imageContainer}>
                                <Image source={this.state.image} borderRadius={150} style={styles.image} />
                            </View>
                            <TouchableOpacity onPress={this.pickImage} style={{ marginTop: 10 }}>
                                <Text style={styles.buttomText}>Escolha uma foto</Text>
                            </TouchableOpacity>
                            <View style={{ marginTop: 30, width: '90%' }}>
                                <TextInput style={styles.input} placeholder="Nome" />
                                <TextInput style={styles.input} placeholder="E-mail" />
                                <TextInput style={styles.input} placeholder="CPF" />
                                <TextInput style={styles.input} placeholder="Telefone" />
                            </View>
                            <View style={{ width: '90%' }}>
                                <Button
                                    style={styles.button}
                                >
                                    <Text style={{color: '#fff'}}>Cadastrar</Text>
                                </Button>
                            </View>

                        </View>
                    </ScrollView>
                </Container>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        marginTop: 20,
        fontWeight: 'bold',
    },
    imageContainer: {
        width: '70%',
        height: 267,
        marginTop: 10,
        borderRadius: 150,
        backgroundColor: '#eee',
        justifyContent: 'center'
    },
    image: {
        alignSelf: 'center',
        width: '100%',
        height: '100%',
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
    buttomText: {
        fontSize: 14,
        color: '#5b18b2'
    },
    input: {
        padding: 10,
        marginTop: 5,
        width: '100%',
        height: 60,
        borderBottomWidth: 1,
        borderColor: '#efefef'
    }
})

