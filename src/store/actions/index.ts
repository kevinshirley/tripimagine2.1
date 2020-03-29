export function createTypes(base, types) {
  const res = {};
  types.forEach(type => {
    res[type] = `${base}_${type}`;
  });
  return res;
}

export const action = (type: any, payload = {}, meta = {}) => ({
  type,
  payload,
  meta,
});

export const UI: any = createTypes('UI', [
  'OPEN_MODAL',
  'CLOSE_MODAL',
  'OPEN_MENU',
  'CLOSE_MENU',
  'IS_MODAL_OPENED',
  'IS_MODAL_CLOSED',
  'SELECT_PORTFOLIO',
]);

export const ui = {
  openModal: () => action(UI.OPEN_MODAL),
  closeModal: () => action(UI.CLOSE_MODAL),
  openMenu: () => action(UI.OPEN_MENU),
  closeMenu: () => action(UI.CLOSE_MENU),
  setModalOpened: () => action(UI.IS_MODAL_OPENED),
  selectPortfolio: (index: number) => action(UI.SELECT_PORTFOLIO, index),
};
