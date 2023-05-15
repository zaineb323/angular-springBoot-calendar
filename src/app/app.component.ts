import { ChangeDetectorRef,Component, Injectable, ViewChild } from '@angular/core';
import { FullCalendarComponent } from '@fullcalendar/angular';
import { CalendarOptions, DateSelectArg, EventApi, EventClickArg } from '@fullcalendar/core'; // useful for typechecking
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import listPlugin from '@fullcalendar/list';
import { Calendar } from '@fullcalendar/core'
import resourceTimelinePlugin from '@fullcalendar/resource-timeline'
import { createEventId } from './event-utils';
import { RoomServiceService } from './room-service.service';

@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('calendar') calendarComponent: FullCalendarComponent | undefined;

  constructor(private changeDetector: ChangeDetectorRef,private roomService: RoomServiceService) {
  }
  calendarOptions: CalendarOptions = {
    plugins: [
      interactionPlugin,
      dayGridPlugin,
      timeGridPlugin,
      listPlugin,
      resourceTimelinePlugin
    ],
    headerToolbar: {
      left: 'today prev,next',
      center: 'title',
      right: 'resourceTimelineDay,resourceTimelineWeek'
    },
    initialView: 'resourceTimelineDay',
    editable: true,
    selectable: true,
    selectMirror: true,
    dayMaxEvents: true,
 resources: [ ]
  };
  calendarVisible!: boolean;
  ngOnInit() {
    // Récupérer les ressources de la base de données
    this.roomService.getRooms().subscribe(
        (rooms) => {
            // Convertir les données de la base de données en format de ressource requis
            this.calendarOptions.resources = rooms.map((room) => ({
              id: room.room_GroupRoomKy.id ? room.room_GroupRoomKy.id.toString() : '',
              title: room.room_Name ? room.room_Name : ''
            }));
            console.log(rooms);
            console.log(this.calendarOptions.resources);

        },
        (error) => {
            console.error('Erreur lors de la récupération des ressources :', error);
        }
    );
}

  toggleWeekends() {
    this.calendarOptions.weekends = !this.calendarOptions.weekends // toggle the boolean!
  }

  currentEvents: EventApi[] = [];
}


