import { NgModule } from "@angular/core";
import {
  MatButtonModule,
  MatCheckboxModule,
  MatFormFieldModule,
  MatCardModule,
  MatInputModule,
  MatSelectModule,
  MatProgressSpinnerModule,
  MatGridListModule,
  MatToolbarModule,
  MatTableModule,
  MatExpansionModule,
  MatDividerModule,
  MatListModule,
  MatDialogModule,
  MatSnackBarModule,
  MatTooltipModule,
  MatSidenavModule
} from "@angular/material";

const modules = [
  MatButtonModule,
  MatCheckboxModule,
  MatFormFieldModule,
  MatCardModule,
  MatInputModule,
  MatSelectModule,
  MatProgressSpinnerModule,
  MatGridListModule,
  MatToolbarModule,
  MatTableModule,
  MatExpansionModule,
  MatDividerModule,
  MatListModule,
  MatDialogModule,
  MatSnackBarModule,
  MatTooltipModule,
  MatSidenavModule
];
@NgModule({
  imports: [modules],
  exports: [modules],
  declarations: []
})
export class MaterialModule {}