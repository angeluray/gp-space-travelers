import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import MyMission from '../Mission/Mission ';
import store from '../../redux/configureStore';

it('Test Missions renders correctly', () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <MyMission />
      </Provider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
