var playlist = {artistNames:'song'}

function updatePlaylist(dictionary, artistName, song) {
  dictionary[artistName] = song
  return dictionary
}