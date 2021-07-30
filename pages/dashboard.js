import React from 'react'
import { withPageAuthRequired } from '@auth0/nextjs-auth0'

function dashboard() {
    return (
        <div>
            Protected Dashboard!
        </div>
    )
}

export default dashboard

export const getServerSideProps = withPageAuthRequired();
