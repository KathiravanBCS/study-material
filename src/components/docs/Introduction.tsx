import { Container, Title, Text, Stack, SimpleGrid, Card, ThemeIcon, Group, List } from '@mantine/core';
import { Code, BrandReact, Books, Bulb } from 'tabler-icons-react';

export function Introduction() {
  return (
    <Container size="md">
      <Title order={1} mb="lg">
        Web Development Study Guide
      </Title>

      <Text c="dimmed" mb="xl">
        Welcome to your comprehensive web development study application. This is an
        interactive learning platform that takes you across the full web development
        stack — from core language fundamentals to modern UI frameworks — with runnable
        examples and clear explanations.
      </Text>

      <Title order={2} mt="xl" mb="md">
        What This Application Covers
      </Title>
      <Text mb="lg">
        Rather than focusing on a single topic, this app brings the essential pieces of
        front-end web development together in one place. Use the sidebar to explore each
        area at your own pace.
      </Text>

      <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="md" mb="xl">
        <Card withBorder radius="md" padding="lg">
          <Group mb="xs">
            <ThemeIcon size={36} radius="md" variant="light" color="yellow">
              <Code size={20} />
            </ThemeIcon>
            <Title order={4}>JavaScript</Title>
          </Group>
          <Text size="sm" c="dimmed">
            The language of the web — covering Basics, Advanced ES6+ features, and
            Functional Programming concepts.
          </Text>
        </Card>

        <Card withBorder radius="md" padding="lg">
          <Group mb="xs">
            <ThemeIcon size={36} radius="md" variant="light" color="blue">
              <BrandReact size={20} />
            </ThemeIcon>
            <Title order={4}>React</Title>
          </Group>
          <Text size="sm" c="dimmed">
            Building interactive user interfaces — Hooks, component lifecycle, and props
            &amp; props drilling.
          </Text>
        </Card>
      </SimpleGrid>

      <Title order={2} mt="xl" mb="md">
        Learning Tracks
      </Title>
      <Stack gap="md" mb="xl">
        <div>
          <Group gap="xs" mb={4}>
            <Books size={18} />
            <Text fw={600}>JavaScript</Text>
          </Group>
          <List size="sm" withPadding>
            <List.Item><strong>Basics</strong> — variables, data types, operators, control flow, loops, functions, scope, error handling, closures</List.Item>
            <List.Item><strong>Advanced</strong> — arrow functions, closures, objects, array methods, destructuring, spread &amp; rest, shorthand</List.Item>
            <List.Item><strong>Functional Programming</strong> — pure functions, side effects, immutability, higher-order functions, currying &amp; composition</List.Item>
          </List>
        </div>
        <div>
          <Group gap="xs" mb={4}>
            <BrandReact size={18} />
            <Text fw={600}>React</Text>
          </Group>
          <List size="sm" withPadding>
            <List.Item>Hooks &amp; the complete hooks guide</List.Item>
            <List.Item>Component lifecycle</List.Item>
            <List.Item>Props &amp; props drilling</List.Item>
          </List>
        </div>
      </Stack>

      <Title order={2} mt="xl" mb="md">
        How to Use This App
      </Title>
      <Group mb="xl" align="flex-start" wrap="nowrap">
        <ThemeIcon size={36} radius="md" variant="light" color="grape">
          <Bulb size={20} />
        </ThemeIcon>
        <Text>
          Pick a topic from the sidebar on the left. Each lesson combines explanations,
          comparison tables, and code samples — many with a <strong>Run Example</strong> button
          so you can see the output instantly. Learn at your own pace and jump between
          topics freely.
        </Text>
      </Group>

      <Text c="dimmed" mt="xl">
        More topics across the web development stack will continue to be added over time.
      </Text>
    </Container>
  );
}
