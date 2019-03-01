import { Injectable } from "@angular/core";
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { catchError } from "rxjs/operators";
import { NotificationService } from "src/app/shared/services/notification.service";

@Injectable()
export class NoopInterceptor implements HttpInterceptor {
  constructor(private notificationService: NotificationService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(catchError((error, caught) => {
      console.warn(error);
      if (error.error instanceof ErrorEvent) {
        this.notificationService.sendNotificationTemp(
          `Error ${error.status}: ${error.error.error}`,
          "danger"
        );
      } else if (error.error && error.error.message) {
        this.notificationService.sendNotificationTemp(
          `Error ${error.status}: ${error.error.message}`,
          "danger"
        );
      } else if( error.error instanceof ProgressEvent) {
        this.notificationService.sendNotificationTemp(
          `Error ${error.status}: ${error.message}`,
          "danger"
        );
      } else {
        this.notificationService.sendNotificationTemp(
          `Error ${error.status}: ${error.error}`,
          "danger"
        );
      }
      return of(error);
    }) as any);
  }
}
