import { Test, TestingModule } from '@nestjs/testing';
import { SupplierAuthService } from './supplier-auth.service';

describe('SupplierAuthService', () => {
  let service: SupplierAuthService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SupplierAuthService],
    }).compile();

    service = module.get<SupplierAuthService>(SupplierAuthService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
