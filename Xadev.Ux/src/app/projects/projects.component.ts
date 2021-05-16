import { Component, OnInit, OnDestroy, ViewChild, TemplateRef } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { DialogService } from '../services/dialog-service/dialog.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit, OnDestroy {
  @ViewChild('privacyPolicyTemplate') privacyPolicyTemplate: TemplateRef<any>;
  @ViewChild('copyrightNoticeTemplate') copyrightNoticeTemplate: TemplateRef<any>;

  routeSub: Subscription;
  projectId = '';
  projectDescription: string;
  projectName: string;
  projectSubtitle: string;

  constructor(private route: ActivatedRoute, private dialogSvc: DialogService) { }

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe((param: Params) => {
      if (param && param.app) {
        this.projectId = param.app;
        this.getAppInfo();
      }
    });
  }

  getAppInfo() {
    // TODO: Get data from server using projectId

    switch (this.projectId) {
      case 'PKMN_EV':
        // tslint:disable-next-line: max-line-length
        this.projectDescription = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
        this.projectName = 'PKMN EV';
        this.projectSubtitle = 'Pokémon Stat Calculator for iOS';
        break;
      case 'RES_EXTENSA':
        this.projectDescription = `Res Extensa is a work of interaction fiction (IF) that chronicles the experience of a young adult's
         journey through a mysterious dream-world after taking a puff from the fictional vape, the "Orbis."
         <br /><br />
         Res Extensa was created with
         Inform 7. To play a work like this one, you need an interpreter program: many are available, among them Gargoyle for macOS or
         Windows; Windows Frotz or Windows Glulxe for Windows. Or you can play without downloading anything by following the
         "Play In-Browser" link, using the Quixe interpreter. This will take you to a new tab and you\'ll need to have Javascript
         enabled on your web browser.`;
        this.projectName = 'Res Extensa (2016)';
        this.projectSubtitle = 'A work of interactive fiction.';
    }
  }

  openDialog(template: TemplateRef<any>): void {
    this.dialogSvc.openDialog(template);
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }

}
