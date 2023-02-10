import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({ selector: '[scrollDown]' })
export class ScrollDownDirective {
  @Input() listPeopleWhichIsAdded: any[] | undefined;
  listOfPeople: string[] = [
    'Nato',
    'Lasha',
    'Saba',
    'Nodo',
    'Salome',
    'Kote',
    'Nino',
    'Nato',
    'Lasha',
    'Saba',
    'Nodo',
    'Salome',
    'Kote',
    'Nino',
    'Nato',
    'Lasha',
    'Saba',
    'Nodo',
    'Salome',
    'Kote',
    'Nino',
  ];
  
  constructor(private container: ElementRef) {}

  @HostListener('scroll')
  scrollFn() {
    if (
      this.container.nativeElement.scrollTop > 0 &&
      this.container.nativeElement.scrollTop +
        this.container.nativeElement.clientHeight +
        0.5 >
        this.container.nativeElement.scrollHeight
    ) {
      if(this.listOfPeople.length){
      this.listPeopleWhichIsAdded?.push(this.listOfPeople[0])
      this.listOfPeople.shift()}
    }
  }
}