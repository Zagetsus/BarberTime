import React, { Component } from 'react';
import { Dimensions, View, StyleSheet, StatusBar } from 'react-native';
import { Button, Text, Item, Input, Label, Body, Container, Header, Title, Subtitle, Left, Right } from 'native-base'
import Modal from 'react-native-modalbox';


screen = Dimensions.get('window');
class ModalExample extends Component {
    constructor(props) {
        super(props);
    }

    showAddModal = () => {
        this.refs.myModal.open()
    }

    render() {
        return (
            <Modal
                ref={"myModal"}
                style={{

                    shadowRadius: 10,
                    width: screen.width - 40,
                    height: 470,
                }}
                position='center'
            >
                <Container>

                    <Header noShadow noLeft style={{ backgroundColor: "white" }}>
                        <Left />
                        <Body>
                            <Title style={{ color: "#4f4f4f" }}>Funcionário</Title>
                            <Subtitle style={{ color: "#4f4f4f" }}>Cadastro</Subtitle>
                        </Body>
                        <Right />

                    </Header>
                    <StatusBar hidden={false} backgroundColor="white" barStyle="dark-content" />
                    <View style={styles.divInputs}>
                        <Item style={styles.input} placeholderLabel>
                            <Label style={styles.label}>Nome</Label>
                            <Input />
                        </Item>

                        <Item style={styles.input} placeholderLabel>
                            <Label style={styles.label}>Email</Label>
                            <Input />
                        </Item>

                        <Item style={styles.input} placeholderLabel>
                            <Label style={styles.label}>CPF</Label>
                            <Input />
                        </Item>

                        <Item style={styles.input} placeholderLabel>
                            <Label style={styles.label}>Telefone</Label>
                            <Input />
                        </Item>

                        <Button transparent
                            style={{ marginTop: 20, width: '100%', justifyContent: 'center' }}
                        >
                            <Text>Cadastrar</Text>
                        </Button>
                    </View>
                </Container>
            </Modal>

        );
    }
}

const styles = StyleSheet.create({
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

export default ModalExample;
