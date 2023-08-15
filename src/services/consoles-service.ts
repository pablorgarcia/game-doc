function ConsolesService() {

    /*
    async getConsolesList(: Promise<Product[]> {
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
    async getConsoleDetail(name: string): Promise<Product> {
        name = name.split('-').join(' ');
        const products = ProductService.products ? ProductService.products : await this.getProducts();
        return products.find(product => product.name === name);
    }
    */

    /*
    private static async getConsoles(consolesId) {
    return await doc(ConfigService.getFirestoreApp(), 'Consoles', consolesId);
    }
    */

}

export default ConsolesService