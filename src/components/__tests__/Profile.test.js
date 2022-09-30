import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import MyProfile from '../Profile';
import store from '../../redux/configureStore';

it('Check MyProfile renders correctly', () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <MyProfile />
      </Provider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
