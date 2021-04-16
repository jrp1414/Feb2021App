import { TestBed } from "@angular/core/testing";
import { Store } from "@ngrx/store";
import { MessageService } from "primeng/api";
import { of } from "rxjs";
import { LoggerService } from "../services/logger.service";
import { Product } from "../services/product.model";
import { ProductService } from "../services/product.service";
import { testProducts } from "../services/product.service.spec";
import { ProductsComponent } from "./products.component";

const testProds = testProducts;

class MockLogger { log() { return "Logger"; } }
class MockProductService {
    getProducts() { return of(testProds); }
    getCategories() { return of(['Test1', 'Test2']) }
}
class MockStore { store() { return "Stored"; } }
class MockMessage { message() { return "Message"; } }

let comp: ProductsComponent;
let ps: ProductService;
let logger: LoggerService;
let messageService: MessageService;
let store: Store;

describe("Products Component", () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                ProductsComponent,
                { provide: LoggerService, useClass: MockLogger },
                { provide: ProductService, useClass: MockProductService },
                { provide: Store, useClass: MockStore },
                { provide: MessageService, useClass: MockMessage },
            ]
        });

        comp = TestBed.inject(ProductsComponent);
        ps = TestBed.inject(ProductService);
        logger = TestBed.inject(LoggerService);
        messageService = TestBed.inject(MessageService);
        store = TestBed.inject(Store);
    });

    it("Products length should be 2", () => {
        expect(comp.products.length).toBe(2);
    });

    it("Products length should be 2", () => {
        expect(comp.ps.getProducts().subscribe((products:Product[])=>{
            expect(products[0].id).toEqual(1);
        }));
    });
});