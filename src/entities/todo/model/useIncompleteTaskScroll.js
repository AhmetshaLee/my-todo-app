import { useRef, useMemo } from "react"

const useIncompleteTaskScroll = (tasks) => {
  const firstIncompleteTaskRef = useRef(null)
  const firstIncompleteTaskId = useMemo(() => {
    return tasks.find((task) => !task.isDone)?.id
  }, [tasks])

  return {
    firstIncompleteTaskId,
    firstIncompleteTaskRef,
  }
}

export default useIncompleteTaskScroll
