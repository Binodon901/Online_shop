import React, { useContext } from 'react';
import { Route } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import { UserContext } from '../../App';

const Private = ({children,...rest}) => {
    const[loggedInUser,setLoggedInUser]=useContext(UserContext)
    return (
        <div>
            <Route
                {...rest}
                render={({ location }) =>
                    loggedInUser.email ? (
                        children
                    ) : (
                        <Redirect
                            to={{
                                pathname: "/login",
                                state: { from: location }
                            }}
                        />
                    )
                }
            />
        </div>
    );
};

export default Private;