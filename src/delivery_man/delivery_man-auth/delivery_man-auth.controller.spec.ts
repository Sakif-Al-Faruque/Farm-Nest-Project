import { Test, TestingModule } from '@nestjs/testing';
import { DeliveryManAuthController } from './delivery_man-auth.controller';

describe('DeliveryManAuthController', () => {
  let controller: DeliveryManAuthController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DeliveryManAuthController],
    }).compile();

    controller = module.get<DeliveryManAuthController>(DeliveryManAuthController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
