import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-recently-added',
  templateUrl: './recently-added.component.html',
  styleUrls: ['./recently-added.component.scss'],
})
export class RecentlyAddedComponent implements OnInit {
  pageNum = 1;
  snapshotPageNo = 1;

  constructor(
    public movService: MoviesService,
    private _ActivatedRoute: ActivatedRoute,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this.movService.getRecentMovies(1);

    this.snapshotPageNo = Number(
      this._ActivatedRoute.snapshot.queryParams['pageNum']
    );

    this._ActivatedRoute.queryParams.subscribe((params) => {
      this.pageNum = Number(params['pageNum']) || 0;
    });
  }

  nextPage() {
    this._router.navigate(['./'], {
      queryParams: { pageNum: this.pageNum + 1 },
      relativeTo: this._ActivatedRoute,
    });
    this.movService.getRecentMovies(this.pageNum + 1);
  }

  previousPage() {
    if (this.pageNum === 1) {
      return;
    }
    this._router.navigate(['./'], {
      queryParams: { pageNum: this.pageNum - 1 },
      relativeTo: this._ActivatedRoute,
    });
    this.movService.getPopularMovies(this.pageNum + 2);
  }
}
