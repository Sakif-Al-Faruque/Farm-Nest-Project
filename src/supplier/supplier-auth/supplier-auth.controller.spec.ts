import { Test, TestingModule } from '@nestjs/testing';
import { SupplierAuthController } from './supplier-auth.controller';

describe('SupplierAuthController', () => {
  let controller: SupplierAuthController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SupplierAuthController],
    }).compile();

    controller = module.get<SupplierAuthController>(SupplierAuthController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
