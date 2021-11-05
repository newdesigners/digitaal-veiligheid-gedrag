export const state = () => ({
  lessons: [],
  loaded: '0',
});
 
export const mutations = {
  setLessons(state, entries) {
    state.lessons = entries;
  },
  setLoaded(state, loaded) {
    state.loaded = loaded;
  },
};