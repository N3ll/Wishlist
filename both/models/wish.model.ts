import { CollectionObject } from './collection-object.model';

export interface Wish extends CollectionObject {
    name: string;
    owner?: string;
    crossed?:boolean
}