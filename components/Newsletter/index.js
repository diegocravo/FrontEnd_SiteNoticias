import React, { useState } from "react";
import { Container, Row, Modal, Button } from "react-bootstrap";
import fireDb from "../../src/data/firebase";

const Newsletter = () => {
  const [showModal, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [successMessage, setSuccessMessage] = useState(false);

  const MessageGreen = () => {
    return (
      <div>
        <span class="badge badge-success">Cadastro efetuado com sucesso</span>
      </div>
    );
  };

  const initialValues = {
    nome: "",
    email: "",
  };
  let [values, setValues] = useState(initialValues);

  const inputHandler = (e) => {
    let { name, value } = e.target;

    setValues({
      ...values,
      [name]: value,
    });
  };

  const addEdit = (obj) => {
    fireDb.child("newsletter").push(obj, (error) => {
      if (error) {
        console.log(error);
      }
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addEdit(values);
    setValues({
      nome: "",
      email: "",
    });
    setSuccessMessage(true);
    setTimeout(function () {
      setSuccessMessage(false);
      handleClose();
    }, 3000);
  };

  return (
    <div className="p-4 m-4 ">
      <div className="d-flex justify-content-center">
        <h4>Quer ficar por dentro de tudo que acontece?</h4>
      </div>
      <div className="d-flex justify-content-center">
        <Button
          onClick={handleShow}
          variant="primary"
          className="px-4 py-2"
          data-toggle="modal"
          data-target="#exampleModal"
          data-whatever="@mdo"
        >
          Assine nossa newsletter!
        </Button>
      </div>

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            Cadastre seu Email para ficar por dentro de tudo
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit}>
            <div className="py-2">
              <input
                className="form-control mr-sm-2"
                type="text"
                placeholder="Digite seu nome"
                aria-label="nome"
                name="nome"
                value={values.nome}
                onChange={inputHandler}
              />
            </div>
            <div className="py-2">
              <input
                className="form-control mr-sm-2"
                type="email"
                placeholder="Digite seu melhor email"
                aria-label="email"
                name="email"
                value={values.email}
                onChange={inputHandler}
              />
            </div>
            <input
              type="submit"
              value="Cadastrar"
              className="btn btn-primary btn-block"
            />
          </form>
          {successMessage ? <MessageGreen /> : null}
        </Modal.Body>
        <Modal.Footer>
          <div style={{ display: successMessage ? "block" : "none" }}>
            <span class="badge badge-light">
              Ao Clicar em Cadastrar você concorda com todos os termos e
              condições
            </span>
          </div>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Newsletter;
