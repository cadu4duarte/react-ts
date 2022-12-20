import { useState } from 'react'
import './App.css'

type TypographyProps = {
  children: React.ReactNode;
  size?: "small" | "large";
};

type ParagraphProps = {
  color: string;
};

const Paragraph = ({ children, size, color }: TypographyProps & ParagraphProps) => {
  return (
    <h1 
      style={{
        fontSize: size == "small" ? "1.5rem" : "3rem",
        color: color,
      }}
    >
      {children}
    </h1>
  );
};

const Title = ({ children, size }: TypographyProps) => {
  return(
    <h1
      style={{
        fontSize: size == "small" ? "1.5rem" : "3rem",
      }}
    >
      {children}
    </h1>
  );
};

const titleDefaultProps = {
  size: "small"
};

Title.defaultProps = titleDefaultProps;

const user = {
  id: 1,
  name: "John Doe",
  age: 30,
  isAdmin: true,
  birthDate: new Date("1980-01-01")
}

type UserAtrributes = typeof user;

const mary: UserAtrributes = {
  id: 2,
  name: "Mary Doe",
  age: 25,
  isAdmin: false,
  birthDate: new Date("1997-02-07")
}

//não precisa tipar o retorno de uma function
function sumNumbers(a: number, b: number) {
  return a + b;
}

function App() {

  return (
    <div className="App">
      <Title>
        <span>
          Hello <b>World</b>
        </span>
      </Title>

      <Paragraph color='red' size='small'>
        Um parágrafo
      </Paragraph>
    </div>
  )
}

export default App
