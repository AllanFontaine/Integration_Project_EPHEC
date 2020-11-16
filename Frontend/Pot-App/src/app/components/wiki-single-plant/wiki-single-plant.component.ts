import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-wiki-single-plant',
  templateUrl: './wiki-single-plant.component.html',
  styleUrls: ['./wiki-single-plant.component.css']
})
export class WikiSinglePlantComponent implements OnInit {

  @Input() id : number;
  @Input() nom : string;
  @Input() nom_scientifique : string;
  @Input() besoin_hydrolique : number;
  @Input() date_semis_debut : Date;
  @Input() date_semis_fin : Date;
  @Input() densite_semi : number;
  @Input() recolte_en_jours : number;
  @Input() description : string;
  @Input() url_wiki : string;
  @Input() image : string;
  @Input() saison_fin : string;
  @Input() saison_debut : string;

 
  constructor() { }

  ngOnInit(): void {
  }

}
