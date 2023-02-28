import { NgModule } from '@angular/core';

// PrimeNg | mantener imports ordenados por orden alfabético
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { MenubarModule } from 'primeng/menubar';

@NgModule({
  declarations: [

  ],
  exports: [
    ButtonModule,
    CardModule,
    MenubarModule
  ], // exportamos al modulo principal
})
export class PrimeNgModule {}
