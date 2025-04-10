window.mumbleWebConfig = {
  connectDialog: {
    address: false,
    port: false,
    token: false,
    username: true,
    password: true,
    channelName: false
  },
  settings: {
    voiceMode: 'vad',
    pttKey: 'ctrl + shift',
    vadLevel: 0.3,
    toolbarVertical: false,
    showAvatars: 'never',
    userCountInChannelName: false,
    audioBitrate: 40000,
    samplesPerPacket: 960
  },
  defaults: {
    address: 'mumble05.omgserv.com',
    port: '10002',
    username: '',
    password: '',
    theme: '',
    startMute: false,
    startDeaf: false,
    joinDialog: true,
    matrix: false
  },
  hideOverlay: true,
  hideChannelTree: true,
  hideSelfDeaf: true,
  hideSettings: true,
  hideUsers: true,
  hideConfigure: true,
  hideHelp: true,
  hideAbout: true,
  hideConnectionStatus: true,
  hideComment: true
}
