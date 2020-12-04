var playlist = {artistNames:'song'}

function updatePlaylist(dictionary, artistName, song) {
  dictionary[artistName] = song
  return dictionary
}

function removeFromPlaylist(object, artistName) {
  delete object.artistName
  return object
}