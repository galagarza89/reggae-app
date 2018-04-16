import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';

@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.css']
})

export class ArtistsComponent implements OnInit {

  constructor(private http: Http) { }

    artists = [];
    getData = function(){
    	this.http.get('./assets/artists.json').subscribe(
    		(res: Response) => {
    			this.artists = res.json();
    		}
    		)
    	}
 

  ngOnInit() {
  	this.getData();
  }

}
