export type productsTypes = {
    shoppingCartScreen?: boolean;
    screenName?: string;
    products?: [],
}
export type productRenderItemsProps = {
    item: {
        id: string,
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