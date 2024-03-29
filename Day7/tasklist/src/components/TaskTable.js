import React from 'react'

export default function TaskTable(props) {

  // console.log(props);
  function toggleTaskComplete(task) {
    task.complete = !task.complete;
    props.onTaskUpdated(task);
  }
  function onTaskRemove(task) {
    props.onTaskRemove(task);
  }
  return (
    <div>
      <table className="table mt-4">
        <thead>
          <tr>
            <th>Name</th>
            <th>Complete</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            props.tasks.map((task)=>
              <tr key={task.id}>
                <td>{task.name}</td>
                <td>{task.complete ? 'Complete' : 'Not Complete'}</td>
                <td>
                  <button onClick={(e)=>toggleTaskComplete(task)} className='btn btn-primary btn-sm'>Toggle Complete</button>
                  <button onClick={(e)=>onTaskRemove(task)} className='btn btn-primary btn-sm ms-2'>Remove Task</button>
                </td>
              </tr>
            )
          }
        </tbody>
      </table>
    </div>
  )
}
