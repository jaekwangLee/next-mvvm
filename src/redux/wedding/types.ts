type WeddingInfo = {
    place: string;
    store: string;
    mainPhoto: string;
    date: Date;
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
