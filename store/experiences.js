export const state = () => ({
  experiences: [],
  loaded: '0',
});
 
export const mutations = {
  setExperiences(state, entries) {
    state.experiences = entries;
  },
  setLoaded(state, loaded) {
    state.loaded = loaded;
  },
};