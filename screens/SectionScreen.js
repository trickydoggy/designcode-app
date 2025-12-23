import React from "react";
import styled from "styled-components/native";


class SectionScreen extends React.Component {

    static navigationOptions = {
        title: "Section",
        headerShown: true
    };
    render() {
        return (
            <Container>
                <Header />
                <Text>SectionScreen</Text>
            </Container>
        );
    }
}

export default SectionScreen;

const Container = styled.View`
    flex: 1;
    background: blue;
`;

const Text = styled.Text`
    color: white;
`;


const Header = styled.View`
    height: 50px;
    background: white;
`;
