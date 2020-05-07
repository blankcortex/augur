import { THEMES, ODDS_TYPE, DEFAULT_FALLBACK_GAS_AVERAGE, DEFAULT_FALLBACK_GAS_FAST, DEFAULT_FALLBACK_GAS_SAFELOW, MOBILE_MENU_STATES, MARKET_OPEN, MARKET_SORT_PARAMS, MAX_FEE_02_PERCENT, MAX_SPREAD_ALL_SPREADS, DAY, ZERO } from 'modules/common/constants';
import { MARKETS } from "modules/routes/constants/views";
import { DEFAULT_SDK_CONFIGURATION, SDKConfiguration } from '@augurproject/artifacts';
import { formatGasCostGwei } from 'utils/format-number';
import { GasPriceInfo, Blockchain, FilterSortOptions, INVALID_OPTIONS, Universe } from 'modules/types';
import * as moment from '../../../../../../node_modules/moment/moment';
import { Getters } from '@augurproject/sdk/src';

export const THEME = 'theme';
export const ODDS = 'oddsType';
export const IS_MOBILE = 'isMobile';
export const IS_ODDS_MENU_OPEN = 'isOddsMenuOpen';
export const IS_HELP_MENU_OPEN = 'isHelpMenuOpen';
export const IS_CONNECTION_TRAY_OPEN = 'isConnectionTrayOpen';
export const IS_ALERTS_MENU_OPEN = 'isAlertsMenuOpen';
export const Ox_ENABLED = 'zeroXEnabled';
export const GSN_ENABLED = 'gsnEnabled';
export const ETH_TO_DAI_RATE = 'ethToDaiRate';
export const REP_TO_DAI_RATE = 'repToDaiRate';
export const Ox_STATUS = 'zeroXStatus';
export const WALLET_STATUS = 'walletStatus';
export const RESTORED_ACCOUNT = 'restoredAccount';
export const IS_LOGGED = 'isLogged';
export const IS_CONNECTED = 'isConnected';
export const IS_RECONNECTION_PAUSED = 'isReconnectionPaused';
export const CAN_HOTLOAD = 'canHotload';
export const ENV = 'env';
export const GAS_PRICE_INFO = 'gasPriceInfo';
export const MOBILE_MENU_STATE = 'mobileMenuState';
export const CURRENT_BASE_PATH = 'currentBasePath';
export const BLOCKCHAIN = 'blockchain';
export const CATEGORY_STATS = 'categoryStats';
export const FILTER_SORT_OPTIONS = 'filterSortOptions';
export const MODAL = 'modal';
export const UNIVERSE = 'universe';

const DEFAULT_ENV: SDKConfiguration = JSON.parse(JSON.stringify(DEFAULT_SDK_CONFIGURATION));
const DEFAULT_GAS_PRICE_INFO: GasPriceInfo = {
  userDefinedGasPrice: null,
  average: formatGasCostGwei(DEFAULT_FALLBACK_GAS_AVERAGE, {}).value,
  fast: formatGasCostGwei(DEFAULT_FALLBACK_GAS_FAST, {}).value,
  safeLow: formatGasCostGwei(DEFAULT_FALLBACK_GAS_SAFELOW, {}).value,
};
const DEFAULT_BLOCKCHAIN: Blockchain = {
  currentBlockNumber: 0,
  currentAugurTimestamp: moment().unix(), // default to user's time until new block comes in
  lastSyncedBlockNumber: 0,
  blocksBehindCurrent: 0,
  percentSynced: "0"
};
const DEFAULT_UNIVERSE_STATE: Universe = {
  children: null,
  id: null,
  creationTimestamp: 0,
  parentUniverseId: null,
  forkingInfo: null,
  outcomeName: '',
  usersRep: '0',
  totalRepSupply: '0',
  totalOpenInterest: '0',
  numberOfMarkets: 0,
  warpSyncHash: undefined,
  disputeWindow: {
    address: null,
    startTime: 0,
    endTime: 0,
    purchased: '0',
    fees: '0',
  },
  timeframeData: {
    activeUsers: 0,
    openInterest: ZERO,
    marketsCreated: 0,
    numberOfTrades: 0,
    disputedMarkets: 0,
    volume: ZERO,
    amountStaked: ZERO,
  }
};
export const MARKET_FILTER = 'marketFilter';
export const MARKET_SORT = 'marketSort';
export const MARKET_MAX_FEES = 'maxFee';
export const MARKET_MAX_SPREAD = 'maxLiquiditySpread';
export const MARKET_SHOW_INVALID = 'includeInvalidMarkets';
export const TRANSACTION_PERIOD = 'transactionPeriod';
export const TEMPLATE_FILTER = 'templateFilter';
const DEFAULT_FILTER_SORT_OPTIONS: FilterSortOptions = {
  [MARKET_FILTER]: MARKET_OPEN,
  [MARKET_SORT]: MARKET_SORT_PARAMS.RECENTLY_TRADED,
  [MARKET_MAX_FEES]: MAX_FEE_02_PERCENT,
  [MARKET_MAX_SPREAD]: MAX_SPREAD_ALL_SPREADS,
  [MARKET_SHOW_INVALID]: INVALID_OPTIONS.Hide,
  [TRANSACTION_PERIOD]: DAY,
  [TEMPLATE_FILTER]: Getters.Markets.TemplateFilters.templateOnly,
};

export const DEFAULT_APP_STATUS = {
  [THEME]: THEMES.TRADING,
  [ODDS]: ODDS_TYPE.DECIMAL,
  [IS_MOBILE]: false,
  [IS_HELP_MENU_OPEN]: false,
  [IS_CONNECTION_TRAY_OPEN]: false,
  [IS_ODDS_MENU_OPEN]: false,
  [IS_ALERTS_MENU_OPEN]: false,
  [Ox_ENABLED]: false,
  [GSN_ENABLED]: false,
  [ETH_TO_DAI_RATE]: null,
  [REP_TO_DAI_RATE]: null,
  [Ox_STATUS]: null,
  [WALLET_STATUS]: null,
  [RESTORED_ACCOUNT]: false,
  [IS_LOGGED]: false,
  [IS_CONNECTED]: false,
  [IS_RECONNECTION_PAUSED]: false,
  [CAN_HOTLOAD]: false,
  [ENV]: DEFAULT_ENV,
  [GAS_PRICE_INFO]: DEFAULT_GAS_PRICE_INFO,
  [MOBILE_MENU_STATE]: MOBILE_MENU_STATES.CLOSED,
  [CURRENT_BASE_PATH]: MARKETS,
  [BLOCKCHAIN]: DEFAULT_BLOCKCHAIN,
  [CATEGORY_STATS]: {},
  [FILTER_SORT_OPTIONS]: DEFAULT_FILTER_SORT_OPTIONS,
  [MODAL]: {},
  [UNIVERSE]: DEFAULT_UNIVERSE_STATE,
};

export const APP_STATUS_ACTIONS = {
  SET_THEME: 'SET_THEME',
  SET_ODDS: 'SET_ODDS',
  SET_IS_MOBILE: 'SET_IS_MOBILE',
  SET_IS_ODDS_MENU_OPEN: 'SET_IS_ODDS_MENU_OPEN',
  SET_IS_HELP_MENU_OPEN: 'SET_IS_HELP_MENU_OPEN',
  SET_IS_CONNECTION_TRAY_OPEN: 'SET_IS_CONNECTION_TRAY_OPEN',
  SET_IS_ALERTS_MENU_OPEN: 'SET_IS_ALERTS_MENU_OPEN',
  CLOSE_APP_MENUS: 'CLOSE_APP_MENUS',
  SET_Ox_ENABLED: 'SET_Ox_ENABLED',
  SET_GSN_ENABLED: 'SET_GSN_ENABLED',
  SET_ETH_TO_DAI_RATE: 'SET_ETH_TO_DAI_RATE',
  SET_REP_TO_DAI_RATE: 'SET_REP_TO_DAI_RATE',
  SET_Ox_STATUS: 'SET_Ox_STATUS',
  SET_WALLET_STATUS: 'SET_WALLET_STATUS',
  SET_RESTORED_ACCOUNT: 'SET_RESTORED_ACCOUNT',
  SET_IS_LOGGED: 'SET_IS_LOGGED',
  SET_IS_CONNECTED: 'SET_IS_CONNECTED',
  SET_IS_RECONNECTION_PAUSED: 'SET_IS_RECONNECTION_PAUSED',
  SET_CAN_HOTLOAD: 'SET_CAN_HOTLOAD',
  SET_ENV: 'SET_ENV',
  UPDATE_GAS_PRICE_INFO: 'UPDATE_GAS_PRICE_INFO',
  SET_MOBILE_MENU_STATE: 'SET_MOBILE_MENU_STATE',
  SET_CURRENT_BASE_PATH: 'SET_CURRENT_BASE_PATH',
  UPDATE_BLOCKCHAIN: 'UPDATE_BLOCKCHAIN',
  SET_CATEGORY_STATS: 'SET_CATEGORY_STATS',
  UPDATE_FILTER_SORT_OPTIONS: 'UPDATE_FILTER_SORT_OPTIONS',
  SET_MODAL: 'SET_MODAL',
  CLOSE_MODAL: 'CLOSE_MODAL',
  UPDATE_UNIVERSE: 'UPDATE_UNIVERSE',
  SWITCH_UNIVERSE: 'SWITCH_UNIVERSE',
};

export const STUBBED_APP_STATUS_ACTIONS = {
  setTheme: theme => {},
  setOdds: odds => {},
  setIsOddsMenuOpen: isOpen => {},
  setIsHelpMenuOpen: isOpen => {},
  setIsConnectionTrayOpen: isOpen => {},
  setIsAlertsMenuOpen: isOpen => {},
  closeAppMenus: () => {},
  setIsMobile: isMobile => {},
  setOxEnabled: isOxEnabled => {},
  setGSNEnabled: isGSNEnabled => {},
  setEthToDaiRate: ethToDaiRate => {},
  setRepToDaiRate: repToDaiRate => {},
  setOxStatus: OxStatus => {},
  setWalletStatus: walletStatus => {},
  setRestoredAccount: restoredAccount => {},
  setIsLogged: isLogged => {},
  setIsConnected: isConnected => {},
  setIsReconnectionPaused: isReconnectionPaused => {},
  setCanHotload: canHotload => {},
  setEnv: env => {},
  updateGasPriceInfo: gasPriceInfo => {},
  setMobileMenuState: mobileMenuState => {},
  setCurrentBasePath: currentBasePath => {},
  updateBlockchain: blockchain => {},
  setCategoryStats: categoryStats => {},
  updateFilterSortOptions: filterSortOptions => {},
  setModal: modal => {},
  closeModal: () => {},
  updateUniverse: universe => {},
  switchUniverse: () => {},
};