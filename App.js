import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Router, Scene } from 'react-native-router-flux';
import { Root } from "native-base";
import Icon from 'react-native-vector-icons/Ionicons';

import { Provider } from 'react-redux';
import { Store } from './src/store'

//All pages
import Login from './src/components/login';
import Principal from './src/components/principal';
import Conta from './src/components/conta';

//Clientes
import Clientes from './src/components/clientes/clientes'
import infoClientes from './src/components/clientes/infoCliente'
import CadastroCliente from './src/components/clientes/cadCliente'

//Funcionarios
import Funcionarios from './src/components/funcionarios/funcionarios'

//Serviços
import Servicos from './src/components/servicos/servicos'


class TabIcon extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {

  }

  selected() {

    switch (this.props.title) {
      case 'Principal':
        return (
          <View>
            <Icon name="ios-home" size={22} color="#e2e2e2" />
          </View>
        );
        break;

      case 'Conta':
        return (
          <View>
            <Icon name="ios-contact" size={22} color="#e2e2e2" />
          </View>
        );
        break;

      case 'Serviços':
        return (
          <View>
            <Icon name="ios-cut" size={22} color="#e2e2e2" />
          </View>
        );
        break;
      case 'Clientes':
        return (
          <View>
            <Icon name="md-people" size={22} color="#e2e2e2" />
          </View>
        );
        break;
    }
  }

  render() {
    return (
      <View>
        {
          this.selected()
        }
      </View>
    )


  }
}

setUser = (index) => {

}

class App extends Component {

  render() {

    return (
      <Provider store={Store}>
        <Root style={{ flex: 1 }}>
          <Router>
            <Scene key="root">

              <Scene key="login" initial direction="horizontal" hideNavBar component={Login} />
              <Scene key="infoCliente"  direction="horizontal" hideNavBar component={infoClientes} />
              <Scene key="cadCliente"  direction="horizontal" hideNavBar component={CadastroCliente} />
              <Scene key="func"  direction="horizontal" hideNavBar component={Funcionarios} />

              <Scene key="tabs" activeTintColor="#5b18b2" hideNavBar tabs={true} tabBarStyle={styles.tabBar}>

                <Scene key="Principal"
                  title="Principal"
                  hideNavBar
                  component={Principal}
                  icon={TabIcon}
                  initial

                />

                <Scene key="servico"
                  title="Serviços"
                  hideNavBar
                  component={Servicos}
                  icon={TabIcon}
                  
                />

                <Scene key="cad"
                  title="Clientes"
                  hideNavBar
                  component={Clientes}
                  icon={TabIcon}

                />

                <Scene key="conta"
                  title="Conta"
                  hideNavBar
                  component={Conta}
                  icon={TabIcon}
                />
              </Scene>


            </Scene>
          </Router>
        </Root>
      </Provider>
    );
  }

}

const styles = StyleSheet.create({
  tabBar: {
    shadowOffset: { width: 50, height: 10, },
    shadowColor: 'black',
    shadowOpacity: 1.0,
    height: 50,
    backgroundColor: '#000',
  },
});

export default App;
