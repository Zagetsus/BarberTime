import React, { Component } from 'react';

import { View, StatusBar, StyleSheet, Dimensions, Image } from 'react-native';
import { Toast, Header, Left, Body, Button, Title, Content, Picker, Item, Input, Label, Subtitle, Text } from 'native-base';
import Modal from 'react-native-modalbox';

import gifLoading from '../../img/loadingBlack.gif'

screen = Dimensions.get('window');


class CadastraServico extends Component {

    constructor(props) {
        super(props)
        this.state = {
            token: null,
            accountState: null,
            itemState: null,
            servico: null,
            funcionario: null,
            loading: false,
            cliente: undefined,
            formaPagamento: undefined,
            codServico: null,
            // user
            codFuncionario: null,
            nivelAccessConta: null
        }

    }

    showAddModal(item, account) {
        this.refs.myModal.open()
    }

    onValueChange(value) {
        this.setState({ cliente: value });
    }

    onValueChange2(value) {
        this.setState({ formaPagamento: value });
    }



    render() {
        return (
            <Modal
                ref={"myModal"}
                style={{
                    shadowRadius: 10,
                    width: screen.width - 40,
                    height: 470,
                    borderRadius: 2
                }}
                position='center'
            >

                <Header noShadow noLeft style={{ width: '100%', backgroundColor: 'white', borderRadius: 2 }}>
                    <Left />
                    <Body>
                        <Title style={{ color: '#4f4f4f' }}>Serviços</Title>
                        <Subtitle style={{ color: '#4f4f4f' }}>{this.state.codServico != null ? "Editar serviço" : "Cadastro de Serviço"}</Subtitle>
                    </Body>
                </Header>

                <StatusBar hidden={false} backgroundColor="white" barStyle="dark-content" />

                <Content>
                    <View style={styles.divInputs}>
                        <Item style={styles.input} placeholderLabel>
                            <Label>Serviço</Label>
                            <Input onChangeText={(text) => this.setState({ servico: text })} value={this.state.servico} />
                        </Item>

                        <Item style={styles.input} placeholderLabel>
                            <Label>Funcionario</Label>
                            <Input disabled onChangeText={(text) => this.setStateFuncionario(text)} value={this.state.funcionario} />
                        </Item>


                        <Item picker style={styles.input}>
                            <Label>Cliente:</Label>
                            <Picker
                                mode="dropdown"
                                placeholderStyle={{ color: "#bfc6ea" }}
                                placeholderIconColor="#007aff"
                                selectedValue={this.state.cliente}
                                onValueChange={this.onValueChange.bind(this)}
                            >
                                <Picker.Item label="" value="" />
                                <Picker.Item label="Otavio de Souza Silva" value="Otavio de Souza Silva" />
                                <Picker.Item label="Luan Verdelho" value="Luan Verdelho" />
                                <Picker.Item label="Diogo Henrique" value="Diogo Henrique" />
                            </Picker>
                        </Item>


                        <Item picker style={styles.input}>
                            <Label>F. Pagamento:</Label>
                            <Picker
                                mode="dropdown"
                                placeholderStyle={{ color: "#bfc6ea" }}
                                placeholderIconColor="#007aff"
                                selectedValue={this.state.formaPagamento}
                                onValueChange={this.onValueChange2.bind(this)}
                            >
                                <Picker.Item label="" value="" />
                                <Picker.Item label="CRÉDITO" value="CRÉDITO" />
                                <Picker.Item label="DÉBITO" value="DÉBITO" />
                                <Picker.Item label="DINHEIRO" value="DINHEIRO" />
                                <Picker.Item label="A VER" value="A VER" />
                            </Picker>
                        </Item>

                        <Button  style={{ marginTop: 20, width: '100%', justifyContent: 'center' }} transparent>
                            <Text>{this.state.codServico != null ? "Editar" : "Cadastrar"}</Text>
                        </Button>

                        {
                            this.state.loading == true ? <Image style={styles.gifLoading} source={gifLoading} /> : false
                        }
                    </View>
                </Content>
            </Modal>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 2
    },
    arrowBack: {
        width: 20,
        height: 20,
    },
    gifLoading: {
        width: 30,
        height: 30,
        marginTop: 20,
    },
    label: {
        color: "#7c7c7c"
    },
    divInputs: {
        flex: 1,
        marginTop: 2,
        width: '100%',
        flexDirection: 'column',
        paddingHorizontal: 25,
        alignItems: 'center'

    },
    input: {
        width: '100%',
        borderBottomWidth: 0.3,
        borderBottomColor: "#7c7c7c",
        padding: 5,
        marginTop: 20,
    },
    botao: {
        marginTop: 20,
        backgroundColor: "#5b18b2",
        width: '100%',
    }
})


const mapStateToProps = store => ({
    account: store.clickState.account
});

const mapDispatchToProps = dispatch =>
    bindActionCreators({ clickButton }, dispatch);


export default CadastraServico;

