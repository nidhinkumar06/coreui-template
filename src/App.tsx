import '@coreui/coreui/dist/css/coreui.min.css';
import 'App.scss';
import 'material-components-web/dist/material-components-web.min.css';
import { DefaultLayout, SignIn } from 'navigation/routes';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const loading = () => <div className="animated fadeIn pt-3 text-center">Loading...</div>;

toast.configure();

const App: React.FC = () => {
  const defaultLayout = (props: any) => <DefaultLayout {...props} />;
  const signIn = (props: any) => <SignIn {...props} />;
  return (
    <div>
      <BrowserRouter>
          <React.Suspense fallback={loading()}>
            <Switch>
              <Route exact={true} path="/signin" render={signIn} />
              <Route path="/" render={defaultLayout} />
            </Switch>
          </React.Suspense>
        </BrowserRouter>
    </div>
  );
}

export default App;
