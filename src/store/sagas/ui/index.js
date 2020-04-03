import { put, takeLatest } from 'redux-saga/effects';
import fetch from 'isomorphic-unfetch';
import { LOCATION_CHANGE } from 'react-router-redux';

import { UI, ui } from 'src/store/actions';

export function* watchOpenMenu() {
  yield takeLatest(UI.OPEN_MENU, openMenu);
}

export function* watchCloseMenu() {
  yield takeLatest(UI.CLOSE_MENU, closeMenu);
}

export function* watchOpenModal() {
  yield takeLatest(UI.OPEN_MODAL, openModal);
}

export function* watchCloseModal() {
  yield takeLatest(UI.CLOSE_MODAL, closeModal);
}

export function* watchLocationChange() {
  yield takeLatest(LOCATION_CHANGE, locationChanged);
}

function* openMenu() {
  console.log('open menu saga');
  // yield put(ui.setModalOpened());
}

function* closeMenu() {
  console.log('close menu saga');
  // yield put(ui.setModalOpened());
}

function* openModal() {
  console.log('open modal saga');
  // yield put(ui.setModalOpened());
}

function* closeModal() {
  console.log('close modal saga');
  // yield put(ui.setModalOpened());
}

function* locationChanged() {
  console.log('location changed');
  // yield put(ui.setModalOpened());
}
