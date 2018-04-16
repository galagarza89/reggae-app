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
    private _id: any;
    private name: any;
    private image_url: any;
    private website_url: any;
    private twitter_url: any;
    private facebook_url: any;
    private instagram_url: any;
    private bio: any;
    private info_url: any;
  
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
