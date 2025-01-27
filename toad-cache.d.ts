export type CacheConstructor<T> = new (max?: number, ttlInMsecs?: number, cacheId?: string) => T

export interface ToadCache<T> {
    first: any;
    last: any;
    max: number;
    ttl: number;
    size: number;
    clear(): void;
    delete(key: any): void;
    deleteMany(keys: any[]): void;
    evict(): void;
    expiresAt(key: any): any;
    keys(): any;
    get(key: any): T | undefined;
    getMany(keys: any[]): (T | undefined)[];
    set(key: any, value: T): void;
}

export class FifoMap<T> implements ToadCache<T>{
    constructor(max?: number, ttlInMsecs?: number);
    first: any;
    items: Map<any, any>;
    last: any;
    max: number;
    ttl: number;
    size: number;
    clear(): void;
    delete(key: any): void;
    deleteMany(keys: any[]): void;
    evict(): void;
    expiresAt(key: any): any;
    get(key: any): T | undefined;
    getMany(keys: any[]): (T | undefined)[];
    keys(): IterableIterator<any>;
    set(key: any, value: T): void;
}

export class FifoObject<T> implements ToadCache<T> {
    constructor(max?: number, ttlInMsecs?: number);
    first: any;
    items: any;
    last: any;
    size: number;
    max: number;
    ttl: number;
    clear(): void;
    delete(key: any): void;
    deleteMany(keys: any[]): void;
    evict(): void;
    expiresAt(key: any): any;
    get(key: any): T | undefined;
    getMany(keys: any[]): (T | undefined)[];
    keys(): string[];
    set(key: any, value: T): void;
}

export class LruMap<T> implements ToadCache<T> {
    constructor(max?: number, ttlInMsecs?: number);
    first: any;
    items: Map<any, any>;
    last: any;
    max: number;
    ttl: number;
    size: number;
    clear(): void;
    delete(key: any): void;
    deleteMany(keys: any[]): void;
    evict(): void;
    expiresAt(key: any): any;
    get(key: any): T | undefined;
    getMany(keys: any[]): (T | undefined)[];
    keys(): IterableIterator<any>;
    set(key: any, value: T): void;
}

export class LruObject<T> implements ToadCache<T> {
    constructor(max?: number, ttlInMsecs?: number);
    first: any;
    items: any;
    last: any;
    size: number;
    max: number;
    ttl: number;

    clear(): void;
    delete(key: any): void;
    deleteMany(keys: any[]): void;
    evict(): void;
    expiresAt(key: any): any;
    get(key: any): T | undefined;
    getMany(keys: any[]): (T | undefined)[];
    keys(): string[];
    set(key: any, value: T): void;
}

export class HitStatisticsRecord {
    records: Record<string, Record<string, {
        expirations: number,
        hits: number,
        misses: number,
    }>>

    initForCache(cacheId: string, currentTimeStamp: string): void
    resetForCache(cacheId: string): void
}

export class LruObjectHitStatistics<T> extends LruObject<T>{
    constructor(max?: number, ttlInMsecs?: number, cacheId?: string, globalStatisticsRecord?: HitStatisticsRecord, statisticTtlInHours?: number);
}

export { FifoObject as Fifo }
export { LruObject as Lru }
