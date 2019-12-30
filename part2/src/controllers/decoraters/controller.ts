/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
import 'reflect-metadata';
import express from 'express';
import { AppRouter } from '../../AppRouter';

export function controller(routePrefix: string) {
  const router = AppRouter.getInstance();
  return function(target: Function) {
    for (const key in target.prototype) {
      const routeHandler = target.prototype[key];
      const path = Reflect.getMetadata('path', target.prototype, key);
      const method = Reflect.getMetadata('method', target.prototype, key);
      if (path) {
        router[method](`${routePrefix}${path}`, routeHandler);
      }
    }
  };
}
