import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

import environment from '../config/environment';

import { reducer } from '../reducers/app.reducers';

import { AddressState } from '../reducers/address.reducer';
import { BlockState } from '../reducers/block.reducer';
import { BlocksState } from '../reducers/blocks.reducer';
import { ChartState } from '../reducers/chart.reducer';
import { SettingsState } from '../reducers/settings.reducer';
import { StatsState } from '../reducers/stats.reducer';
import { TransactionState } from '../reducers/transaction.reducer';

export interface AppState {
  address: AddressState;
  block: BlockState;
  chart: ChartState;
  settings: SettingsState;
  stats: StatsState;
  blocks: BlocksState;
  transaction: TransactionState;
}

const logger = createLogger({
  predicate: () => environment.isLoggerEnabled
});


export const configureStore = (preloadedState: any = {}) => {
  return createStore<AppState>(reducer, preloadedState, applyMiddleware(thunk, logger));
};
