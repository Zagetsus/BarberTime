import React, { Component } from 'react';
import { ScrollView, Dimensions, View, StyleSheet, Text, Image, TouchableOpacity, Alert } from 'react-native';
import { Card, Body, Item, Input, SwipeRow, Button, Icon, Toast } from 'native-base';
import ActionButton from 'react-native-action-button';
import { bindActionCreators } from 'redux';
import { clickButton } from '../../actions';
import { connect } from 'react-redux';

import CadastraServico from './cdtServico'

screen = Dimensions.get('window');

class Inicio extends Component {

    constructor(props) {
        super(props)

        this.state = {
            active: 'true',
            dataServicos: null,
            dataFilter: null,
            loading: true,
            search: null,
            searchFleg: 0,
        };

        const { account } = this.props;
        this._onPressAdd = this._onPressAdd.bind(this);
    }

    filterServicosText(text) {

        /*this.setState({ search: text, loading: true, searchFleg: 1 })
        let { search } = this.state

        if (search != null) {
            const dataFilter = this.state.dataServicos.filter(item => item.servico.indexOf(search) >= 0);
            this.setState({ dataFilter, loading: false })
        }*/

    }

    backSearch() {

        this.setState({ searchFleg: 0, search: null });

    }

    _onPressAdd() {
        const { account } = this.props;
        this.refs.CadastraServico.showAddModal(null, account);
    }

    onPressEdit(item) {
        const { account } = this.props;
        this.refs.CadastraServico.showAddModal(item, account);

    }

    render() {

        return (

            <View style={styles.container}>
                <ScrollView>

                    <View style={styles.body}>

                        <Item style={{ marginBottom: 20 }}>
                            {
                                this.state.searchFleg == 1 ?
                                    <TouchableOpacity onPress={() => this.backSearch()}>
                                        <Icon style={{ marginRight: 10, color: "#5b18b2" }} name="ios-arrow-back" size={35} onPress={() => this.backSearch()} />
                                    </TouchableOpacity>
                                    : false
                            }
                            <Input placeholder="Pesquisar serviços" onChangeText={(text) => this.filterServicosText(text)} value={this.state.search} />
                        </Item>
                        <Card style={{ width: '100%', marginTop: 10 }}>
                            <SwipeRow
                                rightOpenValue={-50}
                                stopRightSwipe={-50}
                                leftOpenValue={50}
                                stopLeftSwipe={50}
                                left={
                                    <Button style={{ backgroundColor: '#323232' }}>
                                        <Icon active name="create" />
                                    </Button>
                                }
                                body={
                                    <View style={{ margin: 10 }}>
                                        <Text>Corte</Text>
                                        <Body>
                                            <Text>Funcionario: Luan</Text>
                                            <Text>Cliente: Otavio</Text>
                                            <Text>Valor: R$ 20.00</Text>
                                            <Text>Forma de pagamento: Credito</Text>
                                        </Body>
                                    </View>
                                }
                                right={
                                    <Button danger>
                                        <Icon active name="trash" />
                                    </Button>
                                }
                            />
                        </Card>
                    </View>
                </ScrollView>
                <ActionButton buttonColor="#5b18b2" onPress={this._onPressAdd} />
                <CadastraServico ref={'CadastraServico'} />
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

    //Style header
    header: {
        backgroundColor: 'black',
        marginBottom: 20,
    },
    textHeader: {
        color: 'white'
    },

    //Style body
    body: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
        flexDirection: 'column'
    },

    // Style botão
    vBotoes: {
        width: '100%',
        flex: 2,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
    },
    botao: {
        width: 150,
        height: 150,
        margin: 5,
        backgroundColor: '#323232',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        borderRadius: 2
    },
    textBotao: {
        color: 'white'
    },
    imageBotao: {
        width: 60,
        height: 60,
        marginBottom: 15
    },

    // Style infos

    vInfo: {
        width: '100%',
        flex: 3,
        marginTop: 10,
        flexDirection: 'row',
        alignItems: 'center',

    },
    gifLoading: {
        width: 40,
        height: 40,
        marginTop: 230
    },
    actionButtonIcon: {
        fontSize: 20,
        height: 22,
        color: 'white',
    },
})


const mapStateToProps = store => ({
    account: store.clickState.account
});

const mapDispatchToProps = dispatch =>
    bindActionCreators({ clickButton }, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(Inicio);
