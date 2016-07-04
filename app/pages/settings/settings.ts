import { Component } from '@angular/core';
import { NavController, Alert} from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/settings/settings.html'
})
export class Settings {
  settings: {enableProfile?: boolean} = {};
  isProfileEnabled = false;
  
  constructor(private navController: NavController) {}
  
  setProfileStatus(form) {
    
    if(form.valid) {
      this.isProfileEnabled = this.settings.enableProfile;
    }
    let alert = Alert.create({
      title: 'setProfileStatus(settingsForm)',
      subTitle: 'Settings.enableProfile = ' + this.settings.enableProfile,
      buttons: ['Ok']
    });
    this.navController.present(alert);
  }
  
}
