import React from 'react'
import CodeEditor from '../../components/Code/CodeEditor'

const PostForm = (props) => {
  return (
    <form className="create-form" onSubmit={props.handleCreatePost}>
      <div className="question-prompt">
        <label>Enter your question</label>
      </div>

      <input
        required
        name="question"
        autoComplete='off'
        placeholder="Question"
        value={props.question}
        onChange={(e) => props.setQuestion(e.target.value)}
      />

      <div className="border"></div>

      <div className="code-prompt">
        <label>Codeblock</label>
        <button type="button" id="plus-button" onClick={() => props.setToggleCode(!props.toggleCode)}>+</button>
      </div>
      
      {props.toggleCode &&
        <CodeEditor
          codeblock={props.codeblock}
          setCodeblock={props.setCodeblock}
        ></CodeEditor>
      }

      <div className="border"></div>

      <button type="submit">Submit</button>
    </form>
  )
}

export default PostForm