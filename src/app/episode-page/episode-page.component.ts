import { Component, inject, signal } from '@angular/core';
import { ApiService } from '../shared/services/api.service';
import { EpisodesResponse, Episode } from '../shared/models/models';
import { CommonModule } from '@angular/common';
import { InfiniteScrollDirective } from 'ngx-infinite-scroll';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-episode-page',
  imports: [CommonModule, InfiniteScrollDirective, FormsModule],
  templateUrl: './episode-page.component.html',
  styleUrl: './episode-page.component.scss'
})
export class EpisodePageComponent {
  charecterName = signal('')
  private readonly apiService = inject(ApiService);
  episodes=signal<any>('')
  nextPageExist: boolean = true;
  page: number = 1;

  ngOnInit() {
    this.getEpisodes();
  }

  updateCharecterName(event: Event) {
    const input = event.target as HTMLInputElement;
    this.charecterName.set(input.value);
  }

  filter() {
    this.episodes.set([])
    this.page = 1;
    this.nextPageExist = true;
    this.getEpisodes();
  }

  onScroll() {
    this.page++;
    this.getEpisodes();

  }

  getEpisodes() {
    if (!this.nextPageExist) return;
    this.apiService.getEpisodes(this.page, this.charecterName()).subscribe((res: any) => {
      this.episodes.update(val => [...val, ...res.results]);
      this.nextPageExist = res.info.next ? true : false;
    })
  }
}
