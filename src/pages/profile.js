import React, { useContext } from 'react';
import Layout from '../components/layout'
import Error from './_error'
import { GlobalContext } from '../context/GlobalContext';

export default function Page() {
    const context = useContext(GlobalContext);
    const { user } = context.userContext.userState;

    console.log(user)

    if(Object.keys(user).length == 0){
        return <Error statusCode="400" />
    }
  return (
    <Layout>
        Profile
    </Layout>
  );
}
