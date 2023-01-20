import React, { useEffect, useRef } from "react";

import ChannelMessage, { Mention } from "../ChannelMessage";

import { Container, Input, InputIcon, InputWrapper, Messages } from "./styles";

const ChannelData: React.FC = () => {
    const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;

    useEffect(() => {
        const div = messagesRef.current;

        if (div) {
            div.scrollTop = div.scrollHeight;
        }

    }, [messagesRef]);

    return (
        <Container>
            <Messages ref={messagesRef}>
                {Array.from(Array(15).keys()).map((n) => (
                    <ChannelMessage
                        key={n}
                        author="Gabriellou"
                        date="01/20/2023"
                        content="Hello World"
                    />
                ))}

                <ChannelMessage
                    author="Akemy"
                    date="01/20/2023"
                    content={
                        <>
                            <Mention>@Gabriellou</Mention> Hi dude
                        </>
                    }
                    hasMention
                    isBot
                />
            </Messages>

            <InputWrapper>
                <Input type="text" placeholder="Chat in #main-chat"/>
            </InputWrapper>
        </Container>
    );
};

export default ChannelData;