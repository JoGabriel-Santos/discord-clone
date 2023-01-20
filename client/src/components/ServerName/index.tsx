import React from "react";

import { Container, Title } from "./styles";

const ServerName: React.FC = () => {
    return (
        <Container>
            <Title>Gabriellou's server</Title>

            <div><i className="bi bi-chevron-down"></i></div>
        </Container>
    );
};

export default ServerName;