import React from 'react';

import { Avatar, Container, Content, Header, Message } from './styles';

export { Mention } from './styles';

export interface Props {
    author: string;
    content: string | React.ReactElement | React.ReactNode;
    date: string;
    hasMention?: boolean;
    isBot?: boolean;
}

const ChannelMessage: React.FC<Props> = ({ author, content, date, hasMention, isBot }) => {
    return (
        <Container className={hasMention ? 'mention' : ''}>
            <Avatar className={isBot ? 'bot' : ''}/>

            <Message>
                <Header>
                    <strong>{author}</strong>

                    {isBot && <span>Bot</span>}

                    <time>{date}</time>
                </Header>
                <Content>{content}</Content>
            </Message>
        </Container>
    );
};

export default ChannelMessage;