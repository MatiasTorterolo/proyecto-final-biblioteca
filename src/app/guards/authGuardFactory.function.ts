import { inject } from "@angular/core";
import { Router, UrlTree, CanActivateFn } from "@angular/router";
import { AuthService } from "../core/services/auth.service";

/**
 * @description Defino el contrato de una funcion "callback"
 * es decir, establezco que parametro tiene acceso el callback de ser necesario usarlo (el Router de la App)
 *
 *  Debe retornar un UrlTree o un boolean para respetar el protocolo de "CanActivateFn"
 */
type authGuardCallback = (router: Router) => UrlTree | boolean 


/**
 * @description Funcion de tipo "factory"
 * es decir, una funcion que fabrica una funcion, o retorna la referencia de una funcion.
 *
 *  En este caso, la funcion a fabricar respeta el contrato de "CanActivateFn"
 */
export const authGuardFunctionFactory = (onAuthorizedCallback: authGuardCallback, onUnathorizedCallback: authGuardCallback):  CanActivateFn => { 
  return () => {
    const authService = inject(AuthService);
    const router = inject(Router);

    if(authService.isAuthorized()){
      return onAuthorizedCallback(router);
    }

    return onUnathorizedCallback(router);
  }
}
