import * as React from 'react';
import { FormattedMessage, FormattedPlural } from 'react-intl';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { AddressId } from '../../../models/generated/addressId';
import { Transaction } from '../../../models/generated/transaction';

import { SettingsState } from '../../../reducers/settings.reducer';
import { AppState } from '../../../store/app.store';

import { CoinValueComponent } from '../../common/coin-value/coin-value.component';
import { TimestampComponent } from '../../common/timestamp/timestamp.component';

import { DropdownListComponent } from '../../common/dropdown-list/dropdown-list.component';
import { ArrowThickIcon } from '../../common/icons/common.icons';

import environment from '../../../config/environment';

import './transactions-item.scss';

interface IBlockTransactionsItemProps {
  transaction: Transaction;
  confirmations?: any;
  address?: AddressId;
}

class TransactionsItem extends React.Component {
  props: IBlockTransactionsItemProps & SettingsState;
  state: any = {
    isClient: false
  };

  componentDidMount (): void {
    this.setState({
      isClient: true
    });
  }

  renderAssets (assets: any[]): JSX.Element | null {
    // TODO: Update then mainnet launch
    return null;
    // if (assets.length < 1) {
    //   return null;
    // }

    const init = [
      {
        "amount" : 1063722126,
        "tokenId" : "a91167397245bce687182e877107b5d43904c89ba4ec5f0f5557eb0d127945b3"
      },
      {
        "amount" : 1063722126,
        "tokenId" : "fd0e8f2af0fcc567734b75a9665573cd6d336f54a10b4962ba70f220ab167e9a"
      },
    ];

    const defaultAssets = init.map(
      token => ({
        ...token,
        label: `${environment.tokensDecode[token.tokenId]}`,
        value: `${token.amount}`
      })
    );

    const buttonText = `+${defaultAssets.length}`;

    return (
      <DropdownListComponent
          list={ defaultAssets }
          button={ buttonText }
      />
    );
  }

  render (): JSX.Element {
    let totalOutput        = 0;
    let totalInputAddress  = 0;
    let totalOutputAddress = 0;
    let isOutput           = false;

    return (
      <div className='bi-transactions-item'>
        <div className='bi-transactions-item__header g-flex'>
          <Link className='bi-transactions-item__title u-word-wrap g-flex__item-fixed'
                to={ `/transactions/${this.props.transaction.id}` }>
            { this.props.transaction.id }
          </Link>

          <div className='bi-transactions-item__timestamp g-flex__item-fixed'>
            <TimestampComponent timestamp={ this.props.transaction.timestamp }/>
          </div>
        </div>

        <div className='bi-transactions-item__body g-flex'>
          <div className='bi-transactions-item__inputs g-flex__item'>
            {
              this.props.transaction.inputs.map((address, index) => {
                if (address.address === this.props.address) {
                  totalInputAddress += address.value;

                  isOutput = true;
                }

                return (
                  <div className='bi-transactions-item__input g-flex' key={ `${index}__${address.id}` }>
                    <div className='bi-transactions-item__address'>
                      { address.address ? <Link className='u-word-wrap u-word-wrap--ellipsis'
                                                to={ `/addresses/${address.address}` }>
                          { address.address }
                        </Link>
                        : <FormattedMessage id='components.transaction-item.null-address'/>
                      }
                    </div>

                    { this.props.isScriptsDisplayed && address.outputTransactionId && (
                      <div className='bi-transactions-item__address-output g-flex__item-fixed u-word-wrap u-word-wrap--ellipsis'>
                        (<CoinValueComponent value={ address.value }/> - <Link
                        to={ `/transactions/${address.outputTransactionId}` }>
                        <FormattedMessage id='components.transaction-item.address-output'/>
                      </Link>
                        )
                      </div>
                    )
                    }
                  </div>
                );
              })
            }
          </div>


          { this.props.address ?
            (<div className={ [
              'bi-transactions-item__arrow',
              isOutput ? 'bi-transactions-item__arrow--output' : 'bi-transactions-item__arrow--input'
            ].join(' ') }>
              <ArrowThickIcon className='bi-transactions-item__arrow-icon'/>
            </div>) :
            (<div className='bi-transactions-item__arrow'>
              <ArrowThickIcon className='bi-transactions-item__arrow-icon'/>
            </div>)
          }

          <div className='bi-transactions-item__outputs g-flex__item g-flex-column'>
            {
              this.props.transaction.outputs.map((address, index) => {
                if (address.address === this.props.address) {
                  totalOutputAddress += address.value;
                }

                totalOutput += address.value;

                return (
                  <div className='bi-transactions-item__output g-flex' key={ `${index}__${address.id}` }>
                    <div className='bi-transactions-item__address g-flex__item-fixed'>
                      { address.address ?
                        <Link className='u-word-wrap u-word-wrap--ellipsis'
                              to={ `/addresses/${address.address}` }>
                          { address.address }
                        </Link>
                        : <span className='u-word-wrap u-word-wrap--ellipsis'>
                          <FormattedMessage id='components.transaction-item.null-address'/>
                        </span>
                      }
                    </div>

                    <div className='bi-transactions-item__address-spent g-flex__item u-word-wrap u-word-wrap--ellipsis'
                         style={ { display: this.props.isScriptsDisplayed || !this.state.isClient ? 'block' : 'none' }
                         }>
                      { address.spentTransactionId ?
                        <Link to={ `/transactions/${address.spentTransactionId}` }>
                          <FormattedMessage id='components.transaction-item.spent'/>
                        </Link> : <FormattedMessage id='components.transaction-item.unspent'/>
                      }
                    </div>

                    <div className='bi-transactions-item__value g-flex__item-fixed'>
                      <CoinValueComponent value={ address.value }/>

                      {this.renderAssets(address.assets)}
                    </div>

                  </div>
                );
              })
            }

            <div className='bi-transactions-item__footer g-flex-column__item-fixed g-flex'>
              { this.props.confirmations > 0 && (
                <div className='bi-transactions-item__confirmations g-flex__item-fixed'>
                  { this.props.confirmations } <FormattedPlural value={ this.props.confirmations }
                                                                one={ <FormattedMessage
                                                                  id='components.transaction-item.confirmation.one'/> }
                                                                other={ <FormattedMessage
                                                                  id='components.transaction-item.confirmation.other'/> }/>
                </div>
              ) }

              { this.props.confirmations === 0 && (
                <div
                  className='bi-transactions-item__confirmations g-flex__item-fixed item__confirmations--unconfirmed'>
                  <FormattedMessage id='components.transaction-item.unconfirmed'/>
                </div>
              ) }

              <div className={
                ['bi-transactions-item__total-value g-flex__item-fixed',
                  this.props.address && (isOutput ? 'bi-transactions-item__total-value--output' : 'bi-transactions-item__total-value--input')
                ].join(' ') }>
                <CoinValueComponent
                  value={ this.props.address ? Math.abs(totalOutputAddress - totalInputAddress) : totalOutput }/>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps (state: AppState, ownProps: IBlockTransactionsItemProps): any {
  return {
    ...state.settings,
    ...ownProps
  };
}

export const TransactionsItemComponent = connect(mapStateToProps)(TransactionsItem);
