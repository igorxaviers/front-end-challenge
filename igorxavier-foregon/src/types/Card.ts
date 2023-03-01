export interface ICard {
    id: number;
    type: string;
    name: string;
    imageUrl: string;
    description: string;
    creditLimit: number;
    coverage: number;
    firstAnnuity: {
        installments: number;
        totalValue: number;
        installmentValue: number;
        installmentValueFormatted: number;
        totalValueFormatted: number;
        textFormatted: string;
    };
    valueOfMinimalIncomeRequired: number;
    network:{
        name: string;
        imageUrl: string;
    }
    rating: {
        total_reviews: number;
        average_score: number;
    };
    howToApplyUrl: string;
    applyUrl: string;
}