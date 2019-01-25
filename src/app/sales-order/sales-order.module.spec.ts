import { SalesOrderModule } from './sales-order.module';

describe('SalesOrderModule', () => {
  let salesOrderModule: SalesOrderModule;

  beforeEach(() => {
    salesOrderModule = new SalesOrderModule();
  });

  it('should create an instance', () => {
    expect(salesOrderModule).toBeTruthy();
  });
});
