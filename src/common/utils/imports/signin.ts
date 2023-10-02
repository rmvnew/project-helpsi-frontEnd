import React, { useContext, useState } from "react";
import { GoogleLogin } from "react-google-login";
import Logo from "../../../assets/img/logo.svg";
import google from "../../../assets/img/google.svg";
import Bonecos from "../../../assets/img/Psychologist.svg";
import {
  FormGroup,
  Image,
  LoginContainer,
} from "../../../components/Layout/Container/ContainerLogin/styled";
import { Link, useNavigate } from "react-router-dom";
import {
  Form,
  Google,
  Span,
  TextContainer,
} from "../../../pages/Login/Signin/styled";
import { ToastContainer, toast } from "react-toastify";
import { AuthContext } from "../../../contexts/auth/AuthContext";

export {
  React,
  useContext,
  useState,
  GoogleLogin,
  Logo,
  google,
  Bonecos,
  FormGroup,
  Image,
  LoginContainer,
  Link,
  useNavigate,
  Form,
  Google,
  Span,
  TextContainer,
  ToastContainer,
  toast,
  AuthContext,
};
