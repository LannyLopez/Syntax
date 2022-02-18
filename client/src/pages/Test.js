import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_USERS } from '../graphql/queries';

const Test = () => {
    const { loading, data } = useQuery(QUERY_USERS);
    const users = data?.users || [];
    console.log(users);

    return (
        <main>
            <div>
                {loading ? (
                    <h1>Loading users. . . </h1>
                ) : (
                    users && users.map((users, github) => (
                        <h1 key={github}>{users.github}</h1>
                    ))
                )}

            </div>
        </main>
    )
};

export default Test;
