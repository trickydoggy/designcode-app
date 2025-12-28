import React from "react";
import styled from "styled-components/native";
import { TouchableOpacity, StatusBar, Linking, ScrollView } from "react-native";
import { WebView } from "react-native-webview";
import Ionicons from '@expo/vector-icons/Ionicons'
import Markdown from 'react-native-showdown'


class SectionScreen extends React.Component {

    constructor(props) {
        super(props);
        this.webviewRef = React.createRef();
    }

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
            <ScrollView>
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
                        {/*
                    <WebView source={{ html: section.content + htmlStyle }}
                        scalesPageToFit={false}
                        scrollEnabled={false}
                        ref={this.webviewRef}
                        onNavigationStateChange={event => {
                            console.log(event.url);

                            if (event.url != "about:blank") {
                                this.webviewRef.current.stopLoading();
                                Linking.openURL(event.url);
                            }
                        }}

                    /> */}
                        <Markdown
                            markdown={section.content}
                            css={htmlStyle}
                        />
                    </Content>
                </Container>
            </ScrollView>
        );
    }
}

export default SectionScreen;


const htmlStyle = `
    * {
        font-family: -apple-system, Roboto;
        margin: 0;
        padding: 0;
        font-size: 17px;
        font-weight: normal;
        color: #3c4560;
        line-height: 24px;
    }
    img {
        width: 100%;
        border-radius: 10px;
        margin-top: 20px;
    }

    pre {
        background: #212c4f;
        padding: 20px;
        border-radius: 10px;
        margin-top: 20px;
        overflow: hidden;
        word-wrap: break-word;
    }
    code {
       color: white;
    }

`;

const Content = styled.View`
    height: 1000px;
    padding: 20px;
`

const Container = styled.View`
    flex: 1;
    background: white;
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
