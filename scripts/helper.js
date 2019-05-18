class Helper {
  playPauseAndUpdate(song) {
    const duration = player.getDuration();
    player.playPause(song);
  }
}

const helper = new Helper();
