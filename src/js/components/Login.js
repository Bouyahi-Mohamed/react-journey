import '../../css/Login.css';
import { useState } from 'react';
function Login() {
    let [formData, setFormData] = useState({
        username: '',
        phone: '',
        age: '',
        employee: false,
        salary: '0'
    });

    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <div className="Login">
        <h1>requiesting a load</h1>
        <form>
            <label>
                Username:
            </label>
                <input type="text" name="username" value={formData.username} onChange={(e) => setFormData({ ...formData, username: e.target.value })} />


            <label>
                Phone:
            </label>
                <input type="text" name="phone" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} />

            <label>
                Age:
            </label>
                <input type="text" name="age" value={formData.age} onChange={(e) => setFormData({ ...formData, age: e.target.value })} />

            <label className="checkboxLabel">
                are you an employee?
            <input type="checkbox" name="employee" checked={formData.employee} onChange={(e) => setFormData({ ...formData, employee: e.target.checked })} />
            </label>
            
            <label>
                Salary:
            </label>
                <select name="salary" value={formData.salary} onChange={(e) => setFormData({ ...formData, salary: e.target.value })}>
                    <option value="0">0</option>
                    <option value="1000">1000</option>
                    <option value="2000">2000</option>
                    <option value="3000">3000</option>
                    <option value="4000">4000</option>
                    <option value="5000">5000</option>
                </select>

            <button type="submit" onClick={handleFormSubmit}>Login</button>
        </form>

        </div>


    )

}

export default Login;