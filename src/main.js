const htm=function(){var n=function(t,e,s,u){var r;e[0]=0;for(var h=1;h<e.length;h++){var p=e[h++],a=e[h]?(e[0]|=p?1:2,s[e[h++]]):e[++h];3===p?u[0]=a:4===p?u[1]=Object.assign(u[1]||{},a):5===p?(u[1]=u[1]||{})[e[++h]]=a:6===p?u[1][e[++h]]+=a+"":p?(r=t.apply(a,n(t,a,s,["",null])),u.push(r),a[0]?e[0]|=2:(e[h-2]=0,e[h]=r)):u.push(a)}return u},t=new Map,e=function(e){var s=t.get(this);return s||(s=new Map,t.set(this,s)),(s=n(this,s.get(e)||(s.set(e,s=function(n){for(var t,e,s=1,u="",r="",h=[0],p=function(n){1===s&&(n||(u=u.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?h.push(0,n,u):3===s&&(n||u)?(h.push(3,n,u),s=2):2===s&&"..."===u&&n?h.push(4,n,0):2===s&&u&&!n?h.push(5,0,!0,u):s>=5&&((u||!n&&5===s)&&(h.push(s,0,u,e),s=6),n&&(h.push(s,n,0,e),s=6)),u=""},a=0;a<n.length;a++){a&&(1===s&&p(),p(a));for(var o=0;o<n[a].length;o++)t=n[a][o],1===s?"<"===t?(p(),h=[h],s=3):u+=t:4===s?"--"===u&&">"===t?(s=1,u=""):u=t+u[0]:r?t===r?r="":u+=t:'"'===t||"'"===t?r=t:">"===t?(p(),s=1):s&&("="===t?(s=5,e=u,u=""):"/"===t&&(s<5||">"===n[a][o+1])?(p(),3===s&&(h=h[0]),s=h,(h=h[0]).push(2,0,s),s=0):" "===t||"\t"===t||"\n"===t||"\r"===t?(p(),s=2):u+=t),3===s&&"!--"===u&&(s=4,h=h[0])}return p(),h}(e)),s),arguments,[])).length>1?s:s[0]};return e.bind(function h(type, props, ...children) {let e=document.createElement(type);if(props) for(let name in props){e.setAttribute(name,props[name])}if(children.length>0)e.append(...children)return e;})}()
const makeServiceCard=service=>htm`<div class="card"><div class="card_image"><img alt=${service.name + ' Logo'} src=${service.image} /></div><div class="card_body"><div><h1 class="card_title">${service.name}</h1><h3 class="card_text">${service.description}</h3></div><div class="card_ip"><a target="_blank" href=${'http://' + service.ip}>${service.ip}</a></div></div></div>`
let services=[
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
    ]
document.querySelector("#holder").append(...services.map(makeServiceCard))
