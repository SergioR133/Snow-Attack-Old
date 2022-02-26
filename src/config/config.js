export default {
  type: Phaser.WEBGL,
  backgroundColor: '#00e4ff',
  parent: 'game',
  scale: {
    width: window.innerWidth,
    height: window.innerHeight,
  },
  physics: {
    default: 'arcade',
    arcade: {
      debug: true,
    },
  },
  render: {
    pixelArt: true,
    antialiasGL: false
  },
  callbacks: {
    postBoot: () => {
      window.sizeChanged()
    }
  },
  canvasStyle: `display: block; width: 100%; height: 100%;`,
  autoFocus: true,
  audio: {
    disableWebAudio: false,
  }
}