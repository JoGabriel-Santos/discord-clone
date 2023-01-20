import React from "react";

import {
    Container,
    Description,
    Separator,
    Title,

} from "./styles";

const ChannelInfo: React.FC = () => {
    return (
        <Container>
            <div><i className="bi bi-hash"></i></div>

            <Title>main-chat</Title>

            <Separator/>

            <Description>Open channel to chat</Description>
        </Container>
    );
};

export default ChannelInfo;