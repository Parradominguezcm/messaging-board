export const ProtectedRoute = ({ isLoggedIn, loggedInComponent, loggedOutComponent }) => {
    return (
        <>
            {isLoggedIn ? loggedInComponent : loggedOutComponent}
        </>
    )
}

