import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.lynn.scheduler',
  appName: 'Lynn Scheduler',
  webDir: 'www',

  server: {
    cleartext: false,
    allowNavigation: [
      'woomi-smart-scheduler.jogh.workers.dev'
    ]
  },

  ios: {
    contentInset: 'automatic',
    scrollEnabled: true
  }
};

export default config;