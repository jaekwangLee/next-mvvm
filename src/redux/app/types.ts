export type AppInitialState = {
    galleryModal: boolean;
    accountModal: boolean;
    accountInfo?: {
        parentName?: string;
        parentAccount?: string;
        parentBank?: string;
        name: string;
        account: string;
        bank: string;
    };
};
