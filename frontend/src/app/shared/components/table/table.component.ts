import {
  AfterContentInit,
  Component,
  ContentChildren,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  QueryList,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import {
  MatColumnDef,
  MatTable,
  MatTableDataSource,
} from '@angular/material/table';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit, OnChanges, AfterContentInit {
  @Input() columns = [];
  @Input() list = [];
  // tslint:disable-next-line: no-output-on-prefix
  @Output() onClick = new EventEmitter();
  dataSource;
  listFields = [];

  @ViewChild(MatTable, { static: true }) table: MatTable<any>;
  @ContentChildren(MatColumnDef) columnDefs: QueryList<MatColumnDef>;

  constructor() {}
  ngOnChanges(changes: SimpleChanges): void {
    if (changes.list && !changes.list.firstChange) {
      this.dataSource = new MatTableDataSource<any>(changes.list.currentValue);
    }
  }

  ngOnInit(): void {
    this.listFields = this.columns.map((it) => it.field);
    this.dataSource = new MatTableDataSource<any>(this.list);
  }

  emit(row: any): void {
    this.onClick.emit(row);
  }

  ngAfterContentInit(): void {
    this.columnDefs.forEach((columnDef) => this.table.addColumnDef(columnDef));
    if (this.columnDefs.length) {
      this.listFields.push('actions');
    }
  }
}
