import { Component, OnInit, TemplateRef } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { Subscription } from 'rxjs';

import { ToastService, Alert, AlertType } from '@services/toast.service';

const alertTypeClass = {
  [AlertType.Success]: 'bg-success text-white',
  [AlertType.Error]: 'bg-danger text-white',
  [AlertType.Info]: 'bg-info text-white',
  [AlertType.Warning]: 'bg-warning text-dark'
};

const alertTypeHeader = {
  [AlertType.Success]: 'Success',
  [AlertType.Error]: 'Error',
  [AlertType.Info]: 'Info',
  [AlertType.Warning]: 'Warning'
};

@Component({
  selector: 'app-toasts',
  templateUrl: './toasts.component.html',
  styleUrls: ['./toasts.component.scss']
})
export class ToastsComponent implements OnInit {
  toasts: Alert[] = [];
  toastSubscription: Subscription;
  routeSubscription: Subscription;

  constructor(
    private router: Router,
    public toastService: ToastService
  ) {}

  ngOnInit(): void {
        this.toastSubscription = this.toastService.onAlert('default-alert')
            .subscribe(toast => {
                if (!toast.message) {
                    this.toasts = this.toasts.filter(x => x.keepAfterRouteChange);
                    this.toasts.forEach(x => delete x.keepAfterRouteChange);
                    return;
                }

                this.toasts.push(toast);

                if (toast.autoClose) {
                    setTimeout(() => this.removeAlert(toast), 3000);
                }
           });

        // clear alerts on location change
        this.routeSubscription = this.router.events.subscribe(event => {
            if (event instanceof NavigationStart) {
                this.toastService.clear('default-alert');
            }
        });
  }

  ngOnDestroy() {
    this.toastSubscription.unsubscribe();
    this.routeSubscription.unsubscribe();
  }

  removeAlert(toast: Alert) {
    this.toasts = this.toasts.filter(x => x !== toast);
  }

  cssClass(alert: Alert) {
    return alert ? alertTypeClass[alert.type] : null;
  }

  header(alert: Alert) {
    return alert ? alertTypeHeader[alert.type] : null;
  }
}
