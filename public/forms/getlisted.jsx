import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const validationSchema = Yup.object().shape({
  businessName: Yup.string().required('Business Name is required'),
  businessEmail: Yup.string().email('Invalid email').required('Business Email is required'),
  businessCategory: Yup.string().required('Business Category is required'),
  location: Yup.string().required('Location is required'),
});

const initialValues = {
  businessName: '',
  businessEmail: '',
  businessCategory: '',
  location: '',
};

const FormComponent = () => {
  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      // Create a data object with the required structure
      const formData = {
        data: {
          FormName: values.businessName,
          Details: {
            "Business Name": values.businessName,
            "Business Email": values.businessEmail,
            "Business Category": values.businessCategory,
            Location: values.location,
          },
        },
      };

      // Make an HTTP POST request to the Strapi API endpoint
      const response = await axios.post('http://localhost:1337/api/submissions', formData);

      // Log the response from the server
      console.log('Submission response:', response.data);

      // Simulating API call delay
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Reset form after successful submission
      setSubmitting(false);
    } catch (error) {
      console.error('Error submitting form:', error);

      // Log the form values in case of an error
      console.log(values);

      setSubmitting(false);
    }
  };

  return (
    <div className='form-component-wrapper'>
      <div className='form-component'>
        <div className='head'>
          <h2>Get Listed on Our Website</h2>
          <p>Register your business for increased visibility</p>
        </div>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form>
              {/* Form fields go here */}

              <div>
                <label htmlFor="businessName">Business Name</label>
                <Field type="text" id="businessName" name="businessName" placeholder="Enter your business name" />
                <ErrorMessage name="businessName" component="div" />
              </div>

              <div>
                <label htmlFor="businessEmail">Business Email</label>
                <Field type="text" id="businessEmail" name="businessEmail" placeholder="Enter your business email" />
                <ErrorMessage name="businessEmail" component="div" />
              </div>

              <div>
                <label htmlFor="businessCategory">Category</label>
                <Field as="select" id="businessCategory" name="businessCategory">
                  <option value="" label="Select a category" />
                  <option value="Restaurant">Restaurant</option>
                  <option value="Shopping">Shopping</option>
                  <option value="Business">Business</option>
                  <option value="Healthcare">Healthcare</option>
                  {/* Add more options as needed */}
                </Field>
                <ErrorMessage name="businessCategory" component="div" />
              </div>

              <div>
                <label htmlFor="location">Location</label>
                <Field type="text" id="location" name="location" placeholder="Enter your business location" />
                <ErrorMessage name="location" component="div" />
              </div>

              <div>
                <button type="submit" disabled={isSubmitting}>
                  Submit
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default FormComponent;
