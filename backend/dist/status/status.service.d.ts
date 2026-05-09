import { Model } from 'mongoose';
import { Status, StatusDocument } from './entities/status.schema';
export declare class StatusService {
    private statusModel;
    constructor(statusModel: Model<StatusDocument>);
    findAll(): Promise<(import("mongoose").Document<unknown, {}, StatusDocument, {}, import("mongoose").DefaultSchemaOptions> & Status & import("mongoose").Document<import("mongoose").Types.ObjectId, any, any, Record<string, any>, {}> & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    })[]>;
    findOne(id: string): Promise<import("mongoose").Document<unknown, {}, StatusDocument, {}, import("mongoose").DefaultSchemaOptions> & Status & import("mongoose").Document<import("mongoose").Types.ObjectId, any, any, Record<string, any>, {}> & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    }>;
    findAllActive(): Promise<(import("mongoose").Document<unknown, {}, StatusDocument, {}, import("mongoose").DefaultSchemaOptions> & Status & import("mongoose").Document<import("mongoose").Types.ObjectId, any, any, Record<string, any>, {}> & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    })[]>;
}
