import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';
import { StudyService } from 'src/app/services/study.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  constructor(
    private studyService: StudyService,
    private storageService: StorageService
  ) {
    this.checkAndRetrieve();
  }

  async checkAndRetrieve() {
    const list = await this.storageService.get('english1');
    if (!list) {
      this.studyService.getList('english1').subscribe((res: any) => {
        const normalized = res.data.map((item) => {
          return {
            id: item.id,
            text: item.foreignWord,
            answer: item.translation,
            exampleText: item.example,
            exampleAnswer: item.exampleTranslation,
          };
        });

        this.storageService.set('english1', normalized);
      });
    }
  }
}
