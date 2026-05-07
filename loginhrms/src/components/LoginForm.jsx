import React, { useState, useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { loginUserThunk } from '../slices/authSlice';
import { toast } from 'react-toastify'; // Correct import
import { useNavigate, Link as RouterLink } from 'react-router-dom';
import Cookies from 'js-cookie';
import { LuEye, LuEyeOff } from 'react-icons/lu';

const EMAIL_REGEX = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

const LoginForm = ({ onSubmitSuccess }) => {
    const [showPassword, setShowPassword] = useState(false);
    const { register, handleSubmit, watch, reset, formState: { errors, isSubmitting, isValid } } = useForm({ mode: 'onChange' });
    const { loading, error, token } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const emailValue = watch('email', '');
    const passwordValue = watch('password', '');
    const isEmailValid = useMemo(() => EMAIL_REGEX.test(emailValue), [emailValue]);
    const isPasswordValid = useMemo(() => passwordValue && passwordValue.length >= 8, [passwordValue]);

    const onSubmit = async (data) => {
        try {
            const result = await dispatch(loginUserThunk({ email: data.email, password: data.password }));
            if (result.meta.requestStatus === 'fulfilled') {
                toast.success('You have successfully logged in.'); // Use toast to show success message

                reset();
                const token = result.payload?.token;
                Cookies.set('auth_token', token);  // Store token in cookie

                // Decode token and handle routing based on role
                if (token) {
                    localStorage.setItem('token', token);
                    const decoded = JSON.parse(atob(token.split('.')[1])); // JWT decoding
                    if (decoded.isOrgPresent) {
                        navigate('/dashboard', { replace: true });
                    } else {
                        navigate('/orgRegister', { replace: true });
                    }
                }

                if (onSubmitSuccess) onSubmitSuccess(result.payload);
            } else {
                toast.error(result.payload?.message || 'Invalid credentials.'); // Use toast to show error message
            }
        } catch (err) {
            toast.error('Something went wrong. Please try again.'); // Use toast to show error message
        }
    };

    return (
        <div className="login-form-container">
            <form onSubmit={handleSubmit(onSubmit)} className="login-form">
                <h1>Welcome!</h1>
                <p>Let's discover the HR solutions in a Snap.</p>

                {/* Email Field */}
                <div className="input-group">
                    <label htmlFor="email">Email</label>
                    <input
                        id="email"
                        type="email"
                        placeholder="Enter your email"
                        {...register('email', {
                            required: 'Email is required',
                            pattern: {
                                value: EMAIL_REGEX,
                                message: 'Enter a valid email address',
                            },
                        })}
                    />
                    {errors.email && <p className="error">{errors.email.message}</p>}
                </div>

                {/* Password Field */}
                <div className="input-group">
                    <label htmlFor="password">Password</label>
                    <div className="password-input">
                        <input
                            id="password"
                            type={showPassword ? 'text' : 'password'}
                            placeholder="Enter your password"
                            {...register('password', { required: 'Password is required' })}
                        />
                        <button type="button" onClick={() => setShowPassword(prev => !prev)} className="eye-icon">
                            {showPassword ? <LuEyeOff /> : <LuEye />}
                        </button>
                    </div>
                    {errors.password && <p className="error">{errors.password.message}</p>}
                </div>

                {/* Remember Me */}
                <div className="checkbox-container">
                    <label>
                        <input {...register('remember')} type="checkbox" />
                        Remember me
                    </label>
                    <RouterLink to="/forgot-password" className="forgot-password-link">
                        Forgot Password?
                    </RouterLink>
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="submit-btn"
                    disabled={isSubmitting || !isValid}
                >
                    {loading ? 'Logging in...' : 'Log In'}
                </button>
            </form>
        </div>
    );
};

export default LoginForm;