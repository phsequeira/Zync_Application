import React, { useState } from "react";
import './StudentDetail.css';


function StudentDetail({ student, handleTag, index}) {

    const [open, setOpen] = useState(true);
    const [toggleButton, setButton] = useState('+')
    
    const toggle = () => {
        setOpen(!open)
        if(toggleButton === '+') {
            setButton('-')
        } 
        if(toggleButton === '-') {
            setButton('+')
        }
    };

    const addTag = e => {
        if (e.key === 'Enter' && e.target.value !== '') {
            let value = e.target.value
            handleTag(index, value)
            e.target.value = '';
        }
    };

    const average = (array) => array.reduce((a, b) => a + b) / array.length;

    var results = student.grades.map(Number)
    

    return (
        <>
        <div className='li'>
            <img className='img'  alt={student.id} src={student.pic}></img>
            <button onClick={toggle} className='togleButton'>{toggleButton}</button>
            <div className="info">
                <h1 className='name'>{student.firstName} {student.lastName}</h1>
                <p className='email'>Email: {student.email}</p>
                <p className='company'>Company: {student.company}</p>
                <p className='skill'>Skill: {student.skill}</p>
                <p className='average'>Average: {average(results)}%</p>
            </div>
                <div className='toggle' hidden={open}>
                    <p className='grades'>Test 1: {student.grades[0]}%</p>
                    <p className='grades'>Test 2: {student.grades[1]}%</p>
                    <p className='grades'>Test 3: {student.grades[2]}%</p>
                    <p className='grades'>Test 4: {student.grades[3]}%</p>
                    <p className='grades'>Test 5: {student.grades[4]}%</p>
                    <p className='grades'>Test 6: {student.grades[5]}%</p>
                    <p className='grades'>Test 7: {student.grades[6]}%</p>
                    <p className='grades'>Test 8: {student.grades[7]}%</p>
                </div>
            <div className='tag'>
                <br />
                <ul>
                    {student.tags?.map((tag, index) => (
                        <li key={index} className='tagLI'>
                            <span className='tagName'>{tag}</span>
                        </li>
                    ))}
                </ul>
                <input
                    className='tagInput'
                    type='text'
                    onKeyUp={e => e.key === 'Enter' ? addTag(e) : null}
                    placeholder="Add Tag"
                />
            </div>
        </div>
        </>
    )
};


export default StudentDetail;