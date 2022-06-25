import { useState,useRef } from "react";
import agendas from "./agendas";

let topicArr = [];
export default function AddAgenda(){
    const [title,setTitle] = useState("")
    const [description,setDescription] = useState("")
    const [topic,setTopic] = useState("")
    const titleRef = useRef();
    const descriptionRef = useRef();
    const topicRef = useRef();
    const topicsRef = useRef();
    const submitRef = useRef();
    const addTopicRef = useRef();
    function change(e){
        submitRef.current.removeAttribute("disabled");
        if(e.id === "title"){
            setTitle(prevState=>{
                prevState = e.value;
                return prevState;
            })
        }
        else if(e.id=== "description"){
            setDescription(prevState=>{
                prevState = e.value;
                return prevState;
            })
        }
        else{
            addTopicRef.current.removeAttribute("disabled");
            setTopic(prevState=>{
                prevState = e.value;
                return prevState;
            })
        }

    }
    function addTopic(e){
        e.preventDefault();
        if(topic){
            topicArr.push(topic)
            setTopic(prevState=>{
                prevState = "";
                return prevState;
            })
        }
        else{
            topicRef.current.style.display = "block";
        }

    }
    function validation(e){
        e.preventDefault();
        if(title && description && topicArr){
            let out = {
                title: title,
                description: description,
                topic: topicArr
            }
            agendas.push(out);
            topicArr = []
        }
        else{
            if(!title){
                titleRef.current.style.display = "block";
            }
            else if(!description){
                descriptionRef.current.style.display = "block";
            }
            else if(!topicArr){
                topicsRef.current.style.display = "block";
            }
        }
    }
    return (<div className="form-container">
        <form id="add-agenda">
        <div className="input-field">
            <label for="title">
                Title
                <br></br>
                <input 
                id="title"
                type="text"
                name="title"
                placeholder="Enter the title"
                onChange={e=>change(e.target)}
                value={title}
                />
            </label>
            <br></br>
            <span ref={titleRef}>Title is required</span>
        </div>

        <div className="input-field">
            <label for="description">
                Description
                <br></br>
                <input 
                id="description"
                type="text"
                name="description"
                placeholder="Enter the description"
                onChange={e=>change(e.target)}
                value={description}
                />
            </label>
            <br></br>
            <span ref={descriptionRef}>Description is required</span>
        </div>

        <div className="input-field">
            <label for="topic">
                Topic
                <br></br>
                <input 
                id="topic"
                type="text"
                name="topic"
                placeholder="Enter the topic"
                onChange={e=>change(e.target)}
                value={topic}
                />
            </label>
            <br></br>
            <span ref={topicsRef}>No topics added</span>
            <span ref={topicRef}>Topic is required</span>
        </div>

            <button  ref={addTopicRef} id="add-topic" onClick={e=>addTopic(e)} disabled>
                + Add Topic
            </button>
            <button ref={submitRef} id="submit" type="submit" onClick={e=>validation(e)} disabled>
                Submit Agenda
            </button>
        </form>
    </div>)
}