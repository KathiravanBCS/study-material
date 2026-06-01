import { Container, Title, Text, Group, Stack, Table, Grid, Paper} from '@mantine/core';
import { CircleCheck, CircleX } from 'tabler-icons-react';

export function Hooks() {
  return (
    <Container fluid>
      <Title order={1} mb="lg">
        React Hooks Overview
      </Title>
      
      <Text mb="md" style={{ fontSize: '16px', lineHeight: '1.6' }}>
        React Hooks, introduced in <strong>React 16.8</strong>, enable functional components to use state, lifecycle, and other React features without relying on class components. Hooks represent a fundamental shift in how developers write React applications.
      </Text>

      <Title order={3} mt="lg" mb="md">
        Key Benefits of React Hooks:
      </Title>
      <Stack gap="md" mb="xl">
        <Group gap="sm">
          <CircleCheck size={24} color="var(--mantine-color-green-6)" style={{ flexShrink: 0 }} />
          <div><strong>Eliminate Class Components</strong> — No longer need class components for state and side-effect management</div>
        </Group>
        <Group gap="sm">
          <CircleCheck size={24} color="var(--mantine-color-green-6)" style={{ flexShrink: 0 }} />
          <div><strong>Improve Code Readability</strong> — Hooks enable a functional programming style that's cleaner and easier to understand</div>
        </Group>
        <Group gap="sm">
          <CircleCheck size={24} color="var(--mantine-color-green-6)" style={{ flexShrink: 0 }} />
          <div><strong>Modern Standard</strong> — Widely adopted in modern React projects for cleaner and more maintainable code</div>
        </Group>
      </Stack>

      <Title order={1} mb="lg">
        Class Components vs Functional Components (Hooks) in React
      </Title>

      <Title order={2} mt="xl" mb="md">
        BEFORE React 16.8 — Class Components
      </Title>
      <Text mb="md">
        Before hooks existed, <strong>only class components</strong> could handle state and lifecycle. Functional components were "dumb" — they could only receive props and render UI.
      </Text>

      <Title order={3} mt="lg" mb="md">
        How State was handled in Class:
      </Title>
      <pre style={{
        backgroundColor: '#f5f5f5',
        padding: '12px',
        borderRadius: '8px',
        overflow: 'auto',
        marginBottom: '16px',
        fontSize: '12px'
      }}>
        <code>{`class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return (
      <div>
        <p>{this.state.count}</p>
        <button onClick={this.increment}>+</button>
      </div>
    );
  }
}`}</code>
      </pre>

      <Title order={2} mt="xl" mb="md">
        AFTER React 16.8 — Functional Components with Hooks
      </Title>
      <Text mb="md">
        The <strong>same things</strong> are now handled with simple functions:
      </Text>

      <pre style={{
        backgroundColor: '#f5f5f5',
        padding: '12px',
        borderRadius: '8px',
        overflow: 'auto',
        marginBottom: '16px',
        fontSize: '12px'
      }}>
        <code>{`function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}`}</code>
      </pre>

      <Title order={2} mt="xl" mb="md">
        Side-by-Side Comparison
      </Title>
      
      <Table striped highlightOnHover mb="xl">
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Feature</Table.Th>
            <Table.Th>Class Component</Table.Th>
            <Table.Th>Functional + Hooks</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          <Table.Tr>
            <Table.Td>State</Table.Td>
            <Table.Td><code>this.state + this.setState()</code></Table.Td>
            <Table.Td><code>useState()</code></Table.Td>
          </Table.Tr>
          <Table.Tr>
            <Table.Td>On Mount</Table.Td>
            <Table.Td><code>componentDidMount()</code></Table.Td>
            <Table.Td><code>useEffect(() {'{}'}, [])</code></Table.Td>
          </Table.Tr>
          <Table.Tr>
            <Table.Td>On Update</Table.Td>
            <Table.Td><code>componentDidUpdate()</code></Table.Td>
            <Table.Td><code>useEffect(() {'{}'}, [dep])</code></Table.Td>
          </Table.Tr>
          <Table.Tr>
            <Table.Td>On Unmount</Table.Td>
            <Table.Td><code>componentWillUnmount()</code></Table.Td>
            <Table.Td><code>useEffect(() =&gt; cleanup, [])</code></Table.Td>
          </Table.Tr>
          <Table.Tr>
            <Table.Td>Code length</Table.Td>
            <Table.Td>Long & verbose</Table.Td>
            <Table.Td>Short & clean</Table.Td>
          </Table.Tr>
          <Table.Tr>
            <Table.Td>Reuse logic</Table.Td>
            <Table.Td>Hard (HOC / Render Props)</Table.Td>
            <Table.Td>Easy (Custom Hooks)</Table.Td>
          </Table.Tr>
        </Table.Tbody>
      </Table>

   
      {/* <Title order={2} mt="xl" mb="md">
        Final Verdict — Why Hooks Won
      </Title>

      <Grid gutter="lg" mb="xl">
        <Grid.Col span={{ base: 12, sm: 6 }}>
          <Paper p="lg" radius="md" style={{ backgroundColor: '#fff3cd', border: '2px solid #ffc107' }}>
            <Title order={3} mb="md" style={{ color: '#856404' }}>
              Class Components
            </Title>
            <Stack gap="xs" style={{ fontSize: '14px' }}>
              <Group gap="xs"><Text fw={500} style={{ flex: 1 }}>constructor()</Text></Group>
              <Group gap="xs"><Text fw={500} style={{ flex: 1 }}>componentDidMount()</Text></Group>
              <Group gap="xs"><Text fw={500} style={{ flex: 1 }}>componentDidUpdate()</Text></Group>
              <Group gap="xs"><Text fw={500} style={{ flex: 1 }}>componentWillUnmount()</Text></Group>
              <Group gap="xs"><Text fw={500} style={{ flex: 1 }}>this.state</Text></Group>
              <Group gap="xs"><Text fw={500} style={{ flex: 1 }}>createRef()</Text></Group>
              <Group gap="xs"><Text fw={500} style={{ flex: 1 }}>contextType</Text></Group>
              <Group gap="xs"><Text fw={500} style={{ flex: 1 }}>HOC / Render Props</Text></Group>
            </Stack>
          </Paper>
        </Grid.Col>

        <Grid.Col span={{ base: 12, sm: 6 }}>
          <Paper p="lg" radius="md" style={{ backgroundColor: '#d1ecf1', border: '2px solid #17a2b8' }}>
            <Title order={3} mb="md" style={{ color: '#0c5460' }}>
              Functional + Hooks
            </Title>
            <Stack gap="xs" style={{ fontSize: '14px' }}>
              <Group gap="xs"><Text fw={500} style={{ flex: 1 }}>useState()</Text></Group>
              <Group gap="xs"><Text fw={500} style={{ flex: 1 }}>useEffect(fn, [])</Text></Group>
              <Group gap="xs"><Text fw={500} style={{ flex: 1 }}>useEffect(fn, [dep])</Text></Group>
              <Group gap="xs"><Text fw={500} style={{ flex: 1 }}>useEffect(() =&gt; cleanup, [])</Text></Group>
              <Group gap="xs"><Text fw={500} style={{ flex: 1 }}>const [x, setX] = useState()</Text></Group>
              <Group gap="xs"><Text fw={500} style={{ flex: 1 }}>useRef()</Text></Group>
              <Group gap="xs"><Text fw={500} style={{ flex: 1 }}>useContext()</Text></Group>
              <Group gap="xs"><Text fw={500} style={{ flex: 1 }}>Custom Hooks</Text></Group>
            </Stack>
          </Paper>
        </Grid.Col>
      </Grid> */}

      <Paper p="lg" radius="md" style={{ backgroundColor: '#e7f5ff', border: '2px solid #0066cc' }}>
        <Title order={3} mb="md" style={{ color: '#003d99' }}>
          Winner: Hooks 
        </Title>
        <Text>
          <strong>Bottom line:</strong> Class components still work and aren't removed. But functional components with hooks are <strong>simpler, cleaner, more reusable</strong>, and the <strong>future of React</strong>. All new React features (Concurrent Mode, Server Components) are built around hooks — not classes.
        </Text>
      </Paper>

      <Title order={1} mb="lg" mt="xl">
        What is a Hook?
      </Title>

      <Text mb="md" style={{ fontSize: '16px', lineHeight: '1.6' }}>
        <strong>A Hook is a special functions</strong> that allow you to use state, lifecycle methods, and other React features in functional components. They were introduced in React 16.8 to provide an alternative to class components while maintaining all the power of React.
      </Text>

      <Title order={3} mt="lg" mb="md">
        Key Characteristics of Hooks:
      </Title>
      <Stack gap="md" mb="xl">
        <Group gap="sm">
          <CircleCheck size={24} color="var(--mantine-color-blue-6)" style={{ flexShrink: 0 }} />
          <div><strong>Function-based:</strong> Hooks are JavaScript functions that you call to add state and side effects to functional components</div>
        </Group>
        <Group gap="sm">
          <CircleCheck size={24} color="var(--mantine-color-blue-6)" style={{ flexShrink: 0 }} />
          <div><strong>Reusable Logic:</strong> Extract and reuse component logic without changing your component hierarchy</div>
        </Group>
        <Group gap="sm">
          <CircleCheck size={24} color="var(--mantine-color-blue-6)" style={{ flexShrink: 0 }} />
          <div><strong>Independent State:</strong> Each Hook call has its own isolated state, independent from other Hook calls</div>
        </Group>
        <Group gap="sm">
          <CircleCheck size={24} color="var(--mantine-color-blue-6)" style={{ flexShrink: 0 }} />
          <div><strong>Built-in & Custom:</strong> React provides built-in hooks (useState, useEffect, etc.) and you can create custom hooks</div>
        </Group>
      </Stack>

      <Title order={3} mt="lg" mb="md">
        Rules of Hooks (Must Follow):
      </Title>
      <Paper p="lg" radius="md" style={{ backgroundColor: '#ffe0e0', border: '2px solid #ff0000' }} mb="xl">
        <Stack gap="md">
          <Group gap="sm">
            <CircleX size={24} color="var(--mantine-color-red-6)" style={{ flexShrink: 0 }} />
            <div><strong>Only call Hooks at the top level</strong> <br/> Do NOT call hooks inside loops, conditions, or nested functions. They must be at the top level of your functional component.</div>
          </Group>
          <Group gap="sm">
            <CircleX size={24} color="var(--mantine-color-red-6)" style={{ flexShrink: 0 }} />
            <div><strong>Only call Hooks from React components</strong> — Call hooks from functional React components or custom hooks, NOT from regular JavaScript functions.</div>
          </Group>
        </Stack>
      </Paper>

      <Title order={3} mt="lg" mb="md">
        Why Use Hooks?
      </Title>
      <Grid gutter="lg" mb="xl">
        <Grid.Col span={{ base: 12, sm: 6 }}>
          <Paper p="lg" radius="md" style={{ backgroundColor: '#e8f5e9', border: '2px solid #4caf50' }}>
            <Title order={4} mb="md">Without Hooks (Class)</Title>
            <Stack gap="sm" style={{ fontSize: '14px' }}>
              <Text>❌ Complex boilerplate code</Text>
              <Text>❌ Difficult state management</Text>
              <Text>❌ Hard to reuse logic</Text>
              <Text>❌ `this` keyword confusion</Text>
              <Text>❌ Large component files</Text>
            </Stack>
          </Paper>
        </Grid.Col>
        <Grid.Col span={{ base: 12, sm: 6 }}>
          <Paper p="lg" radius="md" style={{ backgroundColor: '#e3f2fd', border: '2px solid #2196f3' }}>
            <Title order={4} mb="md">With Hooks (Functional)</Title>
            <Stack gap="sm" style={{ fontSize: '14px' }}>
              <Text>✅ Simple, readable code</Text>
              <Text>✅ Easy state management</Text>
              <Text>✅ Reusable logic via custom hooks</Text>
              <Text>✅ No `this` binding issues</Text>
              <Text>✅ Better code organization</Text>
            </Stack>
          </Paper>
        </Grid.Col>
      </Grid>

      <Title order={3} mt="lg" mb="md">
        Common Built-in Hooks:
      </Title>
      <Table striped highlightOnHover mb="xl">
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Hook Name</Table.Th>
            <Table.Th>Purpose</Table.Th>
            <Table.Th>Example</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          <Table.Tr>
            <Table.Td><code>useState</code></Table.Td>
            <Table.Td>Manage component state</Table.Td>
            <Table.Td><code>const [count, setCount] = useState(0)</code></Table.Td>
          </Table.Tr>
          <Table.Tr>
            <Table.Td><code>useEffect</code></Table.Td>
            <Table.Td>Handle side effects (API calls, subscriptions)</Table.Td>
            <Table.Td><code>useEffect(() =&gt; {'{}'}, [])</code></Table.Td>
          </Table.Tr>
          <Table.Tr>
            <Table.Td><code>useContext</code></Table.Td>
            <Table.Td>Access context values</Table.Td>
            <Table.Td><code>const theme = useContext(ThemeContext)</code></Table.Td>
          </Table.Tr>
          <Table.Tr>
            <Table.Td><code>useReducer</code></Table.Td>
            <Table.Td>Complex state logic management</Table.Td>
            <Table.Td><code>const [state, dispatch] = useReducer(reducer, initialState)</code></Table.Td>
          </Table.Tr>
          <Table.Tr>
            <Table.Td><code>useRef</code></Table.Td>
            <Table.Td>Access DOM nodes directly</Table.Td>
            <Table.Td><code>const inputRef = useRef(null)</code></Table.Td>
          </Table.Tr>
          <Table.Tr>
            <Table.Td><code>useMemo</code></Table.Td>
            <Table.Td>Memoize expensive calculations</Table.Td>
            <Table.Td><code>const memoized = useMemo(() =&gt; expensiveCalc(a, b), [a, b])</code></Table.Td>
          </Table.Tr>
          <Table.Tr>
            <Table.Td><code>useCallback</code></Table.Td>
            <Table.Td>Memoize function references</Table.Td>
            <Table.Td><code>const memoizedFn = useCallback(() =&gt; {'{}'}, [deps])</code></Table.Td>
          </Table.Tr>
        </Table.Tbody>
      </Table>

      <Title order={2} mt="xl" mb="md">
        Types of React Hooks
      </Title>
      
      <Title order={3} mt="lg" mb="md">
        1. State Hooks (useState, useReducer)
      </Title>
      <Text mb="md">
        State hooks like useState and useReducer enable functional components to manage state in a clean, efficient, and modular way.
      </Text>

      <Title order={4} mt="md" mb="sm">
        useState
      </Title>
      <Text mb="md">
        The useState hook is used to declare state variables in functional components. It allows you to read and update the state within the component.
      </Text>
      <pre style={{
        backgroundColor: '#f5f5f5',
        padding: '12px',
        borderRadius: '8px',
        overflow: 'auto',
        marginBottom: '16px',
        fontSize: '12px'
      }}>
        <code>{`const [state, setState] = useState(initialState);

// state: The current value of the state
// setState: A function used to update the state
// initialState: The initial value (can be primitive, object, or array)`}</code>
      </pre>

      <Title order={4} mt="md" mb="sm">
        useReducer
      </Title>
      <Text mb="md">
        The useReducer hook is a more advanced state management hook used for handling more complex state logic, often involving multiple sub-values or more intricate state transitions.
      </Text>
      <pre style={{
        backgroundColor: '#f5f5f5',
        padding: '12px',
        borderRadius: '8px',
        overflow: 'auto',
        marginBottom: '16px',
        fontSize: '12px'
      }}>
        <code>{`const [state, dispatch] = useReducer(reducer, initialState);

// state: The current state value
// dispatch: A function used to dispatch actions to update the state
// reducer: A function that defines how state changes based on actions
// initialState: The initial state value`}</code>
      </pre>

      <Title order={3} mt="lg" mb="md">
        2. Effect Hooks (useEffect, useLayoutEffect, useInsertionEffect)
      </Title>
      <Text mb="md">
        Effect hooks allow functional components to manage side effects in a structured and efficient manner.
      </Text>

      <Title order={4} mt="md" mb="sm">
        Types of Effect Hooks:
      </Title>
      <Stack gap="md" mb="md">
        <Group gap="sm">
          <CircleCheck size={20} color="var(--mantine-color-green-6)" style={{ flexShrink: 0 }} />
          <div><strong>useEffect</strong> — Handles common side effects like data fetching and subscriptions</div>
        </Group>
        <Group gap="sm">
          <CircleCheck size={20} color="var(--mantine-color-green-6)" style={{ flexShrink: 0 }} />
          <div><strong>useLayoutEffect</strong> — Runs synchronously after DOM updates</div>
        </Group>
        <Group gap="sm">
          <CircleCheck size={20} color="var(--mantine-color-green-6)" style={{ flexShrink: 0 }} />
          <div><strong>useInsertionEffect</strong> — Manages style injections before DOM mutations</div>
        </Group>
      </Stack>

      <Title order={4} mt="md" mb="sm">
        useEffect
      </Title>
      <Text mb="md">
        The useEffect hook allows functional components to handle side effects and replaces lifecycle methods like componentDidMount, componentDidUpdate, and componentWillUnmount. It runs side effects after rendering based on the dependency array.
      </Text>
      <pre style={{
        backgroundColor: '#f5f5f5',
        padding: '12px',
        borderRadius: '8px',
        overflow: 'auto',
        marginBottom: '16px',
        fontSize: '12px'
      }}>
        <code>{`useEffect(() => {
  // Side effect logic here
}, [dependencies]);

// Runs after rendering
// Re-runs based on changes in the dependency array`}</code>
      </pre>

      <Title order={4} mt="md" mb="sm">
        useLayoutEffect
      </Title>
      <Text mb="md">
        useLayoutEffect is used to measure or modify the layout before the browser paints the screen, ensuring smooth visual updates without flickering. It runs synchronously after DOM mutations but before the browser paints.
      </Text>
      <pre style={{
        backgroundColor: '#f5f5f5',
        padding: '12px',
        borderRadius: '8px',
        overflow: 'auto',
        marginBottom: '16px',
        fontSize: '12px'
      }}>
        <code>{`useLayoutEffect(() => {
  // Logic to manipulate layout or measure DOM elements
}, [dependencies]);

// Runs synchronously after DOM updates
// Before browser paint`}</code>
      </pre>

      <Title order={4} mt="md" mb="sm">
        useInsertionEffect
      </Title>
      <Text mb="md">
        useInsertionEffect is designed for injecting styles early, especially useful for server-side rendering (SSR) or styling libraries, ensuring styles are in place before the component is rendered visually.
      </Text>
      <pre style={{
        backgroundColor: '#f5f5f5',
        padding: '12px',
        borderRadius: '8px',
        overflow: 'auto',
        marginBottom: '16px',
        fontSize: '12px'
      }}>
        <code>{`useInsertionEffect(() => {
  // Logic to inject styles or manipulate stylesheets
}, [dependencies]);

// Runs before DOM mutations
// Best for style injection and CSS libraries`}</code>
      </pre>

      <Title order={3} mt="lg" mb="md">
        3. Context Hooks (useContext)
      </Title>
      <Text mb="md">
        The useContext hook allows functional components to directly access values from the React Context API without prop drilling.
      </Text>

      <Title order={4} mt="md" mb="sm">
        Key Benefits:
      </Title>
      <Stack gap="md" mb="md">
        <Group gap="sm">
          <CircleCheck size={20} color="var(--mantine-color-green-6)" style={{ flexShrink: 0 }} />
          <div><strong>Simplifies data sharing</strong> — Share data across the component tree without prop drilling</div>
        </Group>
        <Group gap="sm">
          <CircleCheck size={20} color="var(--mantine-color-green-6)" style={{ flexShrink: 0 }} />
          <div><strong>Eliminates manual prop passing</strong> — No need to pass props through multiple levels</div>
        </Group>
        <Group gap="sm">
          <CircleCheck size={20} color="var(--mantine-color-green-6)" style={{ flexShrink: 0 }} />
          <div><strong>Cleaner consumption</strong> — Makes context consumption cleaner and more readable</div>
        </Group>
      </Stack>

      <Title order={4} mt="md" mb="sm">
        How useContext Works:
      </Title>
      <Text mb="md">
        useContext allows you to consume context values, making it easier to share data across components without prop drilling. The Provider makes the context value accessible to all components below it in the component tree.
      </Text>

      <Title order={4} mt="md" mb="sm">
        Syntax:
      </Title>
      <pre style={{
        backgroundColor: '#f5f5f5',
        padding: '12px',
        borderRadius: '8px',
        overflow: 'auto',
        marginBottom: '16px',
        fontSize: '12px'
      }}>
        <code>{`const contextValue = useContext(MyContext);

// MyContext: The context object created with createContext()
// contextValue: The current value of that context
// Returns the value provided by the nearest <MyContext.Provider>`}</code>
      </pre>

      <Title order={4} mt="md" mb="sm">
        Key Points:
      </Title>
      <Stack gap="sm" mb="md">
        <Text>
          <strong>Context Object:</strong> The useContext hook takes a context object (MyContext) as an argument, which is created using React.createContext()
        </Text>
        <Text>
          <strong>Return Value:</strong> Returns the current value of that context from the nearest Provider in the component tree
        </Text>
        <Text>
          <strong>Provider Access:</strong> The contextValue will hold the value provided by the nearest &lt;MyContext.Provider&gt; in the component tree
        </Text>
        <Text>
          <strong>No Props Needed:</strong> Components can access context values directly without receiving them as props
        </Text>
      </Stack>

      <Title order={3} mt="lg" mb="md">
        4. Performance Hooks (useMemo, useCallback)
      </Title>
      <Text mb="md">
        Performance Hooks in React, like useMemo and useCallback, are used to optimize performance by avoiding unnecessary re-renders or recalculations.
      </Text>

      <Title order={4} mt="md" mb="sm">
        Types of Performance Hooks:
      </Title>
      <Stack gap="md" mb="md">
        <Group gap="sm">
          <CircleCheck size={20} color="var(--mantine-color-green-6)" style={{ flexShrink: 0 }} />
          <div><strong>useMemo</strong> — Caches computed values and recomputes only when dependencies change</div>
        </Group>
        <Group gap="sm">
          <CircleCheck size={20} color="var(--mantine-color-green-6)" style={{ flexShrink: 0 }} />
          <div><strong>useCallback</strong> — Memoizes functions so they're only recreated when dependencies change</div>
        </Group>
      </Stack>

      <Title order={4} mt="md" mb="sm">
        useMemo
      </Title>
      <Text mb="md">
        useMemo is a React hook that caches the result of an expensive calculation and recomputes it only when its dependencies change, improving performance by avoiding unnecessary recalculations.
      </Text>
      <pre style={{
        backgroundColor: '#f5f5f5',
        padding: '12px',
        borderRadius: '8px',
        overflow: 'auto',
        marginBottom: '16px',
        fontSize: '12px'
      }}>
        <code>{`const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);

// useMemo caches the computed value
// Recalculates only when a or b changes
// When other dependencies change, uses cached value`}</code>
      </pre>

      <Title order={4} mt="md" mb="sm">
        Key Points for useMemo:
      </Title>
      <Stack gap="sm" mb="md">
        <Text>
          <strong>Expensive Calculations:</strong> useMemo caches the result of computeExpensiveValue(a, b)
        </Text>
        <Text>
          <strong>Dependency Tracking:</strong> Recalculates the value only when a or b changes
        </Text>
        <Text>
          <strong>Performance Optimization:</strong> When other state changes, the calculation is not re-run, optimizing performance
        </Text>
        <Text>
          <strong>Selective Re-computation:</strong> Prevents unnecessary expensive computations on every render
        </Text>
      </Stack>

      <Title order={4} mt="md" mb="sm">
        useCallback
      </Title>
      <Text mb="md">
        useCallback is a React hook that memoizes functions so they are recreated only when their dependencies change, helping prevent unnecessary re-renders when functions are passed to child components.
      </Text>
      <pre style={{
        backgroundColor: '#f5f5f5',
        padding: '12px',
        borderRadius: '8px',
        overflow: 'auto',
        marginBottom: '16px',
        fontSize: '12px'
      }}>
        <code>{`const memoizedCallback = useCallback(() => { 
  doSomething(a, b); 
}, [a, b]);

// useCallback memoizes the function
// Function is recreated only when a or b changes
// Otherwise, returns the same function reference`}</code>
      </pre>

      <Title order={4} mt="md" mb="sm">
        Key Points for useCallback:
      </Title>
      <Stack gap="sm" mb="md">
        <Text>
          <strong>Function Memoization:</strong> Prevents creating new function instances on every render
        </Text>
        <Text>
          <strong>Dependency Tracking:</strong> Function is recreated only when dependencies change
        </Text>
        <Text>
          <strong>Child Component Optimization:</strong> Prevents unnecessary re-renders of child components that depend on function references
        </Text>
        <Text>
          <strong>Closure Stability:</strong> Maintains stable function reference across renders for use in dependency arrays
        </Text>
      </Stack>

      <Title order={3} mt="lg" mb="md">
        5. Resource Hooks (useRef)
      </Title>
      <Text mb="md">
        useRef is a React hook used to store mutable values or access DOM elements without triggering re-renders.
      </Text>

      <Title order={4} mt="md" mb="sm">
        Key Characteristics:
      </Title>
      <Stack gap="md" mb="md">
        <Group gap="sm">
          <CircleCheck size={20} color="var(--mantine-color-green-6)" style={{ flexShrink: 0 }} />
          <div><strong>Persists values across renders</strong> — Values remain unchanged across component re-renders without affecting the UI</div>
        </Group>
        <Group gap="sm">
          <CircleCheck size={20} color="var(--mantine-color-green-6)" style={{ flexShrink: 0 }} />
          <div><strong>Mutable object reference</strong> — Returns the same object reference on every render</div>
        </Group>
        <Group gap="sm">
          <CircleCheck size={20} color="var(--mantine-color-green-6)" style={{ flexShrink: 0 }} />
          <div><strong>No re-render trigger</strong> — Updating a ref does NOT trigger a re-render</div>
        </Group>
      </Stack>

      <Title order={4} mt="md" mb="sm">
        Common Use Cases:
      </Title>
      <Stack gap="sm" mb="md">
        <Text>
          <strong>DOM References:</strong> Accessing DOM elements directly (focus, select, trigger animations)
        </Text>
        <Text>
          <strong>Storing Mutable Values:</strong> Keeping track of interval IDs, timeout IDs, or previous values
        </Text>
        <Text>
          <strong>Keeping Instance Variables:</strong> Storing values that persist across renders like timers or request IDs
        </Text>
        <Text>
          <strong>Functional Closures:</strong> Maintaining reference to values without creating unnecessary re-renders
        </Text>
      </Stack>

      <Title order={4} mt="md" mb="sm">
        Syntax:
      </Title>
      <pre style={{
        backgroundColor: '#f5f5f5',
        padding: '12px',
        borderRadius: '8px',
        overflow: 'auto',
        marginBottom: '16px',
        fontSize: '12px'
      }}>
        <code>{`const refContainer = useRef(initialValue);

// refContainer: An object with a current property
// refContainer.current: Holds the actual value
// Does NOT trigger re-render when updated`}</code>
      </pre>

      <Title order={4} mt="md" mb="sm">
        Key Points for useRef:
      </Title>
      <Stack gap="sm" mb="md">
        <Text>
          <strong>Mutable Value Storage:</strong> countRef can hold mutable count value that persists across renders
        </Text>
        <Text>
          <strong>No Re-render on Update:</strong> When countRef is updated, it does NOT trigger a component re-render
        </Text>
        <Text>
          <strong>Manual Re-render Trigger:</strong> To display updated ref values, you need useState to trigger re-renders
        </Text>
        <Text>
          <strong>Access via .current:</strong> Always access ref values through the .current property (refContainer.current)
        </Text>
        <Text>
          <strong>Stable Reference:</strong> The ref object itself remains the same across renders, only the .current value changes
        </Text>
      </Stack>

      <Title order={3} mt="lg" mb="md">
        6. Custom Hooks
      </Title>
      <Text mb="md">
        Custom Hooks are user-defined functions that encapsulate reusable logic, enhancing code reusability and readability by sharing behavior between components.
      </Text>

      <Title order={4} mt="md" mb="sm">
        Key Benefits:
      </Title>
      <Stack gap="md" mb="md">
        <Group gap="sm">
          <CircleCheck size={20} color="var(--mantine-color-green-6)" style={{ flexShrink: 0 }} />
          <div><strong>Code Reusability</strong> — Extract logic from one component and use it across multiple components</div>
        </Group>
        <Group gap="sm">
          <CircleCheck size={20} color="var(--mantine-color-green-6)" style={{ flexShrink: 0 }} />
          <div><strong>Improved Readability</strong> — Cleaner component code by abstracting complex logic into custom hooks</div>
        </Group>
        <Group gap="sm">
          <CircleCheck size={20} color="var(--mantine-color-green-6)" style={{ flexShrink: 0 }} />
          <div><strong>Easier Testing</strong> — Test custom hooks independently from components</div>
        </Group>
        <Group gap="sm">
          <CircleCheck size={20} color="var(--mantine-color-green-6)" style={{ flexShrink: 0 }} />
          <div><strong>Logic Organization</strong> — Group related state and side effect logic together</div>
        </Group>
      </Stack>

      <Title order={4} mt="md" mb="sm">
        Naming Convention:
      </Title>
      <Text mb="md">
        Custom hooks must follow the naming convention of starting with "use" (e.g., useWidth, useFetch, useLocalStorage). This tells React and other developers that the function is a hook and should follow hook rules.
      </Text>

      <Title order={4} mt="md" mb="sm">
        Example: Creating a Custom Hook (useWidth)
      </Title>
      <pre style={{
        backgroundColor: '#f5f5f5',
        padding: '12px',
        borderRadius: '8px',
        overflow: 'auto',
        marginBottom: '16px',
        fontSize: '12px'
      }}>
        <code>{`// useWidth.js - Custom Hook
import { useState, useEffect } from "react";

function useWidth() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    
    // Cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return width;
}

export default useWidth;`}</code>
      </pre>

      <Title order={4} mt="md" mb="sm">
        Using the Custom Hook:
      </Title>
      <pre style={{
        backgroundColor: '#f5f5f5',
        padding: '12px',
        borderRadius: '8px',
        overflow: 'auto',
        marginBottom: '16px',
        fontSize: '12px'
      }}>
        <code>{`// App.js - Using the Custom Hook
import React from "react";
import useWidth from "./useWidth";

function App() {
  const width = useWidth();
  
  return <h1>Window Width: {width}px</h1>;
}

export default App;`}</code>
      </pre>

      <Title order={4} mt="md" mb="sm">
        Key Points for Custom Hooks:
      </Title>
      <Stack gap="sm" mb="md">
        <Text>
          <strong>Encapsulation:</strong> Custom hooks encapsulate the logic for tracking window's width in one reusable function
        </Text>
        <Text>
          <strong>Reduces Redundancy:</strong> Eliminates code duplication by allowing the same logic to be reused across multiple components
        </Text>
        <Text>
          <strong>Composition:</strong> Custom hooks can be composed of built-in hooks (useState, useEffect, useContext, etc.)
        </Text>
        <Text>
          <strong>Stateful Logic:</strong> Each call to a custom hook is independent and maintains its own state
        </Text>
        <Text>
          <strong>Sharing Behavior:</strong> Share complex state and side-effect logic between components without rendering changes
        </Text>
        <Text>
          <strong>Hook Rules Apply:</strong> Custom hooks must follow the Rules of Hooks (only call hooks at top level, not conditionally)
        </Text>
      </Stack>

      <Title order={4} mt="md" mb="sm">
        Common Custom Hook Examples:
      </Title>
      <Stack gap="sm" mb="xl">
        <Text>
          <strong>useLocalStorage</strong> — Manages state that persists in browser's local storage
        </Text>
        <Text>
          <strong>useFetch</strong> — Handles data fetching with loading, error, and data states
        </Text>
        <Text>
          <strong>useForm</strong> — Manages form state, validation, and submission
        </Text>
        <Text>
          <strong>usePrevious</strong> — Keeps track of the previous value of a prop or state
        </Text>
        <Text>
          <strong>useAsync</strong> — Manages asynchronous operations with status and error handling
        </Text>
        <Text>
          <strong>useDebounce</strong> — Debounces a value for performance optimization
        </Text>
      </Stack>
    </Container>
  );
}
