module.exports = {
  createEntry (userId) {
    console.log('Add user: ' + userId)
    return Promise.resolve()
  }
}
