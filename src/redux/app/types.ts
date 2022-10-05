export type AccountInfo = {
    parentName?: string;
    parentAccount?: string;
    parentBank?: string;
    name: string;
    account: string;
    bank: string;
};

export type AppInitialState = {
    galleryModal: boolean;
    accountModal: boolean;
    accountInfo?: AccountInfo;
};
