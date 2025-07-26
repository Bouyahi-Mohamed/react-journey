import '../../css/Login.css';
import { useState } from 'react';
function Login({showPopup, setShowPopup}) {
    let [formData, setFormData] = useState({
        username: '',
        phone: '',
        age: '',
        employee: false,
        salary: '0'
    });

    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (!formData.username || !formData.phone || !formData.age) {
            setShowPopup({ visible: true, message: 'Please fill in all fields.' , className: 'error' });
            return;
        }
        if (isNaN(formData.age) || isNaN(formData.phone)) {
            setShowPopup({ visible: true, message: 'Age and Phone must be numbers.', className: 'error' });
            return;
        }
        if (formData.age < 18 || formData.age > 65) {
            setShowPopup({ visible: true, message: 'Age must be between 18 and 65.', className: 'error' });
            return;
        }
        if (formData.phone.length !== 8) {
            setShowPopup({ visible: true, message: 'Phone must be 8 digits long.', className: 'error' });
            return;
        }

        // Here you can add logic to handle the form submission, like sending data to an API
        setShowPopup({ visible: true, message: 'Form submitted successfully!', className: 'success' });
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
                    <option >less than 500$ </option>
                    <option >between 500 and 1000$</option>
                    <option>between 1000 and 2000$</option>
                    <option >between 2000 and 3000$</option>
                    <option >between 3000 and 4000$</option>
                    <option >more than 4000$</option>
                </select>

            <button className={formData.username && formData.phone && formData.age ? 'active' : 'inactive'} type="submit" disabled={!(formData.username && formData.phone && formData.age)} onClick={handleFormSubmit}>Login</button>
        </form>

        </div>


    )

}

export default Login;