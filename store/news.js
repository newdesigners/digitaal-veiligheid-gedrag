export const state = () => ({
  news: [],
  loaded: '0',
})
 
export const mutations = {
  setNews (state, entries) {
    state.news = entries
  },
  setLoaded (state, loaded) {
    state.loaded = loaded
  }
}