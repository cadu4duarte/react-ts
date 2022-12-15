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

function App() {

  return (
    <div className="App">
      <Title>
        <span>
          Hello <b>World</b>
        </span>
      </Title>
    </div>
  )
}

export default App
