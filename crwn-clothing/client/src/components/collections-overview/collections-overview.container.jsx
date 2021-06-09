import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectIsCollectionFetching } from '../../redux/shop/shop.selector';
import WithSpinner from '../with-spinner/with-spinner.component';
import CollectionsOverview from './collections-overview.component';
import { compose } from 'redux';

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionFetching
});

// Compose evaluates from right to left (currying the function)
// 1. Pass in CollectionsOverView into WithSpinner
// 2. Pass #1 to mapStateToProps
const CollectionsOverviewContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionsOverview)

export default CollectionsOverviewContainer;

