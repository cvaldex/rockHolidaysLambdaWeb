import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-tweet-publish-success',
  templateUrl: './tweet-publish-success.component.html',
  styleUrls: ['./tweet-publish-success.component.css']
})
export class TweetPublishSuccessComponent implements OnInit {
    id: String;
    constructor(private route: ActivatedRoute , private router: Router) { }

    ngOnInit() {
        this.id = this.route.snapshot.params['id'];
    }

    goBack() {
        this.router.navigate(['/tweet-publish/']);
    }
}
