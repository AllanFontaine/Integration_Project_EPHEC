import { Routes } from '@angular/router';

import { DashboardComponent } from '../../components/dashboard/dashboard.component';
import { UserProfileComponent } from '../../components/user-profile/user-profile.component';
import { TableListComponent } from '../../components/table-list/table-list.component';
import { TypographyComponent } from '../../components/typography/typography.component';
import { IconsComponent } from '../../components/icons/icons.component';
import { NotificationsComponent } from '../../components/notifications/notifications.component';
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
import { GetLoggedInComponent } from "../../components/get-logged-in/get-logged-in.component";
import { AuthGuardSidebar } from "../../service/auth-guard-sidebar.service";
import { BarWaterGraphComponent } from "../../components/bar-water-graph/bar-water-graph.component"
import { SinglePlantDetailComponent } from 'app/components/single-plant-detail/single-plant-detail.component';
import { SignUpComponent } from 'app/components/sign-up/sign-up.component';
import { ShopComponent } from 'app/components/shop/shop.component';


export const AdminLayoutRoutes: Routes = [
    { path: '',      component: DashboardComponent},
    { path: 'dashboard/:user_id',      component: SingleParcelComponent},
    { path: 'dashboard',      component: DashboardComponent},
    { path: 'user-profile',   component: UserProfileComponent},
    { path: 'table-list',     component: TableListComponent},
    { path: 'typography',     component: TypographyComponent},
    { path: 'icons',          component: IconsComponent},
    { path: 'maps',           component: MapsComponent},
    { path: 'notifications',  component: NotificationsComponent},
    { path: 'add-parcel',     component: AddParcelComponent },
    { path: 'historique',     component: HistoriqueParcelComponent},
];
