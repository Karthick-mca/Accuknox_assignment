import React, { useState } from 'react';
import styled from 'styled-components';

const FormWrapper = styled.div`
  background-color: white;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  margin-bottom: 10px;
  padding: 5px;
`;

const Select = styled.select`
  margin-bottom: 10px;
  padding: 5px;
`;

const Button = styled.button`
  background-color: #4CAF50;
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
  border-radius: 4px;
`;

const AddWidgetForm = ({ categories, onAddWidget }) => {
  const [name, setName] = useState('');
  const [text, setText] = useState('');
  const [categoryId, setCategoryId] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && text && categoryId) {
      onAddWidget(Number(categoryId), { name, text });
      setName('');
      setText('');
      setCategoryId('');
    }
  };

  return (
    <FormWrapper>
      <h2>Add Widget</h2>
      <Form onSubmit={handleSubmit}>
        <Select
          value={categoryId}
          onChange={(e) => setCategoryId(e.target.value)}
          required
        >
          <option value="">Select Category</option>
          {categories.map(category => (
            <option key={category.id} value={category.id}>{category.name}</option>
          ))}
        </Select>
        <Input
          type="text"
          placeholder="Widget Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <Input
          type="text"
          placeholder="Widget Text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          required
        />
        <Button type="submit">Add Widget</Button>
      </Form>
    </FormWrapper>
  );
};

export default AddWidgetForm;