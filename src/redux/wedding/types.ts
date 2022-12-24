import { AccountInfo } from '@redux/app';

export type WeddingInfo = {
    couId: string;
    initialId: string;
    place: string;
    store: string;
    mainPhoto: string;
    date: Date;
    wholeContact: string;
    wholeAddressLink: string;
    parking: {
        park: string;
        subway?: string;
        bus?: string;
        rentBus?: string;
        notice?: string;
    };
    galleries: string[];
    poem?: string;
    groom: {
        name: string;
        contact: string;
        father?: string;
        fatherContact?: string;
        mother?: string;
        motherContact: string;
        account: AccountInfo;
    };
    bride: {
        name: string;
        contact: string;
        father?: string;
        fatherContact?: string;
        mother?: string;
        motherContact: string;
        account: AccountInfo;
    };
};

export type WeddingInitialState = {
    info?: WeddingInfo;
    coupleId?: string;
    galleryIndex: number;
};
