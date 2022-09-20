import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-most-watched',
  templateUrl: './most-watched.component.html',
  styleUrls: ['./most-watched.component.scss'],
})
export class MostWatchedComponent implements OnInit {
  pageNum = 1;
  snapshotPageNo = 1;
  imageSrc = '../../../assets/images/cybermonk.jpg';

  constructor(
    public movService: MoviesService,
    private _ActivatedRoute: ActivatedRoute,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this.movService.getPopularMovies(1);
    this.snapshotPageNo = Number(
      this._ActivatedRoute.snapshot.queryParams['pageNum']
    );

    this._ActivatedRoute.queryParams.subscribe((params) => {
      this.pageNum = Number(params['pageNum']) || 0;
    });

    // this._ActivatedRoute.params.subscribe((params) => {
    //   console.log(params);
    // });
  }

  nextPage() {
    this._router.navigate(['./'], {
      queryParams: { pageNum: this.pageNum + 1 },
      relativeTo: this._ActivatedRoute,
    });
    this.movService.getPopularMovies(this.pageNum + 2);
  }
  previousPage() {
    if (this.pageNum == 1) {
      return;
    }
    this._router.navigate(['./'], {
      queryParams: { pageNum: this.pageNum - 1 },
      relativeTo: this._ActivatedRoute,
    });
    this.movService.getPopularMovies(this.pageNum + 2);
  }
}
