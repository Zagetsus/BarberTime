import React, { Component } from 'react';
import { ScrollView, View, StyleSheet, StatusBar } from 'react-native';
import ActionButton from 'react-native-action-button';
import { Actions } from 'react-native-router-flux'
import { Container, Thumbnail, Content, Body, List, ListItem, Text, Left, Right, Item, Input, Button } from 'native-base';

class Clientes extends Component {
    constructor(props) {
        super(props)
        this.state = {
            searchFleg: 0,
        };

    }


    filterServicosText(text) {

        /*this.setState({ search: text, loading: true, searchFleg: 1 })
        let { search } = this.state

        if (search != null) {
            const dataFilter = this.state.dataServicos.filter(item => item.servico.indexOf(search) >= 0);
            this.setState({ dataFilter, loading: false })
        }*/
    }

    render() {

        const clientesData =
            [
                {
                    _id: "aslfpjk18u32tknogdas",
                    nomeCliente: "Otavio",
                    numeroCliente: "11995633324",
                    emailCliente: "Otavio.silva133@etec.sp.gov.br",
                    cpfCliente: "46844989806",
                    fotoCliente: "https://scontent.fcgh10-1.fna.fbcdn.net/v/t1.0-1/c0.0.960.960a/p960x960/60515945_597524334085798_1317011013618368512_o.jpg?_nc_cat=106&_nc_oc=AQmoupJDwMrSoyso8QObByLMYIYd7SwSqsmm8c2TxKGq1p85DaUP9mLXiRsgZugxH3t3_XLso5BGkFAM3tsCSDHb&_nc_ht=scontent.fcgh10-1.fna&oh=cc03cc9a01b4dc36857479a9b950967a&oe=5D83106E"
                },
                {
                    _id: "524dsg456gds5129hi9d8f",
                    nomeCliente: "Diogo Henrique",
                    numeroCliente: "11885985892",
                    emailCliente: "diogo@etec.sp.gov.br",
                    cpfCliente: "6969696969",
                    fotoCliente: "https://scontent.fcgh10-1.fna.fbcdn.net/v/t1.0-9/49682532_1967516883344686_6637195807856525312_n.jpg?_nc_cat=106&_nc_oc=AQl3iqjUxC08bnLRoH_vc8iXphNCf0eAKJhFP8ILUTF0iEgDe3kUuAxuwD6qkBq-wp28UaLweWFxAKQNGTiNpeW0&_nc_ht=scontent.fcgh10-1.fna&oh=7805401e229cbde4ed4f8ef9fd1bd072&oe=5D882B24"

                }
            ]

        return (
            <View style={styles.container}>
                <Container>
                    <ScrollView>
                        <View style={{ padding: 10 }}>
                            <Item style={{ marginBottom: 20 }}>
                                {
                                    this.state.searchFleg == 1 ?
                                        <TouchableOpacity style={{ marginRight: 10 }} onPress={() => this.backSearch()}><Image style={{ width: 20, height: 20 }} source={backSearch} /></TouchableOpacity>
                                        : false
                                }
                                <Input placeholder="Pesquisar clientes" onChangeText={(text) => this.filterServicosText(text)} value={this.state.search} />
                            </Item>
                        </View>

                        <StatusBar hidden={false} backgroundColor="white" barStyle="dark-content" />
                        <Content>
                            <List style={{ paddingRight: 15 }}>

                                {
                                    clientesData.map((item, key) => {
                                    
                                        return (
                                            <ListItem thumbnail key={key}>
                                                <Left>
                                                    <Thumbnail square source={{uri : item.fotoCliente}} />
                                                </Left>
                                                <Body>
                                                    <Text>{item.nomeCliente}</Text>
                                                    <Text note numberOfLines={1}>{item.numeroCliente}</Text>
                                                </Body>
                                                <Right>
                                                    <Button transparent onPress={() => Actions.infoCliente(item)}>
                                                        <Text style={{ color: '#5b18b2' }}>Info</Text>
                                                    </Button>
                                                </Right>
                                            </ListItem>
                                        )
                                    })
                                }

                            </List>

                        </Content>


                    </ScrollView>
                </Container>
                <ActionButton buttonColor="#5b18b2" onPress={() => Actions.cadCliente()} />

            </View>

        );
    }

}
const styles = StyleSheet.create({

    // Style container
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    actionButtonIcon: {
        fontSize: 20,
        height: 22,
        color: 'white',
    },
});

export default Clientes;