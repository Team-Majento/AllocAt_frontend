// import { Route } from '@angular/router';
// import { AdminComponent } from 'src/app/components/home/admin/admin.component';
// import { AlbumsComponent } from 'src/app/components/home/albums/albums.component';
// import { HomeComponent } from 'src/app/components/home/home.component';
// import { AuthenticationGuard } from 'src/app/services/guards/authentication.guard';
// import { LoginComponent } from '../../app/components/login/login.component';
// import { ERROR_ROUTES } from './error-routes';
// import { AppRoute } from './routes';
//
// export const APP_ROUTES: Route[] = [
//   {
//     path: AppRoute.Login,
//     component: LoginComponent,
//   },
//   {
//     path: AppRoute.Home,
//     component: HomeComponent,
//     canActivate: [AuthenticationGuard],
//     children: [
//       {
//         path: AppRoute.Albums,
//         component: AlbumsComponent,
//       },
//       {
//         path: AppRoute.Admin,
//         component: AdminComponent,
//       },
//       {
//         path: '',
//         redirectTo: AppRoute.Albums,
//         pathMatch: 'full',
//       },
//     ],
//   },
//   ...ERROR_ROUTES,
// ];
