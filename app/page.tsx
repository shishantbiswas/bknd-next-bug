"use client"

import { useEntityQuery } from "bknd/client";

export default function Home() {
  const { data: todos, isLoading } = useEntityQuery("todos");
  
  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <ul>
      {todos?.map((todo) => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </ul>
  );
}