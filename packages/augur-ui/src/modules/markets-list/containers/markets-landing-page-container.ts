import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import MarketsLandingPage from 'modules/markets-list/components/markets-landing-page';
import { toggleFavorite } from 'modules/markets/actions/update-favorites';
import { selectMarkets } from 'modules/markets/selectors/markets-all';
import {
  loadMarketsByFilter,
  LoadMarketsFilterOptions,
} from 'modules/markets/actions/load-markets';
import { AppState } from 'appStore';
import { ThunkDispatch } from 'redux-thunk';
import { Action } from 'redux';
import { NodeStyleCallback } from 'modules/types';
import {
  setLoadMarketsPending,
  updateMarketsListMeta,
} from 'modules/markets-list/actions/update-markets-list';
import { MODAL_SIGNUP, POPULAR_CATEGORIES } from 'modules/common/constants';
import { updateModal } from 'modules/modal/actions/update-modal';
import { selectMarketStats } from 'modules/markets-list/selectors/markets-list';
import { AppStatusState } from 'modules/app/store/app-status';

const mapStateToProps = (state: AppState, { location }) => {
  const marketStats = selectMarketStats(state);
  const markets = selectMarkets(state);
  const { isLogged, restoredAccount, isConnected } = AppStatusState.get();
  return {
    categoryStats: state.categoryStats,
    categoryData: marketStats,
    isConnected: isConnected && state.universe.id != null,
    isLogged,
    restoredAccount,
    markets: markets.filter(market =>
      POPULAR_CATEGORIES.includes(market.categories[0])
    ),
    isSearching: state.marketsList.isSearching,
  };
};

const mapDispatchToProps = (
  dispatch: ThunkDispatch<void, AppState, Action>
) => ({
  signupModal: () => dispatch(updateModal({ type: MODAL_SIGNUP })),
  toggleFavorite: marketId => dispatch(toggleFavorite(marketId)),
  setLoadMarketsPending: isSearching =>
    dispatch(setLoadMarketsPending(isSearching)),
  updateMarketsListMeta: meta => dispatch(updateMarketsListMeta(meta)),
  loadMarketsByFilter: (
    filter: LoadMarketsFilterOptions,
    cb: NodeStyleCallback
  ) => dispatch(loadMarketsByFilter(filter, cb)),
});

const Markets = withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(MarketsLandingPage)
);

export default Markets;
