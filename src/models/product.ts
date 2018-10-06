import { Model } from 'objection';
import * as path from 'path';

export class Product extends Model {
  
  static get tableName () {
    return 'product';
  }
  
};