import './InitialSection.css';
import React from 'react';
import axios from 'axios';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object({
  email: Yup.string().email("E-mail inválido").required("E-mail é obrigatório"),
});

const InitialSection = () => {
  const handleSubmit = async (values, { resetForm }) => {
    try {
      const response = await axios.post("http://localhost:5000/send-email", {
        email: values.email,
      });
      alert(response.data.message);
      resetForm();
    } catch (error) {
      console.error(error);
      alert("Erro ao enviar o e-mail. Tente novamente mais tarde.");
    }
  };

  return (
    <section className="initial" id="initial">
      <section className="initial-section">
        <div>
          <h3>Sua casa com as</h3>
          <h1>melhores plantas</h1>
          <p>
            Encontre aqui uma vasta seleção de plantas para decorar a sua casa e
            torná-lo uma pessoa mais feliz no seu dia a dia. Entre com seu e-mail e
            assine nossa newsletter para saber das novidades da marca.
          </p>
        </div>
        <div className="newsletter">
          <Formik
            initialValues={{ email: "" }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isValid, dirty }) => (
              <Form className="form-container">
                <Field
                  type="email"
                  name="email"
                  placeholder="Insira seu e-mail"
                  className="input-field"
                />
                <ErrorMessage name="email" component="div" className="error-message" />
                <button
                  type="submit"
                  className="submit-button"
                  disabled={!(isValid && dirty)}
                >
                  Assinar newsletter
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </section>
      <section className="image-section">
        <div></div>
      </section>
    </section>
  );
};

export default InitialSection;
