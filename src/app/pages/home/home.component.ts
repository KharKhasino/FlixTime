import { Component, OnInit } from '@angular/core';
import { MovieApiServiceService } from 'src/app/service/movie-api-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private service: MovieApiServiceService) { }

  bannerResult: any = [];
  trendingMovieResult: any = [];

  ngOnInit(): void {
    this.bannerData();
  }

  trendingData() {
    this.service.trendingMoviesApiData().subscribe((res) => {
      console.log(res);
      this.trendingMovieResult = res.results;
    })
  }

  bannerData() {
    this.service.bannerApiData().subscribe((res => {
      console.log(res);
      this.bannerResult = res.results;
    }))
  }
}
