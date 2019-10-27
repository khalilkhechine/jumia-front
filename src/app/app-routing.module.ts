import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './components/home/home/home.component';
import {HomeContentComponent} from './components/home/home-content/home-content.component';
import {SignInComponent} from './components/sign-in/sign-in.component';
import {CompanySignUpComponent} from './components/sign-up/company-sign-up/company-sign-up.component';
import {DefaultLayoutComponent} from './components/default-layout/default-layout.component';
import {AuthGuard} from './services/shared-services/auth.service';
import {CompanyDashboardComponent} from './components/dashboard/company-dashboard/company-dashboard.component';
import {ProfessionalDashboardComponent} from './components/dashboard/professional-dashboard/professional-dashboard.component';
import {AdminDashboardComponent} from './components/dashboard/admin-dashboard/admin-dashboard.component';
import {ProfessionalSignUpComponent} from './components/sign-up/professional-sign-up/professional-sign-up.component';
import {BusinessSectorComponent} from './components/admin/business-sector/business-sector.component';
import {CompanyAdminComponent} from './components/admin/company-admin/company-admin.component';
import {MatchJobsComponent} from './components/admin/match-jobs/match-jobs.component';
import {TravelComponent} from './components/professional-components/travel/travel.component';
import {MatchingComponent} from './components/professional-components/matching/matching.component';
import {ProfessionalAdminComponent} from './components/admin/professional-admin/professional-admin.component';
import {InvitationComponent} from './components/company/invitation/invitation.component';
import {ProfessionalCompanyComponent} from './components/company/professional-company/professional-company.component';
import {CallbackComponent} from './components/callback/callback.component';
import {AdminProfilComponent} from './components/admin/admin-profil/admin-profil.component';
import {CompanyProfileComponent} from './components/company/company-profile/company-profile.component';
import {ProfessionalProfileComponent} from './components/professional-components/professional-profile/professional-profile.component';

const routes: Routes = [
  {path: 'auth/callback', component: CallbackComponent},
  {
    path: '', component: HomeComponent,
    children: [
      {path: '', component: HomeContentComponent},
      {path: 'sign-in', component: SignInComponent},
      {path: 'sign-up', component: CompanySignUpComponent},
      {path: 'sign-up/professional/:token', component: ProfessionalSignUpComponent},
    ]
  },
  {
    path: 'dashboard', component: DefaultLayoutComponent, canActivate: [AuthGuard],
    children: [
      {path: 'company', component: CompanyDashboardComponent},
      {path: 'professional', component: ProfessionalDashboardComponent},
      {path: 'admin', component: AdminDashboardComponent},
    ]
  },
  {
    path: 'company', component: DefaultLayoutComponent, canActivate: [AuthGuard],
    children: [
      {path: 'invitation', component: InvitationComponent},
      {path: 'professional', component: ProfessionalCompanyComponent},
      {path: 'profile', component: CompanyProfileComponent},
    ]
  },
  {
    path: 'admin', component: DefaultLayoutComponent, canActivate: [AuthGuard],
    children: [
      {path: 'business-sector', component: BusinessSectorComponent},
      {path: 'company', component: CompanyAdminComponent},
      {path: 'professional', component: ProfessionalAdminComponent},
      {path: 'match-jobs', component: MatchJobsComponent},
      {path: 'profile', component: AdminProfilComponent},
    ]
  },
  {
    path: 'professional', component: DefaultLayoutComponent, canActivate: [AuthGuard],
    children: [
      {path: 'travel', component: TravelComponent},
      {path: 'matching', component: MatchingComponent},
      {path: 'profile', component: ProfessionalProfileComponent},
    ]
  },
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
