import { Test, TestingModule } from '@nestjs/testing';
import { DeliveryManController } from './delivery_man.controller';

describe('DeliveryManController', () => {
  let controller: DeliveryManController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DeliveryManController],
    }).compile();

    controller = module.get<DeliveryManController>(DeliveryManController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
