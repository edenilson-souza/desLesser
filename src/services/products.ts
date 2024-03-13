import axios from 'axios';

export type ProductType = {
	id?: number;
	name: string;
	price: number;
	description: string;
};

export interface IProductsService {
	createProduct(product: ProductType): Promise<void>;
	getProduct(id: number): Promise<ProductType | undefined>;
	getProducts(): Promise<ProductType[]>;
	updateProduct(id: number, product: ProductType): Promise<void>;
	deleteProduct(id: number): Promise<void>;
}

export class ProductsServiceHttp implements IProductsService {
	baseUrl: string;
	constructor() {
		this.baseUrl = 'http://localhost:3000/products';
	}

	public async createProduct(product: ProductType) {
		await axios.post(this.baseUrl, product);
	}

	public async getProduct(id: number) {
		const response = await axios.get(`${this.baseUrl}/${id}`);
		return response.data;
	}

	public async getProducts() {
		const response = await axios.get(this.baseUrl);
		return response.data;
	}

	public async updateProduct(id: number, product: ProductType) {
		await axios.put(`${this.baseUrl}/${id}`, product);
	}

	public async deleteProduct(id: number) {
		await axios.delete(`${this.baseUrl}/${id}`);
	}
}

class ProductsServiceMemory implements IProductsService {
	products: ProductType[] = [
		{
			id: 1,
			name: 'Product 1',
			description: 'Description 1',
			price: 100
		},
		{
			id: 2,
			name: 'Product 2',
			description: 'Description 2',
			price: 150
		}
	];

	public async createProduct(product: ProductType) {
		const id = this.products.length + 1;
		this.products.push({ id, ...product });
	}

	public async getProduct(id: number) {
		return this.products.find((product) => product.id === id);
	}

	public async getProducts() {
		return this.products;
	}

	public async updateProduct(id: number, product: ProductType) {
		const index = this.products.findIndex((product) => product.id === id);
		this.products[index] = product;
	}

	public async deleteProduct(id: number) {
		this.products = this.products.filter((product) => product.id !== id);
	}
}

export const productsService = new ProductsServiceMemory();
