import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { routing } from './app.routing';
import { RouterModule } from '@angular/router';
import { HttpClientService } from './shared/service/http-client.service';
import { RouteConfig } from './shared/config/route.config';
import { AuthService } from './shared/service/auth.service';
import { AuthGuard } from './shared/service/auth-guard.service';
import { ErrorMessage } from './shared/service/error-message.service';
import { LayoutModule } from './shared/layout/layout.module';
import { ErrorInterceptor } from 'src/app/shared/service/http-interceptor.service';
import { TokenInterceptor } from 'src/app/shared/service/token-interceptor.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    routing,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule,
    HttpClientModule,
    LayoutModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    HttpClientService, RouteConfig, AuthService, AuthGuard, ErrorMessage, MatSnackBar
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
