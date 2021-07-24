import './App.css';
import { Formik } from 'formik';

function App() {
  return (
    <div className="App">
      <h1>Sign Up</h1>
      <Formik
        initialValues={{
          firstName: 'Doğancan',
          lastName: 'Ülgü',
          email: 'dogancanulgu@gmail.com',
          gender: 'male',
          hobies: [],
          country: "Turkey"
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {
          ({ handleSubmit, handleChange, values }) => (
            <form onSubmit={handleSubmit}>
              <label htmlFor="firstName">First Name</label>
              <input name="firstName" onChange={handleChange} values={values.firstName} placeholder="Doğancan" />

              <br />
              <br />

              <label htmlFor="lastName">Last Name</label>
              <input name="lastName" onChange={handleChange} values={values.lastName} placeholder="Ülgü" />

              <br />
              <br />

              <label htmlFor="email">Email</label>
              <input name="email" onChange={handleChange} values={values.email} placeholder="dogancanulgu@gmail.com" type="email" />

              <br />
              <br />

              <label htmlFor="gender">Gender</label>
              <br />

              <span>Male</span>
              <input
                type="radio"
                name="gender"
                onChange={handleChange}
                value="male"
                checked={values.gender === "male"}
              />
              <span>Female</span>
              <input
                type="radio"
                name="gender"
                onChange={handleChange}
                value="female"
                checked={values.gender === "female"}
              />

              <br />
              <br />

              <div>
                <input type="checkbox" name="hobies" value="Football" onChange={handleChange} />
                Football
              </div>
              <div>
                <input type="checkbox" name="hobies" value="Cinema" onChange={handleChange} />
                Cinema
              </div>

              <div>
                <input type="checkbox" name="hobies" value="Photography" onChange={handleChange} />
                Photography
              </div>

              <br />
              <br />

              <select name="country" value={values.country} onChange={handleChange}>
                <option value="tr">Turkey</option>
                <option value="en">England</option>
                <option value="usa">USA</option>
                <option value="de">Germany</option>
              </select>

              <br />
              <br />

              <button type="submit">Submit</button>

              <br />
              <code>{JSON.stringify(values)}</code>
            </form>
          )
        }
      </Formik>
    </div>
  );
}

export default App;
