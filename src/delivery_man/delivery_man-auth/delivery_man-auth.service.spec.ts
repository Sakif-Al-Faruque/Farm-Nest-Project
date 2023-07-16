import { Test, TestingModule } from '@nestjs/testing';
import { DeliveryManAuthService } from './delivery_man-auth.service';

describe('DeliveryManAuthService', () => {
  let service: DeliveryManAuthService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DeliveryManAuthService],
    }).compile();

    service = module.get<DeliveryManAuthService>(DeliveryManAuthService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
