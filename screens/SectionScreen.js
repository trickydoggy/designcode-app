import React from "react";
import styled from "styled-components/native";
import { TouchableOpacity, StatusBar } from "react-native";
import { WebView, Linking } from "react-native-webview";
import Ionicons from '@expo/vector-icons/Ionicons'

class SectionScreen extends React.Component {

    static navigationOptions = {
        header: null
    };

    componentDidMount() {
        StatusBar.setBarStyle('light-content', true);
    }

    componentWillUnmount() {
        StatusBar.setBarStyle('dark-content', true);
    }

    render() {
        const { navigation, route } = this.props;
        const section = route.params.section;

        return (
            <Container>
                <StatusBar hidden />
                <Cover>
                    <Image source={section.image} />
                    <Wrapper>
                        <Logo source={section.logo} />
                        <SubTitle>{section.subtitle}</SubTitle>
                    </Wrapper>
                    <Title>{section.title}</Title>
                    <Caption>{section.caption}</Caption>
                </Cover>
                <TouchableOpacity style={{ position: 'absolute', top: 20, right: 20 }} onPress={() => navigation.goBack()}>
                    <CloseView>
                        <Ionicons name="close-outline" size={36} color="blue" style={{ marginTop: -2, marginLeft: -2 }} />
                    </CloseView>
                </TouchableOpacity>
                <Content>
                    <WebView source={{ html: htmlContent + htmlStyle }}
                        scalesPageToFit={false}
                        scrollEnabled={false}
                        onNavigationStateChange={event => {
                            console.log(event.url);

                            if (event.url != "about:blank") {
                                this.refs.webview.stopLoading();
                                Linking.openURL(event.url);
                            }
                        }}

                    />
                </Content>
            </Container>
        );
    }
}

export default SectionScreen;


const htmlContent = `
 <h2>This is a title</h2>
 <p>This <strong>is</strong> a <a href="http://designcode.io">link</a></p>
 <img src="https://cl.ly/8861f359ed6d/download/Wave14.jpg" />
`;


const htmlStyle = `
    <style>
        * {
            font-family: -apple-system, Roboto;
            margin: 0;
            padding: 0;
        }
        img {
            width: 100%;
            border-radius: 10px;
            margin-top: 20px;
        }
    </style>        
`;

const Content = styled.View`
    height: 100%;
    padding: 20px;
`

const Container = styled.View`
    flex: 1;
`

const Cover = styled.View`
    height: 375px;
    background: white;
    justify-content: center;
    align-items: center;
`

const Image = styled.Image`
    width: 100%;
    height: 100%;
    position: absolute;
`

const Title = styled.Text`
    font-size: 24px;
    font-weight: bold;
    color: white;
    width: 170px;
    position: absolute;
    top: 78px;
    left: 20px;
`

const Caption = styled.Text`
    font-size: 17px;
    color: rgba(255, 255, 255, 0.7);
    width: 300px;
    position: absolute;
    bottom: 20px;
    left: 20px;
`

const CloseView = styled.View`
    width: 32px;
    height: 32px;
    justify-content: center;
    align-items: center;
    background: white;
    border-radius: 16px;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15);
`

const Logo = styled.Image`
    width: 24px;
    height: 24px;
`

const SubTitle = styled.Text`
    font-size: 15px;
    font-weight: 600;
    color: rgba(255, 255, 255, 0.8);
    margin-left: 5px;
    text-transform: uppercase;
`

const Wrapper = styled.View`
    flex-direction: row;
    position: absolute;
    top: 40px;
    left: 20px;
    align-items: center;
`
