import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GlobalService } from '../services/global.service';
import { environment } from '../../environments/environment';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class PlanService {

  listParticipations: any;

  constructor(
    private http: HttpClient,
    private _globalServ: GlobalService,
    private storage: Storage
  ) {
  }

  getRecommendedPlans() {
    if(this._globalServ.org == 'CEU') {
      return this.http.get(environment.apiUrl + '/app-recommended-plans');
    } else if(this._globalServ.org == 'IE') {
      return this.http.get(environment.apiUrl + '/app-recommended-plans?entity=IE');
    }
  }

  getParticipants(id: any, value: any) {
    return this.http.get(environment.apiUrl + '/app-plan-participants/' + id, { params: value });
  }


  getPlansFiltered(id: any, value: any) {
    if(this._globalServ.org == 'CEU') {
      return this.http.get(environment.apiUrl + '/app-filtered-plans/' + id, { params: value });
    } else if(this._globalServ.org == 'IE') {
      return this.http.get(environment.apiUrl + '/app-filtered-plans/' + id + '?entity=IE', { params: value });
    }
  }

  getItemUniv(id: any) {
    if(this._globalServ.org == 'CEU') {
      return this.http.get(environment.apiUrl + '/get-plan/' + id);
    } else if(this._globalServ.org == 'IE') {
      return this.http.get(environment.apiUrl + '/get-ie-plan/' + id);
    }
  }

  getItemClub(id: any) {
    return this.http.get(environment.apiUrl + '/club-plan/' + id);
  }

  getIEClubPlans() {
    return this.http.get(environment.apiUrl + '/ie-club-plans/');
  }

  getParticipations(id: any) {
    console.log('>>2');
    if(this._globalServ.org == 'CEU') {
      console.log('>>3');
      return this.http.get(environment.apiUrl + '/get-user-participations/' + id);
    } else if(this._globalServ.org == 'IE') {
      console.log('>>4');
      return this.http.get(environment.apiUrl + '/get-ie-user-participations/' + id);
    }
  }

  joinPlanClub(value: any) {
    return this.http.post(environment.apiUrl + '/app-add-club-participant', value)
  }

  leavePlanClub(id: any) {
    return this.http.post(environment.apiUrl + '/app-delete-club-participant/' + id, {})
  }

  joinPlanUniversity(value: any) {
    return this.http.post(environment.apiUrl + '/app-add-participant', value)
  }

  leavePlanUniversity(id: any) {
    return this.http.post(environment.apiUrl + '/app-delete-participant/' + id, {})
  }

  getUserPlans(id: any) {
    if(this._globalServ.org == 'CEU') {
      return this.http.get(environment.apiUrl + '/get-user-plans/' + id);
    } else if(this._globalServ.org == 'IE') {
      return this.http.get(environment.apiUrl + '/get-ie-user-plans/' + id);
    }
  }

  getAccessibleGroup(id) {
    return this.http.get(environment.apiUrl + `/can-create-group-plan/${id}`)
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

  createPlan(endpoint, param, imageData) {
    let formData = new FormData();
    let filename = 'planImage_' + Math.random()*100000000000000000;
    formData.append('image', this.b64toBlob(imageData, 'image/png', 256), filename + '.png');
    for ( var key in param ) {
      formData.append(key, param[key]);
    }
    return this.http.post(environment.apiUrl + `/${endpoint}`, formData);
  }

  //get data to plan list tab
  getDataPlanList() {
    this.storage.get('idUser').then((idUser) => {
      console.log('>>1', idUser);
      this.getParticipations(idUser).subscribe(data => {
        this.listParticipations = data;
        console.log('listParticipations: ', data);
        this.getRecommendedPlans()
          .subscribe(data => {
            this._globalServ.listPlanHighlight = data;
            for (let item of this._globalServ.listPlanHighlight.recommended_plans) {
              for (let item2 of this.listParticipations) {
                let itemParticipants = this._globalServ.org == 'CEU' ? item2.Participants : item2.IE_Participants;
                for (let item3 of itemParticipants) {
                  let planId = this._globalServ.org == 'CEU' ? item3.fk_plan_id : item3.fk_ie_plan_id;
                  if (planId == item.id) {
                    item.join = true;
                    item.idParticipation = item3.id;
                  }
                }
              }
            }
          }, error => { console.log(error); });

        this.getPlansFiltered(idUser, { 'entity': this._globalServ.org })
          .subscribe(data => {
            this._globalServ.listPlanFiltered = data;
            for (let item of this._globalServ.listPlanFiltered.plans) {
              for (let item2 of this.listParticipations) {
                var itemParticipants = this._globalServ.org == 'CEU' ? item2.Participants : item2.IE_Participants;
                for (let item3 of itemParticipants) {
                  var planId = this._globalServ.org == 'CEU' ? item3.fk_plan_id : item3.fk_ie_plan_id;
                  if (planId == item.id) {
                    item.join = true;
                    item.idParticipation = item3.id;
                  }
                }
              }
            }
          }, error => {
            console.log(error);
          });
      });
    });

  }
}
