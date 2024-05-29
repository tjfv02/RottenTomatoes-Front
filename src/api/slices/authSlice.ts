import { SignInRequest, SignInResponse, SignUpRequest } from "../../interfaces/Auth";
import { mainSlice } from "../mainSlice";

const authSliceTag = mainSlice.enhanceEndpoints({addTagTypes: ['AUTH']});

const authSlice = authSliceTag.injectEndpoints({
    endpoints: (build) => ({
        signIn: build.mutation<SignInResponse, SignInRequest>({
            query: (body) => ({ url: '/Auth/SignIn', method: 'POST', data: body }),
            invalidatesTags: ['AUTH'],
        }),
        signUp: build.mutation<SignInResponse, SignUpRequest>({
            query: (body) => ({ url: '/Auth/SignUp', method: 'POST', data: body }),
            invalidatesTags: ['AUTH'],
        }),
        logOut: build.mutation<void, void>({
            query: () => ({ url: '/Auth/Logout', method: 'POST' }),
          }),
    }),
});

export const {useSignInMutation, useSignUpMutation, useLogOutMutation } = authSlice