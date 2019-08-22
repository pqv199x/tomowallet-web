/**
 *
 * TomoWallet - My Wallet Page - Address Information
 *
 * This component shows basic information of current account address,
 * including options to send/receive tokens.
 */
// ===== IMPORTS =====
// Modules
import React, { PureComponent } from 'react';
import { compose } from 'redux';
import PropTypes from 'prop-types';
import _get from 'lodash.get';
import { Row, Col } from 'reactstrap';
import QRCode from 'qrcode.react';
// Custom Components
import { BigButtonStyler, HeadingSmall } from '../../../styles';
// Utilities & Constants
import { withWeb3 } from '../../../components/Web3';
import { withIntl } from '../../../components/IntlProvider';
import { MSG } from '../../../constants';
import { TextBlue } from '../../../styles';
// ===================

// ===== MAIN COMPONENT =====
class AddressInfo extends PureComponent {
  render() {
    const {
      intl: { formatMessage },
      openReceiveTokenPopup,
      openSendTokenPopup,
      wallet,
    } = this.props;
    return (
      <div>
        <HeadingSmall>
          {formatMessage(MSG.MY_WALLET_SECTION_ADDRESS_TITLE)}
        </HeadingSmall>
        <div className='box-address'>
          <Row>
            <Col
              xs={12}
              lg={{ size: 5, order: 12 }}
              className='mb-sm-3 mb-lg-0'
            >
              <div className='bg_gray'>
                <div
                  class='coinmarketcap-currency-widget'
                  data-currencyid='2570'
                  data-base='USD'
                  data-secondary='BTC'
                  data-ticker='true'
                  data-rank='true'
                  data-marketcap='true'
                  data-volume='true'
                  data-stats='USD'
                  data-statsticker='true'
                />
              </div>
            </Col>
            <Col xs={12} lg={{ size: 7, order: 1 }}>
              <div className='d-flex align-items-center bg_gray'>
                <Row className='fullwidth align-items-center'>
                  <Col md={8} className='text-center'>
                    <TextBlue>{_get(wallet, 'address', '')}</TextBlue>
                    <Row className='mt-4'>
                      <Col md={6} className='pr-2'>
                        <BigButtonStyler onClick={openSendTokenPopup}>
                          {formatMessage(MSG.COMMON_BUTTON_SEND)}
                        </BigButtonStyler>
                      </Col>
                      <Col md={6} className='pl-2'>
                        <BigButtonStyler
                          btnBlue
                          onClick={openReceiveTokenPopup}
                        >
                          {formatMessage(MSG.COMMON_BUTTON_RECEIVE)}
                        </BigButtonStyler>
                      </Col>
                    </Row>
                  </Col>
                  <Col md={4} className='d-flex justify-content-end'>
                    <QRCode value={_get(wallet, 'address', '')} />
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}
// ==========================

// ===== PROP TYPES =====
AddressInfo.propTypes = {
  /** React Intl's instance object */
  intl: PropTypes.object,
  /** Action to show receive token popup */
  openReceiveTokenPopup: PropTypes.func,
  /** Action to show send token popup */
  openSendTokenPopup: PropTypes.func,
  /** Wallet's data */
  wallet: PropTypes.object,
};

AddressInfo.defaultProps = {
  intl: {},
  openReceiveTokenPopup: () => {},
  openSendTokenPopup: () => {},
  wallet: {},
};
// ======================

export default compose(
  withIntl,
  withWeb3,
)(AddressInfo);