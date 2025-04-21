import { Component, inject, ChangeDetectorRef, ChangeDetectionStrategy, signal } from '@angular/core';
import { ApiService } from '../shared/services/api.service';
import { InfiniteScrollDirective } from 'ngx-infinite-scroll';
import { Response, Info } from '../shared/models/models';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../card/card.component';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-charecters-list',
  imports: [InfiniteScrollDirective, CommonModule, CardComponent, RouterLink, FormsModule],
  templateUrl: './charecters-list.component.html',
  styleUrl: './charecters-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CharectersListComponent {
  apiService = inject(ApiService);
  cdr = inject(ChangeDetectorRef);
  charecterName = signal('')

  statuses = ['Alive', 'Dead', 'unknown'];

  columns = [
    { key: 'id', label: 'ID' },
    { key: 'name', label: 'Name' },
    { key: 'status', label: 'Status' },
    { key: 'species', label: 'Species' },
    { key: 'type', label: 'Type' },
    { key: 'gender', label: 'Gender' },
  ]


  selectedStatus: string = 'Alive';
  isGrid: boolean = true;

  results = signal<any>('');
  page: number = 1;
  nextPageExist: boolean = true;

  updateCharecterName(event: Event) {
    const input = event.target as HTMLInputElement;
    this.charecterName.set(input.value);
  }


  filter() {
    this.page = 1;
    this.results.set([])
    this.nextPageExist = true;
    this.getCharacters();
  }

  ngOnInit() {
    this.getCharacters();
  }

  onScroll() {
    this.page++;
    this.getCharacters();
  }

  getCharacters() {
    if (!this.nextPageExist) return;
    this.apiService.getCharacters(this.page, this.charecterName(), this.selectedStatus).subscribe((res: Response) => {
      this.results.update(val => [...val, ...res.results]);
      this.nextPageExist = res.info.next ? true : false;
    })
  }

}
