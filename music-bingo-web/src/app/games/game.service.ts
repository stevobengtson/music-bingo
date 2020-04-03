import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Room } from '../rooms/room';
import { Player } from '../players/player';
import { RoomService } from '../rooms/room.service';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

export enum GameState {
  NONE,
  STARTED,
  COMPLETED
}

interface GameDetails {
  id?: number;
  room: Room;
  localPlayers?: Player[];
  isHost?: boolean;
  state: GameState;
}

@Injectable({
  providedIn: 'root'
})
export class GameService {
  private readonly COOKIE_GAME_DETAILS = 'game-details';
  private readonly COOKIE_DEVICE_ID = 'device-id';

  private readonly BASE_URL = 'http://localhost:3000/games'

  private guidDeviceId: string;
  private currentGame: GameDetails;

  readonly room: BehaviorSubject<Room> = new BehaviorSubject<Room>(null);
  readonly localPlayers: BehaviorSubject<Player[]> = new BehaviorSubject<Player[]>([]);
  readonly gameState: BehaviorSubject<number> = new BehaviorSubject<number>(GameState.NONE);
  readonly hosting: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(
    private readonly cookieService: CookieService,
    private readonly roomService: RoomService,
    private readonly http: HttpClient
  ) { }

  initialize() {
    this.loadDeviceId();
    this.loadGameDetails();
  }

  get deviceId(): string {
    return this.guidDeviceId;
  }

  createNewRoom(room: Room, isHost: boolean = false) {
    this.currentGame = this.initializeGame(room, isHost);

    this.storeGameDetails();
    this.updateGameDetails();
  }

  setLocalPlayers(players: Player[]) {
    this.currentGame.localPlayers = players;
    this.storeGameDetails();
    this.localPlayers.next(players);
  }

  loadRoom(key: string) {
    this.roomService.get(key).subscribe((room: Room) => {
      this.currentGame.room = room;
      this.storeGameDetails();
      this.room.next(room);
    });
  }

  startNewGame() {
    if (!this.currentGame.room || this.currentGame.state === GameState.STARTED) {
      return;
    }

    this.currentGame.id = undefined;
    this.currentGame.state = GameState.NONE;

    this.http.post<GameDetails>(this.BASE_URL,  this.currentGame).subscribe((game: GameDetails) => {
      this.currentGame.id = game.id;
      this.currentGame.room = game.room;
      this.currentGame.state = game.state;
      this.storeGameDetails();
      this.updateGameDetails();
    });
  }

  private loadDeviceId() {
    this.guidDeviceId = this.cookieService.get(this.COOKIE_DEVICE_ID);
    if (!this.guidDeviceId) {
      this.guidDeviceId = this.newGuid();
      this.cookieService.set(this.COOKIE_DEVICE_ID, this.guidDeviceId, null, '/');
    }
  }

  private loadGameDetails() {
    const roomDetails = this.cookieService.get(this.COOKIE_GAME_DETAILS);
    if (roomDetails) {
      this.currentGame = JSON.parse(roomDetails);
      this.loadRoom(this.currentGame.room.key);
    } else {
      this.currentGame = this.initializeGame();
      this.storeGameDetails();
    }

    this.updateGameDetails();
  }

  private storeGameDetails() {
    this.cookieService.set(this.COOKIE_GAME_DETAILS, JSON.stringify(this.currentGame), null, '/');
  }

  private updateGameDetails() {
    this.room.next(this.currentGame.room);
    this.localPlayers.next(this.currentGame.localPlayers);
    this.hosting.next(this.currentGame.isHost);
    this.gameState.next(this.currentGame.state);
  }

  private newGuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
      // tslint:disable-next-line: no-bitwise
      const r = Math.random() * 16 | 0;
      // tslint:disable-next-line: no-bitwise
      const v = c === 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }

  private initializeGame(room: Room = null, isHost: boolean = false) {
    return {
      room,
      localPlayers: [],
      isHost,
      state: GameState.NONE
    };
  }
}
