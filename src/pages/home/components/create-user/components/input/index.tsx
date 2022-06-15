import React, { useState } from 'react';
import {
  FiUser, FiLock, FiCalendar, FiEdit, FiEdit3,
} from 'react-icons/fi';
import { useTheme } from 'styled-components';
import {
  Container, Icon, Text, TextInput, Title,
} from './styles';

interface Props{
  placeholder: string;
  value: string;
  onChange: any;
  type?: string;
  error?: boolean;
  errorMessage?: string;
}

const Input: React.FC<Props> = ({
  placeholder,
  value,
  onChange,
  type = 'text',
  error = false,
  errorMessage = '',
}) => {
  const theme = useTheme();
  return (
    <Container type={type}>
      <TextInput
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.currentTarget.value)}
        error={error}
      />
      {error && <Text error={error}>{errorMessage}</Text>}
    </Container>
  );
};

export default Input;
