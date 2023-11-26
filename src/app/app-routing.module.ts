import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { NoIngresadoGuard } from './no-ingresado.guard';
import { IngresadoGuard } from './ingresado.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'splash',
    pathMatch: 'full'
  },
  {
    path: 'splash',
    loadChildren: () => import('./splash/splash.module').then( m => m.SplashPageModule),
    canActivate: [NoIngresadoGuard]
  },
  {
    path: 'para-ti',
    loadChildren: () => import('./para-ti/para-ti.module').then( m => m.ParaTiPageModule),
    canActivate:[IngresadoGuard]
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule),
    canActivate: [NoIngresadoGuard]
  },
  {
    path: 'registro',
    loadChildren: () => import('./registro/registro.module').then( m => m.RegistroPageModule),
    canActivate: [NoIngresadoGuard]
  },
  {
    path: 'perfil',
    loadChildren: () => import('./perfil/perfil.module').then( m => m.PerfilPageModule),
    canActivate:[IngresadoGuard]
  },
  {
    path: 'empresas',
    loadChildren: () => import('./empresas/empresas.module').then( m => m.EmpresasPageModule),
    canActivate:[IngresadoGuard]
  },
  {
    path: 'foro',
    loadChildren: () => import('./foro/foro.module').then( m => m.ForoPageModule),
    canActivate:[IngresadoGuard]
  },
  {
    path: 'crear',
    loadChildren: () => import('./crear/crear.module').then( m => m.CrearPageModule),
    canActivate:[IngresadoGuard]
  },
  {
    path: 'rcontra',
    loadChildren: () => import('./rcontra/rcontra.module').then( m => m.RcontraPageModule),
    canActivate: [NoIngresadoGuard]
  },
  {
    path: 'icons',
    loadChildren: () => import('./icons/icons.module').then( m => m.IconsPageModule)
  },
  {
    path: 'protesis',
    loadChildren: () => import('./protesis/protesis.module').then( m => m.ProtesisPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
  