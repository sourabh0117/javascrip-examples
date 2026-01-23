function handleSignup({ username, email, ...metadata }) {
    return {
        username,
        isAdmin: false,
        ...metadata
    };
}
