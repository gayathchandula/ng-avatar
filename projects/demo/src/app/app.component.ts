import { Component } from '@angular/core';
import { AvatarConfig } from 'ng-avatar-creator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo';
  savedConfigStr = '';

  initialConfig: AvatarConfig = {
    style: 'identicon',
    seed: 'demoUser',
    bgColor: '#f44336',
    shape: 'square'
  };

  onAvatarConfigChanged(config: AvatarConfig) {
    console.log('Avatar changed:', config);
    // Here you would typically save to backend
    this.savedConfigStr = JSON.stringify(config, null, 2);
  }
}
