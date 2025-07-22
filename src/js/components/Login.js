import '../../css/Login.css';
function Login() {
    return (
        <div className="Login">
        <h1>requiesting a load</h1>
        <form>
            <label>
                Username:
            </label>
                <input type="text" name="username" />
            
            
            <label>
                Phone:
            </label>
                <input type="text" name="phone" />
            
            <label>
                Age:
            </label>
                <input type="text" name="age" />

            <label className="checkboxLabel">
                are you an employee?
            <input type="checkbox" name="employee" />
            </label>
            
            <label>
                Salary:
            </label>
                <select name="salary">
                    <option value="0">0</option>
                    <option value="1000">1000</option>
                    <option value="2000">2000</option>
                    <option value="3000">3000</option>
                    <option value="4000">4000</option>
                    <option value="5000">5000</option>
                </select>

            <button type="submit">Login</button>
        </form>

        </div>


    )

}

export default Login;