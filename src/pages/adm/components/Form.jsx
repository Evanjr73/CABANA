import axios from "axios";
import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { toast } from "react-toastify";

const FormContainer = styled.form`
  display: flex;
  align-items: flex-end;
  gap: 10px;
  flex-wrap: wrap;
  background-color: #fff;
  padding: 20px;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 5px;
`;

const InputArea = styled.div`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  width: 120px;
  padding: 0 10px;
  border: 1px solid #bbb;
  border-radius: 5px;
  height: 40px;
`;

const Label = styled.label``;

const Button = styled.button`
  padding: 10px;
  cursor: pointer;
  border-radius: 5px;
  border: none;
  background-color: #2c73d2;
  color: white;
  height: 42px;
`;

const Form = ({ getUsers, onEdit, setOnEdit }) => {
  const ref = useRef();

  useEffect(() => {
    if (onEdit) {
      const user = ref.current;

      user.nomel.value = onEdit.nomel;
      user.valor.value = onEdit.valor;
      user.sobre.value = onEdit.sobre;
      user.imagem.value = onEdit.imagem;
      user.pessoas.value = onEdit.pessoas;
    }
  }, [onEdit]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const user = ref.current;

    // if (
    //   !user.nomel.value ||
    //   !user.valor.value ||
    //   !user.sobre.value ||
    //   !user.imagem.value ||
    //   !user.pessoas.value
    // ) {
    //   return toast.warn("Preencha todos os campos!");
    // }

    if (onEdit) {
      await axios
        .put("http://localhost:8800/" + onEdit.id, {
          nome: user.nomel.value,
          email: user.valor.value,
          fone: user.sobre.value, 
          fone: user.imagem.value,
          fone: user.pessoas.value,     
         
        })
        .then(({ data }) => toast.success(data))   
        .catch(({ data }) => toast.error(data));
    } else {
      await axios
        .post("http://localhost:8800", {
          nome: user.nomel.value,
          email: user.valor.value,
          fone: user.sobre.value,
          fone: user.imagem.value,
          fone: user.pessoas.value,
          
        }) 
        .then(({ data }) => toast.success(data))
        .catch(({ data }) => toast.error(data));
    }

    user.nomel.value = "";
    user.valor.value = "";
    
    user.sobre.value = "";
    user.imagem.value = "";
    user.pessoas.value = "";

    setOnEdit(null);
    getUsers();
  };

  return (
    <FormContainer ref={ref} >
      <InputArea>
        <Label>Nome</Label>
        <Input name="nomel" />
      </InputArea>
      <InputArea>
        <Label>valor</Label>
        <Input name="valor"/>
      </InputArea>
      <InputArea>
        <Label>sobre</Label>
        <Input name="sobre" />
      </InputArea>
      <InputArea>
        <Label>imagem</Label>
        <Input name="imagem"/>
      </InputArea>
      <InputArea>
        <Label>pessoas</Label>
        <Input name="pessoas"  />
      </InputArea>

      <Button  onClick={handleSubmit}>SALVAR</Button>
    </FormContainer>
  );
};

export default Form;
