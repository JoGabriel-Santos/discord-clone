import React from "react";

import { Container } from "./styles";

export interface Props {
    channelName: string;
    selected?: boolean;
}

const ChannelButton: React.FC<Props> = ({ channelName, selected }) => {
    return (
        <Container className={selected ? 'active' : ''}>
            <div>
                <div className="hashtag"><i className="bi bi-hash"></i></div>
                <span>{channelName}</span>
            </div>

            <div>
                <div className="invite"><i className="bi bi-person-plus-fill"></i></div>
                <div className="config"><i className="bi bi-gear-fill"></i></div>
            </div>
        </Container>
    );
};

export default ChannelButton;