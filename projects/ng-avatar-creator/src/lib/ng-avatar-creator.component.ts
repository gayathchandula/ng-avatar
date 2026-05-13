import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { AvatarConfig, PREDEFINED_COLORS, AVATAR_STYLES } from './avatar-models';

@Component({
  selector: 'lib-ng-avatar-creator',
  templateUrl: './ng-avatar-creator.component.html',
  styleUrls: ['./ng-avatar-creator.component.css']
})
export class NgAvatarCreatorComponent implements OnInit {
  @Input() firstName: string = '';
  @Input() lastName: string = '';
  @Input() size: number = 64;
  @Input() editable: boolean = false;
  
  @Input() avatarConfig?: AvatarConfig;
  @Output() avatarConfigChanged = new EventEmitter<AvatarConfig>();

  hovering: boolean = false;
  editorOpen: boolean = false;

  currentConfig: AvatarConfig = {
    style: 'initials',
    seed: '',
    bgColor: '#3b82f6',
    shape: 'circle'
  };

  colors = PREDEFINED_COLORS;
  styles = AVATAR_STYLES;

  ngOnInit() {
    if (this.avatarConfig) {
      this.currentConfig = { ...this.currentConfig, ...this.avatarConfig };
    } else {
      // Pick a random color and default seed
      const randomColor = this.colors[Math.floor(Math.random() * this.colors.length)];
      this.currentConfig.bgColor = randomColor;
      this.currentConfig.seed = this.getDefaultSeed();
    }
  }

  getDefaultSeed(): string {
    const parts = [];
    if (this.firstName) parts.push(this.firstName);
    if (this.lastName) parts.push(this.lastName);
    return parts.join(' ') || 'User';
  }

  getAvatarUrl(config: AvatarConfig = this.currentConfig): string {
    const bgColor = config.bgColor.replace('#', '');
    const effectiveSeed = config.style === 'initials' ? this.getDefaultSeed() : (config.seed || this.getDefaultSeed());
    const seed = encodeURIComponent(effectiveSeed);
    return `https://api.dicebear.com/9.x/${config.style}/svg?seed=${seed}&backgroundColor=${bgColor}`;
  }

  randomizeSeed() {
    if (this.currentConfig.style === 'initials') {
      // Don't randomize seed for initials
      return;
    }
    const randomString = Math.random().toString(36).substring(2, 8);
    this.updateConfig({ seed: randomString });
  }

  toggleEditor() {
    this.editorOpen = !this.editorOpen;
  }

  updateConfig(partial: Partial<AvatarConfig>) {
    this.currentConfig = { ...this.currentConfig, ...partial };
    
    // If switched to initials, always use the real name
    if (partial.style === 'initials') {
      this.currentConfig.seed = this.getDefaultSeed();
    }
    
    this.avatarConfigChanged.emit({ ...this.currentConfig });
  }
}
