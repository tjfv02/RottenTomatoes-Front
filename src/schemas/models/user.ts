export type User = {
    userName: string;
    name: string;
    lastName: string;
    token: string;
    mail: string;
};

export type Auth = {
    logged: boolean;
    user: User | undefined;
};

export type ProviderOutput = {
    authState: Auth;
    login: (url: string, code: string) => Promise<string>;
    logout: () => void;
    isRoleAdmin: () => boolean;
    isRoleCustomer: () => boolean;
};
