import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import MyRockets from '../Rocket/rockets';
import store from '../../redux/configureStore';

it('Test RocketContainer renders correctly', () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <MyRockets />
      </Provider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
