import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms'
import { MovieApiServiceService } from 'src/app/service/movie-api-service.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private service: MovieApiServiceService) { }

  ngOnInit(): void {
  }
  searchResult: any;
  searchForm = new FormGroup({
    'movieName': new FormControl(null)
  })
  submitForm() {
    console.log(this.searchForm.value);
    this.service.searchMovie(this.searchForm.value).subscribe((res) => {
      console.log(res);
      this.searchResult = res.results
    })
  }
}
