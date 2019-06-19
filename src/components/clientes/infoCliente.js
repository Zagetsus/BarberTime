import React, { Component } from 'react';
import { Dimensions, View, Image, StyleSheet, StatusBar, ScrollView, TouchableOpacity } from 'react-native';
import { Button, Text, Item, List, ListItem, Label, Body, Container, Header, Title, Subtitle, Left, Right, SwipeRow } from 'native-base'
import Icon from 'react-native-vector-icons/Ionicons'
import { Actions } from 'react-native-router-flux'

var { width } = Dimensions.get('window');


class Info extends Component {

    constructor(props) {
        super(props);

        this.state = {
            servicos: [
                {
                    servico: "Corte",
                    valor: "20,00",
                    formaPagamento: "Crédito",
                    data: "18/04/2018"
                },
                {
                    servico: "Progressiva",
                    valor: "74,00",
                    formaPagamento: "Pendente",
                    data: "05/04/2018"
                },
                {
                    servico: "Corte",
                    valor: "25,00",
                    formaPagamento: "Pendente",
                    data: "25/06/2018"
                },
                {
                    servico: "Alisamento",
                    valor: "35,00",
                    formaPagamento: "Crédito",
                    data: "08/07/2018"
                },
            ],
            servicosPagos: null,
            servicosPendentes: null
        }
    }

    componentWillMount() {
        this.state.servicos != null ?
            this.setState({
                servicosPagos: this.state.servicos.filter(i => i.formaPagamento != "Pendente"),
                servicosPendentes: this.state.servicos.filter(i => i.formaPagamento == "Pendente")
            }) : false
    }

    onPressDelete(item,key) {
        if(item.formaPagamento == "Pendente"){
            try{
                let servicosTrash  = this.state.servicosPendentes
                servicosTrash.splice(key, 1)    
                this.setState({ servicosPendentes: servicosTrash })    
            }
            catch(err){
                console.log(err)
            }
        }
        else{
            
            try{
                let servicosTrash  = this.state.servicosPagos
                servicosTrash.splice(key, 1)    
                this.setState({ servicosPagos: servicosTrash })    
            }
            catch(err){
                console.log(err)
            }
        }
        
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <Container>

                    <Header style={{ backgroundColor: "white" }}>
                        <Left>
                            <Button transparent onPress={() => { Actions.pop() }}>
                                <Icon name='ios-arrow-back' size={25} />
                            </Button>
                        </Left>

                        <Body>
                            <Title style={{ color: "#4f4f4f" }}>Clientes</Title>
                            <Subtitle style={{ color: "#4f4f4f" }}>Informações</Subtitle>
                        </Body>
                        <Right />

                    </Header>
                    <StatusBar hidden={false} backgroundColor="white" barStyle="dark-content" />
                    <ScrollView>

                        <View style={{ flexDirection: 'row', marginTop: 20 }}>

                            <View style={{ marginLeft: 15, marginRight: 15, }}>
                                <Image source={{ uri: this.props.fotoCliente }} borderRadius={2} style={{ width: 70, height: 70, alignSelf: 'flex-end' }} />
                                <TouchableOpacity>
                                    <Text style={{ color: 'gray', fontSize: 14, alignSelf: 'center', marginTop: 5 }}>Editar</Text>
                                </TouchableOpacity>
                            </View>

                            <View style={{ alignSelf: 'center' }}>
                                <View style={{ marginBottom: 5, alignSelf: 'flex-start' }}>
                                    <Text style={styles.text}>Nome : {this.props.nomeCliente}</Text>
                                </View>
                                <View style={{ marginBottom: 5, alignSelf: 'flex-start' }}>
                                    <Text style={styles.text}>Email : {this.props.emailCliente} </Text>
                                </View>
                                <View style={{ marginBottom: 5, alignSelf: 'flex-start' }}>
                                    <Text style={styles.text}>CPF : {this.props.cpfCliente} </Text>
                                </View>
                                <View style={{ marginBottom: 5, alignSelf: 'flex-start' }}>
                                    <Text style={styles.text}>Telefone : {this.props.numeroCliente}</Text>
                                </View>

                            </View>
                        </View>

                        <View style={{ marginTop: 30 }}>
                            <List>
                                <ListItem itemDivider style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <Text style={styles.text}>Serviços realizados</Text>
                                </ListItem>
                                {
                                    this.state.servicosPagos != null ?
                                        this.state.servicosPagos.map((i, key) => {
                                            return (
                                                <SwipeRow
                                                    rightOpenValue={-50}
                                                    stopRightSwipe={-50}
                                                    leftOpenValue={50}
                                                    stopLeftSwipe={50}
                                                    key={key}
                                                    left={
                                                        <Button style={{ backgroundColor: '#323232' }} onPress={() => alert("Function not available")}>
                                                            <Icon active size={25} backgroundColor="White" name="md-create" />
                                                        </Button>
                                                    }
                                                    body={
                                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: width - 30 }}>
                                                            <View style={{ flexDirection: 'column', marginLeft: 20 }}>
                                                                <Text style={[styles.text, { marginTop: 5, alignSelf: 'flex-start' }]}>{i.servico}</Text>
                                                                <Text style={[styles.text, { marginTop: 5, alignSelf: 'flex-start' }]}>R$ {i.valor}</Text>
                                                            </View>
                                                            <View style={{ flexDirection: 'column' }}>
                                                                <Text style={[styles.text, { marginTop: 5, alignSelf: 'flex-end' }]}>{i.formaPagamento}</Text>
                                                                <Text style={[styles.text, { marginTop: 5, alignSelf: 'flex-end' }]}>{i.data}</Text>
                                                            </View>
                                                        </View>

                                                    } right={
                                                        <Button danger onPress={() => this.onPressDelete(i,key)}>
                                                            <Icon active size={25} backgroundColor="White" name="md-trash" />
                                                        </Button>
                                                    }
                                                />
                                            )
                                        })
                                        : false
                                }

                                <ListItem itemDivider style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <Text style={styles.text}>Serviços Pendentes</Text>
                                </ListItem>

                                {
                                    this.state.servicosPendentes != null ?
                                        this.state.servicosPendentes.map((i, key) => {
                                            return (
                                                <SwipeRow
                                                    rightOpenValue={-50}
                                                    stopRightSwipe={-50}
                                                    leftOpenValue={50}
                                                    stopLeftSwipe={50}
                                                    key={key}
                                                    left={
                                                        <Button style={{ backgroundColor: '#323232' }} onPress={() => alert("Function not available")}>
                                                            <Icon active size={25} backgroundColor="White" name="md-create" />
                                                        </Button>
                                                    }
                                                    body={
                                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: width - 30 }}>
                                                            <View style={{ flexDirection: 'column', marginLeft: 20 }}>
                                                                <Text style={[styles.text, { marginTop: 5, alignSelf: 'flex-start' }]}>{i.servico}</Text>
                                                                <Text style={[styles.text, { marginTop: 5, alignSelf: 'flex-start' }]}>R$ {i.valor}</Text>
                                                            </View>
                                                            <View style={{ flexDirection: 'column', marginRight: 10 }}>
                                                                <Text style={[styles.text, { marginTop: 5, alignSelf: 'flex-end' }]}>{i.formaPagamento}</Text>
                                                                <Text style={[styles.text, { marginTop: 5, alignSelf: 'flex-end' }]}>{i.data}</Text>
                                                            </View>
                                                        </View>

                                                    } right={
                                                        <Button danger onPress={() => this.onPressDelete(i,key)}>
                                                            <Icon active size={25} backgroundColor="White" name="md-trash" />
                                                        </Button>
                                                    }
                                                />
                                            )
                                        })
                                        : false
                                }
                            </List>
                        </View>
                        <Button>

                        </Button>
                    </ScrollView >
                </Container >
            </View >

        );
    }
}

const styles = StyleSheet.create({
    perfil: {

    },
    text: {
        fontSize: 15,
        color: 'gray'
    },
    divInputs: {
        flex: 2,
        width: '100%',
        flexDirection: 'column',
        paddingHorizontal: 5,
        alignItems: 'center',
        backgroundColor: 'grey'
    },
    botao: {
        marginTop: 20,
        backgroundColor: "#5b18b2",
        width: '100%',
    }
})

export default Info;
