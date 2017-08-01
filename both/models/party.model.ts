import { CollectionObject } from './collection-object.model';
export interface Party {
  name: string;
  description: string;
  location: string;
   owner?: string;
}
