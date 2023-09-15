import styled from "styled-components";

export const Main = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: auto;

  .cloud__section {
    margin-top: 8rem;
    width: 100%;
    height: 70%;
  }

  .pink__section {
    width: 100%;
    height: 100%;
    background-color: rgba(var(--primary-rgba), 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .left__div {
    display: none;
  }

  .form__container {
    height: 19.875rem;
    width: 19.375rem;
    background-color: var(--white);
    border-radius: 1.375rem;
    display: flex;
    flex-direction: column;
    padding: 2rem;
    align-items: center;
    justify-content: space-between;
    box-shadow: rgba(var(--primary-black), 0.25) 0rem 0.25rem 0.25;
  }

  .register__button {
    width: 100%;
    height: 2.375rem;
    background: var(--black);
    border-radius: 0.313rem;
    color: var(--white);
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;

    :hover {
      background-color: var(--primary-gray);
    }
  }

  .not__registered {
    font-size: 0.688rem;
  }

  .login__form {
    width: 100%;
    height: 70%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    label {
      font-size: 1rem;
    }

    input {
      width: 100%;
      border: 0.063rem solid var(--primary-color);
      height: 2.188rem;
      border-radius: 0.313rem;
      padding: 0.5rem;

      ::placeholder {
        color: var(--tertiary-gray);
      }
    }

    button {
      margin-top: 0.5rem;
      width: 100%;
      height: 2.375rem;
      background: var(--tertiary-green);
      border-radius: 0.313rem;
      color: var(--black);

      :hover {
        background-color: var(--secondary-green);
      }
    }
  }

  @media (min-width: 769px) {
    .cloud__section {
      margin-top: 150px;
    }

    .content__container {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      height: 100%;
      width: 70%;
    }

    .left__div {
      display: flex;
      width: 463px;
      height: 476px;
      flex-direction: column;
      justify-content: space-between;
      background-color: var(--primary-color);
      box-shadow: 0px 4px 4px rgba(var(--primary-black), 0.25);
      border-radius: 22px;
      padding: 40px 30px;

      p {
        font-size: 20px;
        color: var(--white);
        font-weight: 400;
      }
    }

    .left__title {
      font-weight: 700;
      font-size: 36px;
      line-height: 44px;
    }

    .form__container {
      width: 463px;
      height: 476px;
    }

    .login__form {
      label {
        font-size: 20px;
      }

      input {
        height: 53px;
        font-size: 20px;
      }

      button {
        height: 57px;
        font-size: 20px;
      }
    }

    .register__button {
      height: 57px;
      font-size: 20px;
    }

    .not__registered {
      font-size: 14px;
    }
  }
`;
