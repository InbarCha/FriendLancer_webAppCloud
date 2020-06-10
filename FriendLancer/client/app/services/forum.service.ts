import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

class Forum {
  forumName: string;
  forumId: string;
  numTimesWatched: number;
}

@Injectable({
  providedIn: 'root'
})

export class ForumService {
  constructor(private http: HttpClient) {
  }
  createForum(forumName: string) {
    return this.http.post('/api/forums', {
      forumName: forumName,
      forumId: this.generateId(),
      numTimesWatched: 0,
    });
  }

  editForum(forumName:string, forumId:string) {
    return this.http.post('/api/forums/' + forumId, {
      forumId: forumId,
      forumName: forumName,
    });
  }

  incNumTimesWatched(forumId:string, forumName: string) {
    return this.http.post('/api/forums/incNumTimesWatched', {
      forumId: forumId,
      forumName: forumName
    });
  }

  getAllForums() {
    return this.http.get<Forum[]>('/api/forums');
  }

  getForumById(forumId: string) {
    return this.http.get<Forum>('/api/forums/' + forumId)
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
