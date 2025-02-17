import ProductFactory from "../../../domain/product/factory/product.factory";
import UpdateProductUseCase from "./uptade.product.usecase";

const product = ProductFactory.createProduct("Product 1", 10);

const input = {
  id: product.id,
  name: "Product 1",
  price: 20,
};

const MockRepository = () => {
  return {
    create: jest.fn(),
    findAll: jest.fn(),
    find: jest.fn().mockReturnValue(Promise.resolve(product)),
    update: jest.fn(),
  };
};

describe("Unit test for product update use case", () => {
  it("It should update a product", async () => {
    const productRepository = MockRepository();
    const productUpdateUseCase = new UpdateProductUseCase(productRepository);

    const output = await productUpdateUseCase.execute(input);

    expect(output).toEqual(input);
  });
});
