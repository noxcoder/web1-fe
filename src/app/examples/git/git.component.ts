import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { GitService } from 'services/git.service';

@Component({
  selector: 'app-git',
  templateUrl: './git.component.html',
  styleUrls: ['./git.component.css']
})
export class GitComponent implements OnInit {

  constructor(private _gitService: GitService, private _http: HttpClient) { }

  ngOnInit(): void {
    const url = "https://github.com/noxcoder/web1-fe/archive/refs/heads/main.zip";
    window.open(url, '_blank');
  }

}
