function GamesService() {

    /*
    async getGamesList(: Promise<Product[]> {
        if (!ProductService.products) {
          // Traemos los productos que están en la DB
          const productSnapshot = await getDocs(this.productCollection);
          const productList = productSnapshot.docs.map(doc => ({id: doc?.id, ...doc?.data()}));
          ProductService.products = productList as Product[];
        }
        this.productSubject.next(ProductService.products);
        return ProductService.products;
    }
    */

    /*
    async getGameDetail(name: string): Promise<Product> {
        name = name.split('-').join(' ');
        const products = ProductService.products ? ProductService.products : await this.getProducts();
        return products.find(product => product.name === name);
    }
    */

    /*
    private static async getGames(gamesId) {
        return await doc(ConfigService.getFirestoreApp(), 'Games', gamesId);
    }
    */

}

export default GamesService