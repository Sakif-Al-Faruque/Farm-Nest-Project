import { Test, TestingModule } from '@nestjs/testing';
import { NotificationBoxController } from './notification_box.controller';

describe('NotificationBoxController', () => {
  let controller: NotificationBoxController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NotificationBoxController],
    }).compile();

    controller = module.get<NotificationBoxController>(NotificationBoxController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
