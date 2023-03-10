import { Component, ElementRef, ViewChild } from '@angular/core'
import {
  Observable,
  debounceTime,
  distinctUntilChanged,
  fromEvent,
  map,
} from 'rxjs'
import { FormControl } from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  itemsList: { name: string }[] = [
    { name: 'Giorgi' },
    { name: 'Elene' },
    { name: 'Elizabeth' },
    { name: 'Kote' },
  ]
  search = new FormControl()
  filteredItems: any[] | undefined
  searched: Observable<string> | undefined

  ngAfterViewInit() {
    this.searched = this.search.valueChanges.pipe(
      debounceTime(500),
      distinctUntilChanged(),
    )

    this.searched.subscribe((name: string) => {
      if (name == '') {
        this.filteredItems = []
      } else {
        this.filteredItems = this.itemsList.filter((item) =>
          item.name.toLowerCase().includes(name.toLowerCase()),
        )
      }
    })
  }

  //task 2
  public listPeopleWhichIsAdded: string[] = [
    'Elene',
    'Giorgi',
    'Nino',
    'Mari',
    'Elene',
    'Giorgi',
    'Nino',
    'Mari',
  ]
}
