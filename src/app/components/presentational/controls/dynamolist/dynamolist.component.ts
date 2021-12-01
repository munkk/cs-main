import { HttpClient } from '@angular/common/http';
import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  TemplateRef,
} from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { debounceTime, map } from 'rxjs/operators';

@Component({
  selector: 'app-dynamolist',
  templateUrl: './dynamolist.component.html',
  styleUrls: ['./dynamolist.component.scss'],
})
export class DynamolistComponent {
  public results$: Observable<any>;
  private subject = new Subject();

  canShowList = false;
  chooses = [];

  @Input() label?: string = '';
  @Input() value?: string = '';
  @Input() placeholder?: string = '';
  @Input() resultTemplate?: TemplateRef<any>;
  @Input() chooseTemplate?: TemplateRef<any>;
  @Input() template?: TemplateRef<any>;
  @Input() mockData: any[];

  @Output() onClick = new EventEmitter<any>();

  constructor(private httpClient: HttpClient) {}

  ngOnInit() {
    this.results$ = this.subject.pipe(
      debounceTime(1000),
      map((searchText: string) => {
        //return this.httpClient.get('/api/search?q=' + searchText);

        this.canShowList = true;
        return this.mockData.filter((c) =>
          c.name.toLowerCase().includes(searchText.toLowerCase())
        );
      })
    );
  }

  _onChange(text) {
    this.subject.next(text);
  }

  _onClick(item) {
    this.canShowList = false;
    this.chooses.push(item);
    this.onClick.emit({ item });
  }
}
