export interface AvatarConfig {
  style: string;
  seed: string;
  bgColor: string;
  shape: 'circle' | 'square';
}

export const AVATAR_STYLES = [
  { id: 'initials', name: 'Initials' },
  { id: 'identicon', name: 'Identicon' },
  { id: 'rings', name: 'Rings' },
  { id: 'shapes', name: 'Shapes' },
  { id: 'thumbs', name: 'Thumbs' },
  { id: 'avataaars', name: 'Avatars' },
  { id: 'bottts', name: 'Bots' },
  { id: 'glass', name: 'Glass' }
];

export const PREDEFINED_COLORS = [
  '#f44336', '#e91e63', '#9c27b0', '#673ab7', '#3f51b5',
  '#2196f3', '#03a9f4', '#00bcd4', '#009688', '#4caf50',
  '#8bc34a', '#cddc39', '#ffeb3b', '#ffc107', '#ff9800',
  '#ff5722', '#795548', '#9e9e9e', '#607d8b'
];
