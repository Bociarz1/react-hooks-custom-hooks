import { useState } from "react";

function useChangeDocumentTitle() {
  const [name, setName] = useState("")
  const onChangeHandler = (e) => {
    setName(e.target.value)
  }
  const clickHandler = () => {
    document.title = name
  }
  return [name, onChangeHandler, clickHandler]
}

export default useChangeDocumentTitle;