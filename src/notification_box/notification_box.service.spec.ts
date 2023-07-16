import { Test, TestingModule } from '@nestjs/testing';
import { NotificationBoxService } from './notification_box.service';

describe('NotificationBoxService', () => {
  let service: NotificationBoxService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NotificationBoxService],
    }).compile();

    service = module.get<NotificationBoxService>(NotificationBoxService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
