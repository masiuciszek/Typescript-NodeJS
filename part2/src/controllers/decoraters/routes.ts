import 'reflect-metadata';

function routeCompresser(method: string) {
  return function(path: string) {
    return function(target: any, key: string, desc: PropertyDescriptor) {
      Reflect.defineMetadata('path', path, target, key);
      Reflect.defineMetadata('method', method, target, key);
    };
  };
}

export const get = routeCompresser('get');
export const put = routeCompresser('put');
export const post = routeCompresser('post');
export const del = routeCompresser('get');
export const patch = routeCompresser('patch');
