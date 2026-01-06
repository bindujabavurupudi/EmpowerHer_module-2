import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { useState } from "react"

export default function TodoApp() {
  const [task, setTask] = useState("")
  const [todos, setTodos] = useState([])

  const addTodo = () => {
    setTodos([...todos, { text: task, done: false }])
    setTask("")
  }

  const toggleTodo = (i) => {
    const updated = [...todos]
    updated[i].done = !updated[i].done
    setTodos(updated)
  }

  return (
    <Card className="max-w-md mx-auto mt-6">
      <CardContent className="space-y-4">
        <div className="flex gap-2">
          <Input
            placeholder="New Todo"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
          <Button onClick={addTodo}>Add</Button>
        </div>

        {todos.map((todo, i) => (
          <div key={i} className="flex items-center gap-2">
            <Checkbox
              checked={todo.done}
              onCheckedChange={() => toggleTodo(i)}
            />
            <span className={todo.done ? "line-through" : ""}>
              {todo.text}
            </span>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
