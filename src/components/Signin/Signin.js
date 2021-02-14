import React, { Component } from 'react';
import Button from '../Button/Button';
import FormInput from '../FormInput/FormInput';
import { signInWithGoogle } from '../../firebase/firebase.utils';
import './Signin.scss';

export default class Signin extends Component {
  state = {
    email: '',
    password: '',
  };
  handleSubmit = (e) => {
    e.preventDetault();
    this.setState({ email: '', password: '' });
  };
  handleChange = (e) => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };
  render() {
    return (
      <div className='sign-in'>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            type='email'
            name='email'
            handleChange={this.handleChange}
            value={this.state.email}
            label='email'
            required
          />
          <FormInput
            type='password'
            name='email'
            handleChange={this.handleChange}
            value={this.state.password}
            label='password'
            required
          />
          <div className='buttons'>
            <Button type='submit'>Sign in</Button>{' '}
            <Button onClick={signInWithGoogle} isGoogleSignIn>
              Sign in with Google
            </Button>
          </div>
        </form>
      </div>
    );
  }
}