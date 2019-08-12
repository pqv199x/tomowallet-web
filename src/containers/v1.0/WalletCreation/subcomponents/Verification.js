/**
 *
 * TomoWallet - Wallet Creation Page - Mnemonic Verification
 *
 * This component defines a form with shuffled words to verify
 * whether user has remembered/noted down the recovery phrase
 */
// ===== IMPORTS =====
// Modules
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { get as _get } from 'lodash';
import {
  Container,
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  CardText,
  CardFooter,
  Nav,
  NavItem,
} from 'reactstrap';
import {
  HeadingLarge,
  ButtonLineStyler
} from '../../../../styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// Custom Component
import { ButtonStyler, NoticeTextRed } from '../../../../styles';
// Utilities
import { withIntl } from '../../../../components/IntlProvider';
import { shuffleArray } from '../../../../utils';
import { MSG } from '../../../../constants';
import { FORM_STATES } from '../constants';
// ===================

// ===== MAIN COMPONENT =====
class Verification extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      shuffledMnemonic: [],
      wordNumber: 12,
    };

    this.handleShuffleMnemonic = this.handleShuffleMnemonic.bind(this);
  }

  componentDidMount() {
    this.handleShuffleMnemonic();
  }

  componentWillUnmount() {
    const { clearComparison, updateErrors } = this.props;
    updateErrors([]);
    clearComparison();
  }

  handleShuffleMnemonic() {
    const { mnemonic } = this.props;
    this.setState({
      shuffledMnemonic: shuffleArray(_get(mnemonic, 'origin', '').split(' ')),
    });
  }

  render() {
    const {
      addWord,
      errors,
      intl: { formatMessage },
      mnemonic,
      removeWord,
      setFormState,
      verifyMnemonic,
    } = this.props;
    const { shuffledMnemonic, wordNumber } = this.state;
    return (
      <Card>
        <CardHeader>
          <HeadingLarge>{formatMessage(MSG.VERIFICATION_TITLE)}</HeadingLarge>
          <CardText>{formatMessage(MSG.VERIFICATION_DESCRIPTION)}</CardText>
        </CardHeader>
        <CardBody>
          <Nav>
            {errors.map((error, errorIdx) => (
              <NavItem key={`error_${errorIdx + 1}`}>
                <NoticeTextRed
                  key={`error_${errorIdx + 1}`}
                >{`* ${error}`}</NoticeTextRed>
              </NavItem>
            ))}
          </Nav>
          <Row noGutters className='box-border'>
            {Array(wordNumber)
              .fill(null)
              .map((_, index) => (
                <Col
                  key={`word_${index + 1}`}
                  xs={6}
                  md={4}
                  className='col-6 col-md-4 p-4'
                >
                  {`${index + 1}. `}
                  {_get(mnemonic, ['compare', index], '') && (
                    <div
                      role='presentation'
                      onClick={() => removeWord(index)}
                      className='d-inline-block phrase-word'
                    >
                      <span className='pr-1'>{_get(mnemonic, ['compare', index], '')}</span>
                      <FontAwesomeIcon icon='times-circle' />
                    </div>
                  )}
                </Col>
              ))}
          </Row>
          <Row className='mt-4'>
            {shuffledMnemonic.map((word, wordIdx) => (
              <Col
                key={`word_button_${wordIdx + 1}`}
                xs={6}
                md={4}
                className='py-2'
              >
                <ButtonLineStyler
                  outline
                  onClick={() => addWord(word)}
                  disabled={_get(mnemonic, 'compare', []).includes(word)}
                >
                  {word}
                </ButtonLineStyler>
              </Col>
            ))}
          </Row>
        </CardBody>
        <CardFooter>
          <Row>
            <Col size={6}>
              <ButtonStyler
                onClick={() => setFormState(FORM_STATES.RECOVERY_PHRASE)}
              >
                {formatMessage(MSG.COMMON_BUTTON_BACK)}
              </ButtonStyler>
            </Col>
            <Col size={6}>
              <ButtonStyler
                btnYellow
                onClick={verifyMnemonic}
                disabled={_get(mnemonic, 'compare', []).length !== wordNumber}
              >
                {formatMessage(MSG.VERIFICATION_BUTTON_VERIFY)}
              </ButtonStyler>
            </Col>
          </Row>
        </CardFooter>
      </Card>
    );
  }
}
// ==========================

// ===== PROP TYPES =====
Verification.propTypes = {
  /** Action to concatenate word into comparison mnemonic array */
  addWord: PropTypes.func,
  /** Action to clear comparison mnemonic array empty */
  clearComparison: PropTypes.func,
  /** List of error messages */
  errors: PropTypes.arrayOf(PropTypes.string),
  /** React Intl's instance object */
  intl: PropTypes.object,
  /** Mnemonic data set */
  mnemonic: PropTypes.object,
  /** Action to remove a specific word from comparison mnemonic array */
  removeWord: PropTypes.func,
  /** Action to update wallet creation form state */
  setFormState: PropTypes.func,
  /** Action to update error messages */
  updateErrors: PropTypes.func,
  /** Action to verify comparison mnemonic array */
  verifyMnemonic: PropTypes.func,
};

Verification.defaultProps = {
  addWord: () => {},
  clearComparison: () => {},
  errors: [],
  intl: {},
  mnemonic: {},
  removeWord: () => {},
  setFormState: () => {},
  updateErrors: () => {},
  verifyMnemonic: () => {},
};
// ======================

export default compose(withIntl)(Verification);