import { Component } from '@angular/core';
import { MatSortModule, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router, RouterLink } from '@angular/router';
import { SidebarService, apiResultFormat, pageSelection } from '../../../core/core.index';
import { routes } from '../../../core/helpers/routes';
import { DataService } from '../../../core/service/data/data.service';
import { inventoryreport } from '../../../shared/model/page.model';
import { PaginationService, tablePageSize } from '../../../shared/custom-pagination/pagination.service';
import { CommonModule } from '@angular/common';
import { CustomPaginationComponent } from '../../../shared/custom-pagination/custom-pagination.component';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { DateRangePickerComponent } from '../../../features/common/date-range-picker/date-range-picker.component';
import { FarmerBeneficiary } from '../../models/models/farmer-beneficiary.model';

interface data {
  value: string;
}
@Component({
  selector: 'app-approval',
  imports: [CommonModule, CustomPaginationComponent, MatSelectModule, DateRangePickerComponent, FormsModule, MatSortModule],
  templateUrl: './approval.html',
  styleUrl: './approval.scss'
})
export class ApprovalComponent {
  selectedRow: any = null;
  initChecked = false;
  public routes = routes;
  // pagination variables
  public tableData: Array<FarmerBeneficiary> = [];
  public pageSize = 10;
  public serialNumberArray: Array<number> = [];
  public totalData = 0;
  showFilter = false;
  dataSource!: MatTableDataSource<FarmerBeneficiary>;
  public searchDataValue = '';
  public row = true;
  //** / pagination variables
  selectedItems: any[] = [];

  constructor(
    private data: DataService,
    private pagination: PaginationService,
    private router: Router,
    private sidebar: SidebarService
  ) {
    this.tableData = [
      {
        srNo: 1,
        state: 'Maharashtra',
        district: 'Nagpur',
        taluka: 'Hingna',
        village: 'Wadi',
        farmerName: 'Ram Shinde',
        beneficiaryId: 'BENF-001',
        shopNo: 'SHOP-101',
        rcNo: 'RC-201',
        uniqueNoOld: 'OLD-1001',
        aadhaarNumber: '1234 5678 9012',
        aadhaarReferenceNo: 'AADH-REF-001',
        firstName: 'Ram',
        middleName: 'Gopal',
        surname: 'Shinde',
        fullName: 'Ram Gopal Shinde',
        bankName: 'State Bank of India',
        accountNumber: '1234567890',
        ifscCode: 'SBIN0001234',
        beneficiaryName: 'Ram Shinde',
        totalMembers: 4,
        amount: 5000,
        isSelected: false
      },
      {
        srNo: 2,
        state: 'Gujarat',
        district: 'Ahmedabad',
        taluka: 'Daskroi',
        village: 'Vastral',
        farmerName: 'Priya Patel',
        beneficiaryId: 'BENF-002',
        shopNo: 'SHOP-102',
        rcNo: 'RC-202',
        uniqueNoOld: 'OLD-1002',
        aadhaarNumber: '2345 6789 0123',
        aadhaarReferenceNo: 'AADH-REF-002',
        firstName: 'Priya',
        middleName: 'Manoj',
        surname: 'Patel',
        fullName: 'Priya Manoj Patel',
        bankName: 'HDFC Bank',
        accountNumber: '9876543210',
        ifscCode: 'HDFC0005678',
        beneficiaryName: 'Priya Patel',
        totalMembers: 3,
        amount: 4500,
        isSelected: false
      },
      {
        srNo: 3,
        state: 'Rajasthan',
        district: 'Jaipur',
        taluka: 'Sanganer',
        village: 'Jagatpura',
        farmerName: 'Ravi Sharma',
        beneficiaryId: 'BENF-003',
        shopNo: 'SHOP-103',
        rcNo: 'RC-203',
        uniqueNoOld: 'OLD-1003',
        aadhaarNumber: '3456 7890 1234',
        aadhaarReferenceNo: 'AADH-REF-003',
        firstName: 'Ravi',
        middleName: 'Kumar',
        surname: 'Sharma',
        fullName: 'Ravi Kumar Sharma',
        bankName: 'ICICI Bank',
        accountNumber: '4567890123',
        ifscCode: 'ICIC0009876',
        beneficiaryName: 'Ravi Sharma',
        totalMembers: 5,
        amount: 6000,
        isSelected: false
      },
      {
        srNo: 4,
        state: 'Maharashtra',
        district: 'Pune',
        taluka: 'Haveli',
        village: 'Wagholi',
        farmerName: 'Anjali Deshmukh',
        beneficiaryId: 'BENF-004',
        shopNo: 'SHOP-104',
        rcNo: 'RC-204',
        uniqueNoOld: 'OLD-1004',
        aadhaarNumber: '4567 8901 2345',
        aadhaarReferenceNo: 'AADH-REF-004',
        firstName: 'Anjali',
        middleName: 'Sanjay',
        surname: 'Deshmukh',
        fullName: 'Anjali Sanjay Deshmukh',
        bankName: 'Axis Bank',
        accountNumber: '5678901234',
        ifscCode: 'UTIB0001122',
        beneficiaryName: 'Anjali Deshmukh',
        totalMembers: 2,
        amount: 3000,
        isSelected: false
      },
      {
        srNo: 5,
        state: 'Gujarat',
        district: 'Surat',
        taluka: 'Choryasi',
        village: 'Olpad',
        farmerName: 'Sanjay Shah',
        beneficiaryId: 'BENF-005',
        shopNo: 'SHOP-105',
        rcNo: 'RC-205',
        uniqueNoOld: 'OLD-1005',
        aadhaarNumber: '5678 9012 3456',
        aadhaarReferenceNo: 'AADH-REF-005',
        firstName: 'Sanjay',
        middleName: 'Prakash',
        surname: 'Shah',
        fullName: 'Sanjay Prakash Shah',
        bankName: 'Kotak Mahindra Bank',
        accountNumber: '6789012345',
        ifscCode: 'KKBK0000345',
        beneficiaryName: 'Sanjay Shah',
        totalMembers: 6,
        amount: 7000,
        isSelected: false
      }
    ];
    this.totalData = this.tableData.length;
    this.dataSource = new MatTableDataSource<FarmerBeneficiary>(this.tableData);


    // this.data.getDataTable().subscribe((apiRes: apiResultFormat) => {
    //   this.totalData = apiRes.totalData;
    //   this.pagination.tablePageSize.subscribe((res: tablePageSize) => {
    //     if (this.router.url == this.routes.inventoryReport) {
    //       this.getTableData({ skip: res.skip, limit: this.totalData  });
    //       this.pageSize = res.pageSize;
    //     }
    //   });
    // });
  }

  private getTableData(pageOption: pageSelection): void {
    this.data.getInventoryReport().subscribe((apiRes: apiResultFormat) => {
      this.tableData = [];
      this.serialNumberArray = [];
      this.totalData = apiRes.totalData;
      apiRes.data.map((res: FarmerBeneficiary, index: number) => {
        const serialNumber = index + 1;
        if (index >= pageOption.skip && serialNumber <= pageOption.limit) {
          res.srNo = serialNumber;
          this.tableData.push(res);
          this.serialNumberArray.push(serialNumber);
        }
      });
      this.dataSource = new MatTableDataSource<FarmerBeneficiary>(this.tableData);
      this.pagination.calculatePageSize.next({
        totalData: this.totalData,
        pageSize: this.pageSize,
        tableData: this.tableData,
        serialNumberArray: this.serialNumberArray,
      });
    });
  }

  isSelected(item: any): boolean {
    return this.selectedItems.includes(item);
  }

  onCheckboxChange(item: any, event: any): void {
    if (event.target.checked) {
      this.selectedItems.push(item);
    } else {
      const index = this.selectedItems.indexOf(item);
      if (index > -1) {
        this.selectedItems.splice(index, 1);
      }
    }
    console.log('Selected Items:', this.selectedItems);
  }

  toggleAllCheckboxes(event: any): void {
    if (event.target.checked) {
      this.selectedItems = [...this.tableData];
    } else {
      this.selectedItems = [];
    }
    console.log('Selected Items:', this.selectedItems);
  }

  public sortData(sort: Sort) {
    const data = this.tableData.slice();
    if (!sort.active || sort.direction === '') {
      this.tableData = data;
    } else {
      this.tableData = data.sort((a, b) => {
        const aValue = (a as any)[sort.active];
        const bValue = (b as any)[sort.active];
        return (aValue < bValue ? -1 : 1) * (sort.direction === 'asc' ? 1 : -1);
      });
    }
  }

  public searchData(value: string): void {
    this.searchDataValue = value.trim().toLowerCase();
    this.dataSource.filter = this.searchDataValue;
    this.tableData = this.dataSource.filteredData;
    this.row = this.tableData.length > 0;

    if (this.searchDataValue !== '') {
      // Handle filtered data
      this.pagination.calculatePageSize.next({
        totalData: this.tableData.length,
        pageSize: this.pageSize,
        tableData: this.tableData,
        serialNumberArray: this.tableData.map((_, i) => i + 1), // Generates serials like [1, 2, 3...]
      });
    } else {
      // Handle reset to full data
      this.pagination.calculatePageSize.next({
        totalData: this.totalData,
        pageSize: this.pageSize,
        tableData: this.tableData,
        serialNumberArray: this.serialNumberArray,
      });
    }
  }





  public filter = false;
  openFilter() {
    this.filter = !this.filter;
  }
  isCollapsed: boolean = false;
  toggleCollapse() {
    this.sidebar.toggleCollapse();
    this.isCollapsed = !this.isCollapsed;
  }
  public selectedValue1 = '';
  public selectedValue2 = '';
  public selectedValue3 = '';
  selectedList1: data[] = [
    { value: 'Sort by Date' },
    { value: '25 9 23' },
    { value: '12 9 23' },
  ];
  selectedList2: data[] = [
    { value: 'Choose Product' },
    { value: 'Bold V3.2' },
    { value: 'Nike Jordan' },
  ];
  selectedList3: data[] = [
    { value: 'Choose Product' },
    { value: 'Accessories' },
    { value: 'Shoe' },
  ];
  selectAll(initChecked: boolean) {
    if (!initChecked) {
      this.tableData.forEach((f) => {
        f.isSelected = true;
      });
    } else {
      this.tableData.forEach((f) => {
        f.isSelected = false;
      });
    }
  }

}
