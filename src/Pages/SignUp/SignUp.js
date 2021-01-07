import React from 'react'
import Input from '../../Components/Input'
import SignUpTop from '../../Components/SignUpTop'
import SingUpBottom from '../../Components/SingUpBottom'

const SignUp = () => {
    return (
        <>
            <SignUpTop/>
            <Input label='' type='text' text='Username *'/>
            <Input label='' type='text' text='Email address *'/>
            <Input label='' type='password' text='Password *'/>
            <SingUpBottom/>
        </>
    )
}

export default SignUp
