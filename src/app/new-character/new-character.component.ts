import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../character.service';
import { Character } from '../character.model';

@Component({
  selector: 'app-new-character',
  templateUrl: './new-character.component.html',
  styleUrls: ['./new-character.component.css'],
  providers: [CharacterService]
})
export class NewCharacterComponent implements OnInit {

  constructor(private characterService: CharacterService) { }

  ngOnInit() {
  }
  submitForm(name: string, description: string) {
      var newCharacter: Character = new Character(name, description);
      this.characterService.addCharacter(newCharacter);
    }

}
