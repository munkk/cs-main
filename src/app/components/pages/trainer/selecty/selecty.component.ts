import { Component, OnInit } from '@angular/core';
import { TextAnswerData } from 'src/app/components/presentational/tests/text-anwer/text-answer.interfaces';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'selecty',
  templateUrl: './selecty.component.html',
  styleUrls: ['./selecty.component.scss'],
})
export class SelectyComponent {
  data: TextAnswerData[] | null = null;

  constructor(private storageService: StorageService) {
    this.storageService.get('expertise').then((value) => (this.data = value));
  }
}
