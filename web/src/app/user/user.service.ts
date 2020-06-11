import { Injectable, Inject } from '@angular/core';
import { AngularTokenService } from 'angular-token';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';
import { Observable, BehaviorSubject } from 'rxjs';
import { User, UserRegister } from '@app/models/user';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  currentUserSubject: BehaviorSubject<User>;
  
  constructor(
    @Inject(LOCAL_STORAGE) private storage: StorageService,
    private tokenService: AngularTokenService
  ) {
    this.currentUserSubject = new BehaviorSubject<User>(this.storage.get('current-user'));
   }

  get currentUserValue(): User | null {
    return this.currentUserSubject.value;
  }

  register(user: UserRegister): Observable<any> {
    return this.tokenService.registerAccount(user);
  }

  signIn(email: string, password: string): Observable<any> {
    return this.tokenService.signIn({
        login: email,
        password: password
    }).pipe(map(user => {
      this.storage.set('current-user', user);
      this.currentUserSubject.next(user);
      return user;
    }));    
  }

  signOut(): Observable<any> {
    return this.tokenService.signOut().pipe(map(user => {
      this.storage.remove('current-user');
      this.currentUserSubject.next(null);
    }));
  }
}
