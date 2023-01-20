import React from "react";

// Add Discord logo

import { Button } from "./styles";

export interface Props {
    isHome?: boolean;
    selected?: boolean;
    hasNotifications?: boolean;
    mentions?: number;
}

const ServerButton: React.FC<Props> = ({ isHome, selected, hasNotifications, mentions }) => {
    return (
        <Button
            className={selected ? 'active' : ''}
            isHome={isHome}
            hasNotifications={hasNotifications}
            mentions={mentions}
        >
            {isHome && <img src={""} alt=""/>}
        </Button>
    );
};

export default ServerButton;