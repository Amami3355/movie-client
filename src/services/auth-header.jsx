
export default function AuthHeader() {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user && user.jwt) {
        return { Authaurization: 'Bearer ' + user.jwt }
    } else {
        return {}
    }
}