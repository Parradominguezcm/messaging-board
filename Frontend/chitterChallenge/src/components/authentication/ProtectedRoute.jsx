import { PropTypes } from 'prop-types'

export const ProtectedRoute = ({ isLoggedIn, loggedInComponent, loggedOutComponent }) => {
    return (
        <>
            {isLoggedIn ? loggedInComponent : loggedOutComponent}
        </>
    )
}

ProtectedRoute.propTypes = {
    isLoggedIn: PropTypes.bool,
    loggedInComponent: PropTypes.object,
    loggedOutComponent: PropTypes.object,
}