import React, { Component } from 'react';
import { ScrollView, View, StyleSheet, StatusBar } from 'react-native';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';
import { Container, Body, Content, List, Thumbnail, ListItem, Text, Left, Right, Item, Input, Button } from 'native-base';
import ModalExample from './cdtFuncionario';

import perfil from '../../img/func.jpg'

class Funcionarios extends Component {
    constructor(props) {
        super(props)
        this.state = {
            searchFleg: 0,
        };
        this._onPressAdd = this._onPressAdd.bind(this);
    }
    _onPressAdd() {
        this.refs.ModalExample.showAddModal();
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

        return (
            <Container>
                <ScrollView>
                    <View style={{ padding: 10 }}>
                        <Item style={{ marginBottom: 20 }}>
                            {
                                this.state.searchFleg == 1 ?
                                    <TouchableOpacity style={{ marginRight: 10 }} onPress={() => this.backSearch()}>
                                        <Icon style={{ marginRight: 10 }} name="ios-arrow-back" size={35} onPress={() => this.backSearch()} color="#5b18b2"  />
                                    </TouchableOpacity>
                                    : false
                            }
                            <Input placeholder="Pesquisar funcionários" onChangeText={(text) => this.filterServicosText(text)} value={this.state.search} />
                        </Item>
                    </View>

                    <StatusBar hidden={false} backgroundColor="white" barStyle="dark-content" />
                    <Content>
                        <List>
                            <ListItem thumbnail>
                                <Left>
                                    <Thumbnail square source={perfil} />
                                </Left>
                                <Body>
                                    <Text>Luan</Text>
                                    <Text note numberOfLines={1}>luan.freitas5@gmail.com</Text>
                                </Body>
                                <Right>
                                    <Button transparent>
                                        <Text style={{ color: '#5b18b2' }}>Info</Text>
                                    </Button>
                                </Right>
                            </ListItem>
                        </List>
                    </Content>


                </ScrollView>
                <ActionButton buttonColor="#5b18b2" onPress={this._onPressAdd} />
                <ModalExample ref={'ModalExample'} />
            </Container>


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

export default Funcionarios;