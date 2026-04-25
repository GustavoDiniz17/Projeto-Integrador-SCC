import { Repository } from 'typeorm';
import { Status } from './entities/status.entity';
export declare class StatusService {
    private statusRepository;
    constructor(statusRepository: Repository<Status>);
    findAll(): Promise<Status[]>;
    findOne(id: string): Promise<Status | null>;
    findAllActive(): Promise<Status[]>;
}
