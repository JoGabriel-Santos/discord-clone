import React from "react";

import ChannelButton from "../ChannelButton";

import { Container, Category } from './styles';

const ChannelList: React.FC = () => {
    return (
        <Container>
            <Category>
                <span>Text channels</span>
                <div className="plus"><i className="bi bi-plus-lg"></i></div>
            </Category>

            <ChannelButton channelName="chat-free"/>
            <ChannelButton channelName="work"/>
            <ChannelButton channelName="csgo"/>
            <ChannelButton channelName="valorant"/>
        </Container>
    );
};

export default ChannelList;