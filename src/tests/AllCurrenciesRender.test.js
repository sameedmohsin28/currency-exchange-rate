import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import store from '../Redux/store';

import AllCurrencies from '../Components/AllCurrencies';

describe('AllCurencies rendering Validation', () => {
  test('AllCurencies should render with / url', () => {
    const treeSnapShot = renderer.create(
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<AllCurrencies />} />
          </Routes>
        </BrowserRouter>
      </Provider>,
    ).toJSON();
    expect(treeSnapShot).toMatchSnapshot();
  });
});