import * as queryString from 'query-string';
import * as React from 'react';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { bindActionCreators } from 'redux';

import './data.scss';

import { AppActions } from '../../actions/app.actions';
import { BlockActions } from '../../actions/block.actions';
import { AppState } from '../../store/app.store';

import { IGetBlocksParams } from '../../services/block.api.service';

import { BlocksTableComponent } from '../../components/blocks-table/blocks-table.component';
import { CalendarComponent } from '../../components/common/calendar/calendar.component';
import { LimitSelectorComponent } from '../../components/common/limit-selector/limit-selector.component';
import { PaginateSimpleComponent } from '../../components/common/paginate-simple/paginate-simple.component';

type IDataProps = AppState & BlockActions & RouteComponentProps<{}> & AppActions;

class Data extends React.PureComponent {
  props: IDataProps;
  params: any;
  
  constructor (props: any) {
    super(props);
    
    this.onDateChange = this.onDateChange.bind(this);
    this.getPageUrl   = this.getPageUrl.bind(this);
    this.getLimitLink = this.getLimitLink.bind(this);
    
    this.params = this.getParams();
  }
  
  componentDidMount (): void {
    if (this.props.blocks.preloaded) {
      this.props.clearPreloadedState();
      
      return;
    }
    
    this.reloadBlocks(this.params);
  }
  
  componentWillReceiveProps (props: IDataProps): void {
    const params = this.getParams();
    
    if (JSON.stringify(params) !== JSON.stringify(this.params)) {
      this.params = params;
      
      this.reloadBlocks(this.params);
    }
  }
  
  // TODO: add preloader
  render (): JSX.Element {
    return (
      <div className='bi-data g-flex-column g-flex-column__item-fixed'>
        <FormattedMessage id='common.pages.data.title'>
          {
            title => (
              <Helmet>
                <title>{ title }</title>
              </Helmet>
            )
          }
        </FormattedMessage>
        
        <div className='bi-data__header g-flex-column__item-fixed g-flex'>
          <div className='bi-data__title g-flex__item'>
            <FormattedMessage id='components.data.title'/>
          </div>
          
          <div className='bi-data__filters g-flex__item-fixed'>
            <CalendarComponent onChange={ this.onDateChange }
                               startDate={ this.params.startDate }
                               endDate={ this.params.endDate }/>
          </div>
        </div>
        
        <div className='bi-data__body g-flex-column__item-fixed'>
          <BlocksTableComponent blocks={ this.props.blocks.blocks } isFetching={ this.props.blocks.fetching }/>
        </div>
        
        
        <div className='bi-data__footer g-flex-column__item-fixed g-flex'>
          <div className='g-flex__item-fixed'>
            <LimitSelectorComponent items={ [30, 60, 120] }
                                    selected={ this.params.limit }
                                    label={ <FormattedMessage id='components.data.show'/> }
                                    getLimitLink={ this.getLimitLink }/>
          </div>
          
          <div className='g-flex__item-fixed'>
            <PaginateSimpleComponent total={ this.props.blocks.total }
                                     limit={ this.params.limit }
                                     getPageUrl={ this.getPageUrl }
                                     forcePage={ Math.floor(this.props.blocks.offset / this.params.limit) }/>
          </div>
        </div>
      </div>
    );
  }
  
  private onDateChange (dateStart: number, dateEnd: number): void {
    this.reloadBlocks({
      endDate: dateEnd,
      startDate: dateStart
    });
  }
  
  private getPageUrl (page: number): string {
    const params = queryString.parse(this.props.history.location.search);
    
    params.offset = page * this.params.limit;
    
    return `/?${queryString.stringify(params)}`;
  }
  
  private getLimitLink (limit: number): string {
    const params = queryString.parse(this.props.history.location.search);
    
    params.limit = limit;
    
    return `/?${queryString.stringify(params)}`;
  }
  
  private reloadBlocks (params: IGetBlocksParams): void {
    params = {
      ...this.params,
      ...params,
      limit: params.limit || 30,
      offset: params.offset || 0
    };
    
    Object.keys(params)
      .forEach((key) => {
        if (params[key] === null) {
          delete params[key];
        }
      });
    
    this.props.getBlocks(params);
    
    
    if (params.offset === 0) {
      delete params.offset;
    }
    
    if (params.limit === 30) {
      delete params.limit;
    }
    
    this.props.history.push(`/?${queryString.stringify(params)}`);
  }
  
  private getParams (): any {
    let { offset, sortBy, sortDirection, startDate, endDate, limit } = queryString.parse(this.props.history.location.search);
    
    offset        = parseInt(offset, 10);
    limit         = parseInt(limit, 10) || 30;
    startDate     = parseInt(startDate, 10) || null;
    endDate       = parseInt(endDate, 10) || null;
    sortDirection = ['asc', 'desc'].includes(sortDirection) ? sortDirection : null;
    sortBy        = ['height', 'timestamp', 'miner', 'transactionsCount', 'size'].includes(sortBy) ? sortBy : null;
    
    return {
      endDate,
      limit,
      offset: offset || 0,
      sortBy,
      sortDirection,
      startDate
    };
  }
}

function mapStateToProps (state: AppState): AppState {
  return state;
}

function mapDispatchToProps (dispatch: any): any {
  return bindActionCreators({ ...BlockActions, ...AppActions }, dispatch);
}

export const DataComponent = connect(mapStateToProps, mapDispatchToProps)(Data);
