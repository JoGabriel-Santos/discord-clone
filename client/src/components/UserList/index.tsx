import React from "react";

import { Container, Role, User, Avatar } from "./styles";

interface UserProps {
    isBot?: boolean;
    nickname: string;
}

const UserRow: React.FC<UserProps> = ({ isBot, nickname }) => {
    return (
        <User>
            <Avatar className={isBot ? 'bot' : ''}/>

            <strong>{nickname}</strong>

            {isBot && <span>Bot</span>}
        </User>
    );
};

const UserList: React.FC = () => {
    return (
        <Container>
            <Role>Available - 1</Role>
            <UserRow nickname="Gabriel Santos"/>

            <Role>Offline - 18</Role>
            <UserRow nickname="Botíssimo" isBot/>
            <UserRow nickname="User"/>
            <UserRow nickname="User"/>
            <UserRow nickname="User"/>
            <UserRow nickname="User"/>
            <UserRow nickname="User"/>
            <UserRow nickname="User"/>
            <UserRow nickname="User"/>
            <UserRow nickname="User"/>
            <UserRow nickname="User"/>
            <UserRow nickname="User"/>
        </Container>
    );
};

export default UserList;