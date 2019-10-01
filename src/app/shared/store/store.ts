import { BehaviorSubject, Observable } from 'rxjs';
import { State } from './state';
import { distinctUntilChanged } from 'rxjs/operators';
import { pluck } from 'rxjs/operators';

const initState: State = {
    devices: undefined,
    devicesEditable: false,
    scenes: undefined
};

export enum DefaultStoreDataNames {
    DEVICES = "devices",
    DEVICES_EDITABLE = "devicesEditable",
    SCENES = "scenes"
}

export class Store {

    private subject = new BehaviorSubject<State>(initState);
    private store = this.subject.asObservable().pipe(distinctUntilChanged());

    get value() {
        return this.subject.value;
    }

    select<T>(name: string): Observable<T> {
        return this.store.pipe(pluck(name));
    }

    set(name: string, state: any) {
        this.subject.next({
            ...this.value, [name]: state
        });
    }
}
