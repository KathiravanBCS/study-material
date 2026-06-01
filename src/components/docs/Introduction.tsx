import { Container, Title, Text, Stack } from '@mantine/core';

export function Introduction() {
  return (
    <Container size="md">
      <Title order={1} mb="lg">
        JavaScript Study Guide
      </Title>
      
      <Text c="dimmed" mb="xl">
        Welcome to your comprehensive JavaScript study application. This guide covers essential JavaScript concepts.
      </Text>

      <Title order={2} mt="xl" mb="md">
        What is JavaScript?
      </Title>
      <Text mb="xl">
        JavaScript is a versatile programming language that powers interactive web applications.
      </Text>

      <Title order={2} mt="xl" mb="md">
        Key Features
      </Title>
      <Stack gap="sm" mb="xl">
        <Text><strong>Dynamic Typing</strong> - Variables can hold any data type</Text>
        <Text><strong>First-Class Functions</strong> - Functions are objects that can be passed around</Text>
        <Text><strong>Prototypal Inheritance</strong> - Objects inherit directly from other objects</Text>
        <Text><strong>Event-Driven</strong> - Perfect for responsive user interfaces</Text>
      </Stack>

      <Title order={2} mt="xl" mb="md">
        Getting Started
      </Title>

      <pre style={{
        backgroundColor: '#f5f5f5',
        padding: '16px',
        borderRadius: '8px',
        overflow: 'auto',
        marginBottom: '24px'
      }}>
        <code>{`// Your first JavaScript program
console.log("Hello, JavaScript!");

// Variables
let name = "Student";
const age = 20;

// Functions
function greet(person) {
  return \`Welcome, \${person}!\`;
}

console.log(greet(name));`}</code>
      </pre>

      <Title order={2} mt="xl" mb="md">
        Topics Covered
      </Title>
      <Stack gap="sm" mb="xl">
        <Text>1. Fundamentals</Text>
        <Text>2. Functions & Scope</Text>
        <Text>3. Objects & Arrays</Text>
        <Text>4. ES6+ Features</Text>
        <Text>5. Asynchronous Programming</Text>
      </Stack>

      <Text c="dimmed" mt="xl">
        Learn at your own pace with interactive examples and detailed explanations.
      </Text>
    </Container>
  );
}
