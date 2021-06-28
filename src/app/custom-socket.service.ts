import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomSocketService {

  constructor(private socket: Socket) { }

  public getPrices$(): Observable<any> {
    return new Observable(observer => {
      try {

        this.socket.on('connect', () => {
          console.log('Conectado!');
        })

        this.socket.on('push', (data) => { 
          console.log('Informacion recibida :)');
          observer.next(data)

        })

        this.socket.on('disconnect', () => {
          observer.complete()
        })

        this.socket.on('error', (e) => {
          observer.error(e)
        })


        this.socket.on('connect_error', (e) => { //TODO Nativo!
          observer.error(e)
        })


      } catch (e) {
        observer.error(e);
      }
    })
  }
}