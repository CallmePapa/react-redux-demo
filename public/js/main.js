/**
 * Created by weiqiujuan on 17-8-17.
 */
import React from 'react'
import { Provider } from 'react-redux';

import Hello from "./containers/hello.js";
import Change from "./containers/change.js";


class App extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        const {actions,text}=this.props;
        return(
            <div>
                <Hello action={actions} test={test}/>
                <Change actions={actions}/>
            </div>
        );
    }
}
render(
    <Provider store={store}>
         <App/>
    </Provider>,

    document.getElementById('root')
)