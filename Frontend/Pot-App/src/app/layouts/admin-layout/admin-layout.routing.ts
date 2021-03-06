import { Routes } from '@angular/router';

import { DashboardComponent } from '../../components/dashboard/dashboard.component';
import { UserProfileComponent } from '../../components/user-profile/user-profile.component';
import { HistoriqueParcelComponent } from '../../components/historique-parcel/historique-parcel.component';
import { SingleParcelComponent } from '../../components/single-parcel/single-parcel.component';
import { AddParcelComponent } from '../../components/add-parcel/add-parcel.component';
import { LoginViewComponent } from "../../components/login-view/login-view.component";
import { SignUpComponent } from "../../components/sign-up/sign-up.component";
import { HomeViewComponent } from "../../components/home-view/home-view.component";
import { AuthGuard } from "../../service/auth-guard.service";
import { AboutUsComponent } from "../../components/about-us/about-us.component";
import { ShopComponent } from "../../components/shop/shop.component";
import { WikiViewComponent } from "../../components/wiki-view/wiki-view.component";
import { AuthGuardSidebar } from "../../service/auth-guard-sidebar.service";
import { BarWaterGraphComponent } from "../../components/bar-water-graph/bar-water-graph.component"
import { WikiSinglePlantComponent } from 'app/components/wiki-single-plant/wiki-single-plant.component';
import { SinglePlantDetailComponent } from 'app/components/single-plant-detail/single-plant-detail.component';


export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard/:user_id', component: SingleParcelComponent, canActivate: [AuthGuardSidebar] },
    { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuardSidebar] },
    { path: 'user-profile', component: UserProfileComponent, canActivate: [AuthGuardSidebar] },
    { path: 'wiki', component: WikiViewComponent },
   
    { path: 'shop', component: ShopComponent },
    { path: 'about-us', component: AboutUsComponent },
    { path: 'add-parcel', component: AddParcelComponent, canActivate: [AuthGuardSidebar] },
    { path: 'historique', component: HistoriqueParcelComponent, canActivate: [AuthGuardSidebar] },
    { path: 'login', component: LoginViewComponent },
    { path: 'register', component: SignUpComponent },
    { path: 'home', component: HomeViewComponent },
    { path: 'graphtest', component: BarWaterGraphComponent },
    { path: '', component: DashboardComponent, canActivate: [AuthGuard] },
    { path: 'wiki/:plant_id/:nom_wiki', component: SinglePlantDetailComponent },
];
