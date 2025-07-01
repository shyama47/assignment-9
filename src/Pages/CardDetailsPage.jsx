import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import CardDetails from '../component/CardDetails/CardDetails';
import { Helmet } from 'react-helmet-async';

const CardDetailsPage = () => {
    const data =useLoaderData();
    const {id} =useParams();
    // console.log(typeof id)
    // amr ekta data dorkar tar jonno amra map,filter,use kori nai karon map,filter,ekta array dibe and array er modde onk gula data thakbe...tai amra find use kore direct ekta data obj akare peye jabe ..... r map,filter use korle jehetu array dibe tar jonno index num diye data destructure kore nite jeta find diye korle lagbe na..
    const catchData =data.find(singleData=> singleData.id ==id)
    return (
      
        <div>
          <Helmet>
            <title>card Details {id} || page</title>
          </Helmet>
          <div>
          {
             <CardDetails catchData={catchData}></CardDetails>
           }
          </div>
          
        </div>
    );
};

export default CardDetailsPage;