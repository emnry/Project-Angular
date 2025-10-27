import { Routes } from '@angular/router';
import {ResetPasswordPage} from './pages/auth/reset-password-page/reset-password-page';
import {SignInPage} from './pages/auth/sign-in-page/sign-in-page';
import {SignUpPage} from './pages/auth/sign-up-page/sign-up-page';
import {ArticleUpdatePage} from './pages/article/article-update-page/article-update-page';
import {ArticleListPage} from './pages/article/article-list-page/article-list-page';
import {ArticleGestionPage} from './pages/article/article-gestion-page/article-gestion-page';
import {ArticlePage} from './pages/article/article-page/article-page';
import {authGuard} from './guards/auth-guard';

export const routes: Routes = [

  {path : 'reset-password', component:ResetPasswordPage},
  {path : 'login', component:SignInPage},
  {path : 'register', component:SignUpPage},
  {path : 'edit/:id', component:ArticleUpdatePage, canActivate: [authGuard]},
  { path: 'create', component: ArticleUpdatePage, canActivate: [authGuard]},
  {path : 'articles', component:ArticleListPage},
  {path : 'manage', component:ArticleGestionPage, canActivate: [authGuard]},
  {path : '', component:ArticleListPage, canActivate: [authGuard]},
  {path : 'article/:id', component:ArticlePage},


];
