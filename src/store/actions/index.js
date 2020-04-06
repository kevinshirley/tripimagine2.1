export function createTypes(base, types) {
  const res = {};
  types.forEach(type => {
    res[type] = `${base}_${type}`;
  });
  return res;
}

export const action = (type, payload = {}, meta = {}) => ({
  type,
  payload,
  meta,
});

export const UI = createTypes('UI', [
  'OPEN_MODAL',
  'CLOSE_MODAL',
  'OPEN_MENU',
  'CLOSE_MENU',
  'IS_MODAL_OPENED',
  'IS_MODAL_CLOSED',
  'SELECT_PORTFOLIO',
]);

export const DESTINATIONS = createTypes('DESTINATIONS', [
  'GET_DESTINATION',
  'GET_DESTINATIONS',
  'SET_DESTINATIONS',
  'SET_DESTINATION',
]);

export const BLOG = createTypes('BLOG', [
  'GET_POSTS',
  'GET_POST',
  'SET_POSTS',
  'SET_POST',
]);

export const ui = {
  openModal: () => action(UI.OPEN_MODAL),
  closeModal: () => action(UI.CLOSE_MODAL),
  openMenu: () => action(UI.OPEN_MENU),
  closeMenu: () => action(UI.CLOSE_MENU),
  setModalOpened: () => action(UI.IS_MODAL_OPENED),
  selectPortfolio: index => action(UI.SELECT_PORTFOLIO, index),
};

export const destinations = {
  getDestination: continent => action(DESTINATIONS.GET_DESTINATION, { continent }),
  getDestinations: () => action(DESTINATIONS.GET_DESTINATIONS),
  setDestinations: destinations => action(DESTINATIONS.SET_DESTINATIONS, destinations),
  setDestination: destination => action(DESTINATIONS.SET_DESTINATION, destination),
};

export const blog = {
  getPosts: () => action(BLOG.GET_POSTS),
  getPost: post => action(BLOG.GET_POST, { post }),
  setPosts: posts => action(BLOG.SET_POSTS, posts),
  setPost: post => action(BLOG.SET_POST, post),
};
