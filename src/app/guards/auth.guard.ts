import { CanActivateFn } from '@angular/router';
import { authGuardFunctionFactory } from './authGuardFactory.function';

export const authGuard: CanActivateFn = authGuardFunctionFactory(()=> true,(router)=> router.parseUrl('/login'));
