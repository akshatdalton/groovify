import { Test, TestingModule } from "@nestjs/testing";
import { PauseController } from "./pause.controller";

describe("PauseController", () => {
    let controller: PauseController;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [PauseController],
        }).compile();

        controller = module.get<PauseController>(PauseController);
    });

    it("should be defined", () => {
        expect(controller).toBeDefined();
    });
});
