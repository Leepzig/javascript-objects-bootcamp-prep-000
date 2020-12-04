var playlist = {artistName:'song'}

function updatePlaylist(dictionary, artistName, song) {
  dictionary[artistName] = song
  return dictionary
}

function removeFromPlaylist(object, artistName) {
  delete object.artistName
  return object
}
console.log(removeFromPlaylist(playlist, artistName))
console.log(playlist)