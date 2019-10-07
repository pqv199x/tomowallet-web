import injectReducer from './injectReducer';
import injectSaga from './injectSaga';
import history from './history';
import createDeepEqualSelector from './deepSelector';
import {
  changeInputWithSubmit,
  convertLocaleNumber,
  copyToClipboard,
  detectSubmit,
  downloadFile,
  removeTrailingZero,
  shuffleArray,
  trimMnemonic,
} from './miscellaneous';
import {
  addBN,
  bnToDecimals,
  createWeb3,
  decimalsToBN,
  decryptKeystore,
  divBN,
  encryptKeystore,
  estimateCurrencyFee,
  estimateFee,
  estimateTRC20Fee,
  estimateTRC21Fee,
  getBalance,
  getWalletInfo,
  isAddress,
  isHDPath,
  isPrivateKey,
  isRecoveryPhrase,
  mnemonicToPrivateKey,
  mulBN,
  repeatGetTransaction,
  selectHDPath,
  sendMoney,
  sendSignedTransaction,
  sendToken,
  subBN,
  weiToDecimals,
} from './blockchain';
import getValidations, { mergeErrors } from './validations';
import { withGlobal } from './injectGlobal';
import {
  getLedger,
  getLocale,
  getNetwork,
  getWeb3Info,
  removeLedger,
  removeLocale,
  removeNetwork,
  removeWeb3Info,
  setLedger,
  setNetwork,
  setLocale,
  setWeb3Info,
} from './storage';
import electron, {
  detectKeystore,
  isElectron,
  readKeystore,
  removeKeystore,
  writeKeystore,
} from './electron';

export {
  addBN,
  bnToDecimals,
  changeInputWithSubmit,
  convertLocaleNumber,
  copyToClipboard,
  createDeepEqualSelector,
  createWeb3,
  decimalsToBN,
  decryptKeystore,
  detectKeystore,
  detectSubmit,
  divBN,
  downloadFile,
  electron,
  encryptKeystore,
  estimateCurrencyFee,
  estimateFee,
  estimateTRC20Fee,
  estimateTRC21Fee,
  getBalance,
  getLedger,
  getLocale,
  getNetwork,
  getValidations,
  getWalletInfo,
  getWeb3Info,
  history,
  injectReducer,
  injectSaga,
  isAddress,
  isElectron,
  isHDPath,
  isPrivateKey,
  isRecoveryPhrase,
  mergeErrors,
  mnemonicToPrivateKey,
  mulBN,
  readKeystore,
  removeKeystore,
  removeLedger,
  removeLocale,
  removeNetwork,
  removeTrailingZero,
  removeWeb3Info,
  repeatGetTransaction,
  selectHDPath,
  sendMoney,
  sendSignedTransaction,
  sendToken,
  setLedger,
  setLocale,
  setNetwork,
  setWeb3Info,
  shuffleArray,
  subBN,
  trimMnemonic,
  weiToDecimals,
  withGlobal,
  writeKeystore,
};
