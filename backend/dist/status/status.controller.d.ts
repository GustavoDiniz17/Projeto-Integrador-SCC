import { StatusService } from './status.service';
export declare class StatusController {
    private readonly statusService;
    constructor(statusService: StatusService);
    findAll(ativo?: string): Promise<(import("mongoose").Document<unknown, {}, import("./entities/status.schema").StatusDocument, {}, import("mongoose").DefaultSchemaOptions> & import("./entities/status.schema").Status & import("mongoose").Document<import("mongoose").Types.ObjectId, any, any, Record<string, any>, {}> & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    })[]>;
    findOne(id: string): Promise<import("mongoose").Document<unknown, {}, import("./entities/status.schema").StatusDocument, {}, import("mongoose").DefaultSchemaOptions> & import("./entities/status.schema").Status & import("mongoose").Document<import("mongoose").Types.ObjectId, any, any, Record<string, any>, {}> & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    }>;
}
