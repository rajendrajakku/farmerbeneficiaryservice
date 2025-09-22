import { Routes } from '@angular/router';
import { StateWiseComponent } from './farmer-beneficiary-management/state-wise/state-wise';
import { DashboardComponent } from './farmer-beneficiary-management/dashboard/dashboard';
import { TalukaWiseComponent } from './farmer-beneficiary-management/taluka-wise/taluka-wise';
import { DistrictWiseComponent } from './farmer-beneficiary-management/district-wise/district-wise';
import { UploadComponent } from './farmer-beneficiary-management/upload/upload';
import { CreateComponent } from './farmer-beneficiary-management/create/create';
import { C } from '@angular/cdk/keycodes';
import { ApprovalComponent } from './farmer-beneficiary-management/approval/approval';
import { PaymentdetailComponent } from './farmer-beneficiary-management/paymentdetail/paymentdetail';
// import { DashboardComponent } from './dashboard/dashboard.component';
// import { StateWiseComponent } from './state-wise/state-wise.component';
// import { DistrictWiseComponent } from './district-wise/district-wise.component';
// import { TalukaWiseComponent } from './taluka-wise/taluka-wise.component';
// import { UploadComponent } from './upload/upload';
// import { CreateComponent } from './create/create.component';

export const FARMER_ROUTES: Routes = [
   {
    path: '',
    children: [
      { path: 'StateWiseComponent', component: StateWiseComponent },
      { path: 'DistrictWiseComponent', component: DistrictWiseComponent },
      { path: 'TalukaWiseComponent', component: TalukaWiseComponent },
      { path: 'UploadWiseComponent', component: UploadComponent },
      { path: 'CreateFarmerBeneficiary', component: CreateComponent },
      { path: 'ApprovalComponent', component: ApprovalComponent },
      { path: 'PaymentDetailComponent', component: PaymentdetailComponent },
    ],
  },
];