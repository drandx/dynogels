declare module 'drandx-dynogels' {
    import * as _AWS from 'aws-sdk';
    import * as joi from 'joi';
  
    export function define(modelName: string, schemaConfig: SchemaConfig): Model;
    export const AWS: typeof _AWS;      
  
    export interface Index {
      hashKey: string;
      rangeKey: string;
      name: string;
      type: string;
    }
  
    export interface SchemaConfig {
      hashKey: string;
      rangeKey?: string;
      timestamps: boolean;
      schema: SchemaAttributes;
      tableName: string;
      indexes?: Index[];
    }
  
    export class Model {
      get(hashKey: string, rangeKey?: string|Function, options?: object|Function, callback?: Function); //@todo define options object
      update(item: object, options: object|Function, callback: Function);
      query(hashKey: string): Query;
      scan(): Scan;
      create(modelData: Object, options: Object, callback: Function): void; //@todo define modelData, options type.
    }
    
    export interface SchemaAttributes {
      [key: string]: (joi.StringSchema
        | joi.NumberSchema
        | joi.BooleanSchema
        | joi.ArraySchema
        | joi.ObjectSchema
        | joi.FunctionSchema
        | joi.AlternativesSchema
        | joi.BinarySchema
        | joi.DateSchema
      );
    }
  
    export class Scan {
      limit(number: number, table?: Table, serializer?: Serializer): Query;
      exec(callback: Function): Object; //@todo define the return type    
    }
      
    
    export class Query {
      constructor(hashKey: string);
      limit(number: number, table?: Table, serializer?: Serializer): Query;
      filterExpression(expression: Object): Query; //@todo expression object definition
      expressionAttributeValues(data: Object): Query; //@todo data object definition
      expressionAttributeNames(data: Object): Query; //@todo data object definition
      projectionExpression(data: Object): Query; //@todo data object definition
      usingIndex(name: string): Query;
      consistentRead(read: boolean): Query;
      addExpressionAttributes(request: Object, condition: Object): Query; //@todo define request, condition
      addKeyCondition(condition: Object): Query; //@todo define condition
      addFilterCondition(condition: Object): Query; //@todo define condition
      startKey(hashKey: string, rangeKey: string): Query;
      attributes(attrs: Object): Query; //@todo define atttrs type
      ascending(): Query;
      descending(): Query;
      select(value: any): Query; //@todo define value
      returnConsumedCapacity(value: any): Query; //@todo define value
      loadAll(): Query;
      where(keyName: string): WhereFilters;
      filter(keyName: string): QueryFilters;
      exec(callback: Function): Object; //@todo define the return type
    }
  
    export class WhereFilters extends Query {
      equals: (operator: string|number) => Query;
      eq: (operator: string|number) => Query;
      lte: (operator: string|number) => Query;
      lt: (operator: string|number) => Query;
      gte: (operator: string|number) => Query;
      gt: (operator: string|number) => Query;
      beginsWith: (operator: string) => Query;
      between: (operator: string) => Query;
    }
  
    export class QueryFilters extends Query {
      equals: (operator: string|number) => Query;
      ne: (operator: string|number) => Query;    
      eq: (operator: string|number) => Query;
      lte: (operator: string|number) => Query;
      lt: (operator: string|number) => Query;
      gte: (operator: string|number) => Query;
      gt: (operator: string|number) => Query;
      null: (operator: string) => Query;
      exists: (operator: string) => Query;
      contains: (operator: string) => Query;
      notContains: (operator: string) => Query;
      in: (operator: string) => Query;
      beginsWith: (operator: string) => Query;
      between: (operator: string) => Query;
  }
  
   export class ScanFilters extends Scan {
    equals: (operator: string|number) => Scan;
    ne: (operator: string|number) => Scan;    
    eq: (operator: string|number) => Scan;
    lte: (operator: string|number) => Scan;
    lt: (operator: string|number) => Scan;
    gte: (operator: string|number) => Scan;
    gt: (operator: string|number) => Scan;
    null: (operator: string) => Scan;
    notNull: (operator: string) => Scan;
    contains: (operator: string) => Scan;
    notContains: (operator: string) => Scan;
    in: (operator: string) => Scan;
    beginsWith: (operator: string) => Scan;
    between: (operator: string) => Scan;
   } 
  
    export class Table {
  
    }
  
    export class Serializer {
  
    }
  
    export class Item {
  
    }
  
    export class Shema {
      constructor(config: SchemaConfig);
    }
    
  }