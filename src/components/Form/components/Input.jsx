import React from 'react'
import { Group } from '@mantine/core';
import './index.scss'

const Input = props => {
  const { 
    name, 
    label, 
    type, 
    placeholder, 
    required,
    disabled,
    radius = 'sm',
    size='md',
    variant = 'default',
    icon,
    error,
    description,
    value
  } = props;

  const setType = () =>  type ? type : "text";
  const setClassName = () => {
    let className = `input-editor border-radius-${radius} size-${size} variant-${variant}`;
    if (error) className += " input-editor-error";
    if (disabled) className += " input-editor-disabled";
    return className;
  }

  const Inputs = () => {
    if (type === 'radio') {
      return (
        <div className='input-editor-wrap'>
          <input 
            type="radio"
            name={ name }
            disabled={ disabled }
            required={ required }
            value={ value }
          />
        </div>
      )
    }
    return (
      <div className='input-editor-wrap'>
        <span className='icon'>{ icon }</span>
        <input 
          className={ setClassName() }
          type={ setType() }
          name={ name }
          placeholder={ placeholder }
          disabled={ disabled }
          required={ required }
          data-with-icon={ icon ? true : false }
        />
      </div>
    )
  };

  return (
    <><Group grow>
      <div className='input-editor-label'>
        <label>
          { label }
          { required && <span>*</span> }
        </label>
      </div>
      { Inputs() }
    </Group>
    <span className='input-editor-description'>{ description }</span></>
  )
}

export default Input;
