import { CanActivateFn } from '@angular/router';
import { authGuardFunctionFactory } from './authGuardFactory.function';

export const loginGuard: CanActivateFn = authGuardFunctionFactory((router)=> router.parseUrl('/home'), ()=> true);
