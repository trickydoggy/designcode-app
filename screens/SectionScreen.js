import React from "react";
import styled from "styled-components/native";
import { Button } from "react-native";


class SectionScreen extends React.Component {

    static navigationOptions = {
        header: null
    };
    render() {
        return (
            <Container>
                <Header />
                <Text>Section Screen</Text>
                <Button title="Close" onPress={() => this.props.navigation.goBack()} />
            </Container>
        );
    }
}

export default SectionScreen;

const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

const Text = styled.Text`

`;


const Header = styled.View`
    height: 50px;
    background: white;
`;
