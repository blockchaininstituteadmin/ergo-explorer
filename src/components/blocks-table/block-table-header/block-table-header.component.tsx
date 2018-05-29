import * as queryString from 'query-string';
import * as React from 'react';
import { FormattedMessage } from 'react-intl';
import { Link, RouteComponentProps, withRouter } from 'react-router-dom';

import { SortDirectionAscIcon, SortDirectionDescIcon, SortDirectionIcon } from '../../common/icons/common.icons';

import './blocks-table-header.scss';

class BlockTableHeader extends React.Component<RouteComponentProps<any>> {
  render (): JSX.Element {
    return (
      <div className='bi-blocks-table-header bi-blocks-table__row bi-table__row'>
        <div className='bi-blocks-table__cell bi-table__cell'>
          <Link className={ this.getSortDirectionClassName('height') }
                to={ `?${this.getSortLink('height')}` }>
            <FormattedMessage id='common.block.height'/>
          
            <SortDirectionIcon className='bi-blocks-table-header__sort-icon'/>
            <SortDirectionAscIcon className='bi-blocks-table-header__sort-icon bi-blocks-table-header__sort-icon--asc'/>
            <SortDirectionDescIcon className='bi-blocks-table-header__sort-icon bi-blocks-table-header__sort-icon--desc'/>
          </Link>
        </div>
  
        <div className='bi-blocks-table__cell bi-table__cell'>
          <Link className={ this.getSortDirectionClassName('ts') }
                to={ `?${this.getSortLink('ts')}` }>
            <FormattedMessage id='common.block.age'/>
      
            <SortDirectionIcon className='bi-blocks-table-header__sort-icon'/>
            <SortDirectionAscIcon className='bi-blocks-table-header__sort-icon bi-blocks-table-header__sort-icon--asc'/>
            <SortDirectionDescIcon className='bi-blocks-table-header__sort-icon bi-blocks-table-header__sort-icon--desc'/>
          </Link>
        </div>
  
        <div className='bi-blocks-table__cell bi-table__cell'>
          <Link className={ this.getSortDirectionClassName('transactions') }
                to={ `?${this.getSortLink('transactions')}` }>
            <FormattedMessage id='common.block.transactions'/>
      
            <SortDirectionIcon className='bi-blocks-table-header__sort-icon'/>
            <SortDirectionAscIcon className='bi-blocks-table-header__sort-icon bi-blocks-table-header__sort-icon--asc'/>
            <SortDirectionDescIcon className='bi-blocks-table-header__sort-icon bi-blocks-table-header__sort-icon--desc'/>
          </Link>
        </div>
  
        <div className='bi-blocks-table__cell bi-table__cell'>
          <Link className={ this.getSortDirectionClassName('minedBy') }
                to={ `?${this.getSortLink('minedBy')}` }>
            <FormattedMessage id='common.block.minedBy'/>
      
            <SortDirectionIcon className='bi-blocks-table-header__sort-icon'/>
            <SortDirectionAscIcon className='bi-blocks-table-header__sort-icon bi-blocks-table-header__sort-icon--asc'/>
            <SortDirectionDescIcon className='bi-blocks-table-header__sort-icon bi-blocks-table-header__sort-icon--desc'/>
          </Link>
        </div>
        
        <div className='bi-blocks-table__cell bi-table__cell'>
          <Link className={ this.getSortDirectionClassName('size') }
                to={ `?${this.getSortLink('size')}` }>
            <FormattedMessage id='common.block.size'/>
      
            <SortDirectionIcon className='bi-blocks-table-header__sort-icon'/>
            <SortDirectionAscIcon className='bi-blocks-table-header__sort-icon bi-blocks-table-header__sort-icon--asc'/>
            <SortDirectionDescIcon className='bi-blocks-table-header__sort-icon bi-blocks-table-header__sort-icon--desc'/>
          </Link>
        </div>
  
        <div className='bi-blocks-table__cell bi-table__cell'>
          <Link className={ this.getSortDirectionClassName('votes') }
                to={ `?${this.getSortLink('votes')}` }>
            <FormattedMessage id='common.block.votes'/>
      
            <SortDirectionIcon className='bi-blocks-table-header__sort-icon'/>
            <SortDirectionAscIcon className='bi-blocks-table-header__sort-icon bi-blocks-table-header__sort-icon--asc'/>
            <SortDirectionDescIcon className='bi-blocks-table-header__sort-icon bi-blocks-table-header__sort-icon--desc'/>
          </Link>
        </div>
      </div>
    );
  }
  
  private getSortDirectionClassName (sortedColumn: string): string {
    const { sortBy, sortDirection } = queryString.parse(this.props.history.location.search);
    const classNames                = ['bi-blocks-table-header__sort'];
    
    
    if (sortBy === sortedColumn && sortDirection) {
      classNames.push(`bi-blocks-table-header__sort--${sortDirection}`);
    }
    
    return classNames.join(' ');
  }
  
  private getSortLink (sortedColumn: string): string {
    const params = queryString.parse(this.props.history.location.search);
    
    const { sortBy, sortDirection } = params;
    
    let newSortDirection = 'asc';
    
    if (sortBy === sortedColumn && sortDirection !== 'desc') {
      newSortDirection = 'desc';
    }
    
    return queryString.stringify({
      ...params,
      sortBy: sortedColumn,
      sortDirection: newSortDirection
    });
  }
}

export const BlockTableHeaderComponent = withRouter(BlockTableHeader);
