import React from 'react';

import {
    Container,
    Profile,
    Avatar,
    UserData,
    Icons,

} from './styles';

const UserInfo: React.FC = () => {
    return (
        <Container>
            <Profile>
                <Avatar/>
                <UserData>
                    <strong>Gabriellou</strong>
                    <span>#2689</span>
                </UserData>
            </Profile>

            <Icons>
                <div className="mic"><i className="bi bi-mic-fill"></i></div>
                <div className="headphone"><i className="bi bi-headphones"></i></div>
                <div className="options"><i className="bi bi-gear-fill"></i></div>
            </Icons>
        </Container>
    );
};

export default UserInfo;