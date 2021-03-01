import App from './App.svelte';

const app = new App({
  target: document.body,
  props: {
    services: [
      {
        name: 'PiHole',
        image:
          'https://upload.wikimedia.org/wikipedia/en/thumb/1/15/Pi-hole_vector_logo.svg/1200px-Pi-hole_vector_logo.svg.png',
        description: 'PiHole is a DNS ad blocker.',
        ip: '192.168.2.111',
      },
      {
        name: 'VMware',
        image: 'https://www.drupal.org/files/project-images/vmware.png',
        description:
          'VMware is a virtualization tool powering the downstairs server.',
        ip: '192.168.2.168',
      },
      {
        name: 'Jellyfin',
        image:
          'https://forum.jellyfin.org/uploads/default/original/1X/bcc1ca50528695f31a888ad67607e016fb3050c1.png',
        description: 'Jellyfin is a media server for movies and TV.',
        ip: '192.168.2.112',
      },
      {
        name: 'Network Guide',
        image:
          'https://www.logolynx.com/images/logolynx/df/dfc95540c225d6841233d7f74c9a2a11.png',
        description: 'A guide to all devices and services on our home network.',
        ip: '192.168.2.113',
      },
    ],
  },
});

export default app;
