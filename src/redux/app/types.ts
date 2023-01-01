export type AccountInfo = {
    fatherName?: string;
    fatherAccount?: string;
    fatherBank?: string;
    motherName?: string;
    motherAccount?: string;
    motherBank?: string;
    name: string;
    account: string;
    bank: string;
};

export type AppInitialState = {
    galleryModal: boolean;
    accountModal: boolean;
    accountInfo?: AccountInfo;
};
