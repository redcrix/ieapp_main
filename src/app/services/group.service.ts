import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GlobalService } from './global.service';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  constructor(
    private http: HttpClient,
    private _globalServ: GlobalService
    ) { }

  getGroupCategories() {
    return this.http.get(environment.apiUrl + '/supercategories')
  }

  getGroupSettings() {
    return this.http.get(environment.apiUrl + '/groups-setting')
  }

  getPeoplesForInvitation() {
    return this.http.get(environment.apiUrl + '/app-search-people')
  }

  getRecommendedGroupList() {
    return this.http.get(environment.apiUrl + `/groups/${this._globalServ.idUser}?type=recommended`)
  }

  getGroupList() {
    return this.http.get(environment.apiUrl + `/groups/${this._globalServ.idUser}?type=user`)
  }

  getGroupDetail(id) {
    return this.http.get(environment.apiUrl + `/group/${id}`);
  }

  joinGroup(id, param) {
    return this.http.post(environment.apiUrl + `/join-group/${id}`, param);
  }

  joinGroupPlan(id, param) {
    return this.http.post(environment.apiUrl + `/join-group-plan/${id}`, param);
  }

  leaveGroupPlan(id, param) {
    return this.http.post(environment.apiUrl + `/leave-group/${id}`, param);
  }

  getGroupComments(id) {
    return this.http.get(environment.apiUrl + `/group-comments/${id}`);
  }

  getGroupPlans(id, email) {
    return this.http.get(environment.apiUrl + `/group-plans/${id}?email=${email}`);
  }

  getGroupPlanItem(id, email) {
    return this.http.get(environment.apiUrl + `/group-plan/${id}?email=${email}`);
  }

  addComment(id, param) {
    return this.http.post(environment.apiUrl + `/group-add-comment/${id}`, param);
  }

  getAllPeople() {
    return this.http.get(environment.apiUrl + `/app-search?type=people`);
  }

  getExistingGroupMembers(groupId) {
    return this.http.get(environment.apiUrl + `/group-members/${groupId}`);
  }

  joinedGroupPlans(id) {
    return this.http.get(environment.apiUrl + `/joined-group-plans/${id}`);
  }

  joinedGroups(id) {
    return this.http.get(environment.apiUrl + `/joined-groups/${id}`);
  }

  b64toBlob(b64Data, contentType, sliceSize) {
    contentType = contentType || '';
    sliceSize = sliceSize || 512;

    var byteCharacters = atob(b64Data);
    var byteArrays = [];

    for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
      var slice = byteCharacters.slice(offset, offset + sliceSize);

      var byteNumbers = new Array(slice.length);
      for (var i = 0; i < slice.length; i++) {
        byteNumbers[i] = slice.charCodeAt(i);
      }

      var byteArray = new Uint8Array(byteNumbers);

      byteArrays.push(byteArray);
    }

    var blob = new Blob(byteArrays, {type: contentType});
    return blob;
  }

  createGroup(param, imageData) {
    let formData = new FormData();
    let filename = 'groupImage_' + Math.random()*100000000000000000;
    formData.append('image', this.b64toBlob(imageData, 'image/png', 256), filename + '.png');
    for ( var key in param ) {
      formData.append(key, param[key]);
    }
    return this.http.post(environment.apiUrl + `/add-group`, formData);
  }

}
