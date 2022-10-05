type WeddingInfo = {
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
        father?: string;
        fatherContact?: string;
        mother?: string;
        motherContact: string;
    };
    bride: {
        name: string;
        father?: string;
        fatherContact?: string;
        mother?: string;
        motherContact: string;
    };
};

export type WeddingInitialState = {
    info?: WeddingInfo;
    coupleId?: string;
    galleryIndex: number;
};
