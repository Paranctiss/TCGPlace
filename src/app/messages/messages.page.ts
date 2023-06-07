import { Component, OnInit } from '@angular/core';
import { HubConnection, HubConnectionBuilder, LogLevel } from '@microsoft/signalr';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.page.html',
  styleUrls: ['./messages.page.scss'],
})
export class MessagesPage implements OnInit {
  title = 'SignalRClient';
    private hubConnectionBuilder!: HubConnection;
    offers: any[] = [];
    constructor() {}
    ngOnInit(): void {
        this.hubConnectionBuilder = new HubConnectionBuilder().withUrl('https://localhost:44309/chatHub').configureLogging(LogLevel.Information).build();
        this.hubConnectionBuilder.start().then(() => console.log('Connection started.......!')).catch(err => console.log('Error while connect with server'));
        this.hubConnectionBuilder.on('SendToAllUsers', (result: any) => {
            this.offers.push(result);
        });
    }

}
