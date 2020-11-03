import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable()
export class PersonalGardenService{
  private url_plant: "http://127.0.0.1:8000/api/";
  private url_parcel: "http://127.0.0.1:8000/api/parcelle";


  constructor(private http: HttpClient){}

  get_plants():Observable<any>{
    return this.http.get("http://127.0.0.1:8000/api/plante/")
  }

  get_my_parcels(user_id):Observable<any>{
    return this.http.get("http://127.0.0.1:8000/api/parcelle-user/"+ user_id +"/")
  }

  get_one_parcel(id):Observable<any>{
    return this.http.get("http://127.0.0.1:8000/api/parcelle/"+id+"/")
  }

  get_user_id(){
    return localStorage.getItem('user_id');
  }

  add_parcel(parcel):Observable<any>{
    return this.http.post("http://127.0.0.1:8000/api/parcelle/", parcel)
  }

}
