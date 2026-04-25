import { StatusService } from './status.service';
export declare class StatusController {
    private readonly statusService;
    constructor(statusService: StatusService);
    findAll(ativo?: string): Promise<import("./entities/status.entity").Status[]>;
    findOne(id: string): Promise<import("./entities/status.entity").Status | null>;
}
