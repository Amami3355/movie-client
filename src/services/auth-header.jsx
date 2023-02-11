
export default function AuthHeader() {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user && user.jwt) {
        return { Cookie: 'jwtCookie=' + user.jwt }
    } else {
        return {}
    }
}