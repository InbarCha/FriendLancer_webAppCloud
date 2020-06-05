import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

class Forum {
  forumName: string;
  forumId: string;
}

@Injectable({
  providedIn: 'root'
})

export class ForumService {
  constructor(private http: HttpClient) {
  }
  createForum(forumName: string) {
    return this.http.post('http://localhost:3000/api/forums', {
      forumName: forumName,
      forumId: this.generateId(),
      numTimesWatched: 0,
    });
  }

  editForum(forumName:string, forumId:string) {
    return this.http.post('http://localhost:3000/api/forums/' + forumId, {
      forumId: forumId,
      forumName: forumName,
    });
  }

  incNumTimesWatched(forumId:string, forumName: string) {
    return this.http.post('http://localhost:3000/api/forums/incNumTimesWatched', {
      forumId: forumId,
      forumName: forumName
    });
  }

  getAllForums() {
    return this.http.get<Forum[]>('http://localhost:3000/api/forums');
  }

  getForumById(forumId: string) {
    return this.http.get<Forum>('http://localhost:3000/api/forums/' + forumId)
  }

  generateId() {
    return '_' + Math.random().toString(36).substr(2, 9);
  }

  setActiveForum(forum: Forum) {
    localStorage.setItem('currentForum', JSON.stringify(forum));
  }

  deactivateForum() {
   localStorage['currentForum'] = '';
  }

  getActiveForum() {
    return JSON.parse(localStorage['currentForum']);
  }
 }
