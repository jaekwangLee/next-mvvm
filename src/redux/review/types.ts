export type Review = {
    name: string;
    password: string;
    message: string;
    createdAt?: Date;
};

export type ReviewDocument = {
    rvId: string;
    name: string;
    password: string;
    message: string;
    createdAt?: Date;
};

export type ReviewInitialState = {
    reviews: ReviewDocument[];
    editReview: Review;
    reviewPage: number;
};
