export type productsTypes = {
    shoppingCartScreen?: boolean;
    screenName?: string;
}
export type productRenderItemsProps = {
    item: {
        image: string;
        title: string;
        ratings: number;
        price: number;
        oldPrice: number;
        avgRating: number;
        ship: boolean;
        saveUpto: number;
    };
    index: number;
}