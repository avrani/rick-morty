import { Component, inject } from '@angular/core';
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
  charecterName: string = '';
  private readonly apiService = inject(ApiService);
  episodes: any = [];
  nextPageExist: boolean = true;
  page: number = 1;

  ngOnInit() {
    this.getEpisodes();
  }

  filter() {
    this.episodes = [];
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
    this.apiService.getEpisodes(this.page, this.charecterName).subscribe((res: any) => {
      this.episodes = [...this.episodes, ...res.results];
      this.nextPageExist = res.info.next ? true : false;
    })
  }
}
