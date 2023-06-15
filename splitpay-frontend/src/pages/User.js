const User = () => {
    if (localStorage.getItem('login') === 'true') {
        return (
            <center>
                <h1>User information</h1>
                <table>
                    <h2 align='left'>
                    <tr>
                        <th border-bottom='2px solid black'>User ID: </th>
                        <th border-bottom='2px solid black'>{localStorage.getItem('id')}</th>
                    </tr>
                    <tr>
                        <th border-bottom='2px solid black'>Username: </th>
                        <th border-bottom='2px solid black'>{localStorage.getItem('username')}</th>
                    </tr>
                    <tr>
                        <th border-bottom='2px solid black'>Email: </th>
                        <th border-bottom='2px solid black'>{localStorage.getItem('email')}</th>
                    </tr>
                    </h2>
                </table>
            </center>
        )
    } else {
        return (
            <center>
                <h1>User Information</h1>
                <h2>Please login !</h2>
            </center>
        )
    }
};
  
export default User;