import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { PrimaryLayoutComponent } from './layouts/primary-layout/primary-layout.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, PrimaryLayoutComponent],
  imports: [CommonModule, RouterModule],
  exports: [PrimaryLayoutComponent],
})
export class ThemeModule {}
