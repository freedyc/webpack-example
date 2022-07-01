import React, { Suspense } from 'react';

const App = () => {
    return (
        <div>
            <h1>APP1</h1>
            <Suspense fallback={<div>Loading...</div>}>
            </Suspense>
        </div>
    )
}