import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Character } from '../character.model';
import { CharacterService } from '../character.service';
import { FirebaseListObservable } from 'angularfire2/database';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [CharacterService]
})
export class HomeComponent implements OnInit {

  characters: FirebaseListObservable<any[]>;

  ngOnInit() {
    this.characters = this.characterService.getCharacters();
  }

  constructor(private router: Router, private characterService: CharacterService) {}

  goToDetailPage(clickedCharacter) {
    this.router.navigate(['characters', clickedCharacter.$key]);
  };
}
