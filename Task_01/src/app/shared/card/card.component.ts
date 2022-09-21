import { Component, OnInit, Input } from '@angular/core';
import { Movie } from "../../models/movies.model";
import { MoviesService } from 'src/app/services/movies-service.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() data!: Movie;

  constructor(public movService: MoviesService) { }

  ngOnInit(): void {
  }

}
