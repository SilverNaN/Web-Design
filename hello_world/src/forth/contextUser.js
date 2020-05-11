import React from "react";

const contextUser = React.createContext();

// This renaming is optional, we can direct export contextUser and use structured property.

const UserProvider = contextUser.Provider;
const UserConsumer = contextUser.Consumer;

export { UserProvider, UserConsumer };
