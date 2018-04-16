import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Http, Response, Headers } from '@angular/http';

@Component({
  selector: 'app-individual-artist',
  templateUrl: './individual-artist.component.html',
  styleUrls: ['./individual-artist.component.css']
})

export class IndividualArtistComponent implements OnInit {

	private routeSub:any;
	id: string;

	constructor(private route: ActivatedRoute, private http: Http) { }


	artist = [];
	
	ngOnInit() {
		this.routeSub = this.route.params.subscribe(params => {
			this.id = params['id'];
		})

    	this.http.get(`http://localhost:3000/api/artist/${this.id}`).subscribe(
    		(res: Response) => {
    			console.log(this.artist = res.json());
    		}
    		)


	}

} 
