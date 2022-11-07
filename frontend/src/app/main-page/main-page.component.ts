import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TranslocoService } from '@ngneat/transloco';
import { LoginDialogComponent } from '../login-dialog/login-dialog.component';

@Component({
  selector: 'main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.less']
})
export class MainPageComponent{

  currentLanguage = 'FR';

  constructor(public dialog: MatDialog, private readonly translocoService: TranslocoService) { }

  openLoginDialog(): void {
    const dialogRef = this.dialog.open(LoginDialogComponent, {
      width: '40vw',
      data: 'Hello',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }

  toggleLanguage(){
    if(this.currentLanguage === 'FR')
    {
      this.translocoService.setActiveLang('fr');
      this.currentLanguage = 'EN';
    }
    else if(this.currentLanguage === 'EN')
    {
      this.translocoService.setActiveLang('en');
      this.currentLanguage = 'FR';
    }

  }
}
