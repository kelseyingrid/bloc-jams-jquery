{
  album.songs.forEach( (song, index) => {
    song.element = $(`
      <tr>
        <td>
          <button>
            <span class="song-number">${index + 1}</span>
            <span class="fas fa-play"></span>
            <span class="fas fa-pause"></span>
          </button>
        </td>
        <td>${song.title}</td>
        <td>${player.prettyTime(song.duration)}</>
      </tr>
    `);

    song.element.on('click', event => {
      helper.playPauseAndUpdate(song);
      $('button#play-pause').attr('playState', player.playState);
    });

    $('#song-list').append(song.element);
  });
}
