import React, { Component } from 'react'
import { BsFillTrashFill ,BsCheckCircle} from 'react-icons/bs';

export class Todo extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             task:['todo','some'],
             input:"",
             strike:false
             
        }
    }


    
    render() {
        return (
            <div >
                <div className="header">
                <h1 >Tasks</h1> 
                <input value={this.state.input} onChange={this.Changevalue}/>
                <button className="addbtn" onClick={this.addTask}>add task</button>  
                </div>
                
                <ul>
                    {this.state.task.map((task,i)=>
                        <li key={i}>
                            <BsCheckCircle className="checked" onClick={()=>this.addStrike(i)}/>
                          <BsFillTrashFill className="trash" onClick={()=>this.deleteTask(i)}/> 
                          <div className={this.state.strike ? "strike" :""}>{task}</div>
                        </li>
                        )}
                </ul>  
                
          
            </div>
        )
    }

    addStrike=(index)=>{
    this.setState.task.map((index)=>this.state.task(index).strike)
    }

    deleteTask=(index)=>{
        this.setState(state=>{
            const Task= [...state.task]
            Task.splice(index,1)
            return{
                task:Task
                
            }
        })
    }

    addTask=(state)=>{
        this.setState(state=>({
            task:[...state.task,state.input],
            input:"",
            
        }))
    }

    Changevalue=(event)=>{
        this.setState({
            input:event.target.value,
            
        })
    }
}

export default Todo
