import React, { useState } from "react";
import PropTypes from 'prop-types';
import './StudentDetail.css';



function StudentDetail({ index, id, pic, firstName, lastName, email, company, skill, grades, handleTag}) {

    const [open, setOpen] = useState(true);
    const toggle = () => setOpen(!open);
    const [tagArray, setTagArray] = useState([])

    const addTag = e => {
        if (e.key === 'Enter' && e.target.value !== '') {
            let value = e.target.value
            setTagArray([...tagArray, e.target.value])
            handleTag(index, value)
            e.target.value = '';
        }
    };

    const average = (array) => array.reduce((a, b) => a + b) / array.length;

    var results = grades.map(Number)

    return (
        <>
        <div className='li'>
            <img className='img'  alt={id} src={pic}></img>
            <button onClick={toggle} className='togleButton'>+</button>
            <div className="info">
                <h1 className='name'>{firstName} {lastName}</h1>
                <p className='email'>Email: {email}</p>
                <p className='company'>Company: {company}</p>
                <p className='skill'>Skill: {skill}</p>
                <p className='average'>Average: {average(results)}%</p>
            </div>
                <div className='toggle' hidden={open}>
                    <p className='grades'>Test 1: {grades[0]}%</p>
                    <p className='grades'>Test 2: {grades[1]}%</p>
                    <p className='grades'>Test 3: {grades[2]}%</p>
                    <p className='grades'>Test 4: {grades[3]}%</p>
                    <p className='grades'>Test 5: {grades[4]}%</p>
                    <p className='grades'>Test 6: {grades[5]}%</p>
                    <p className='grades'>Test 7: {grades[6]}%</p>
                    <p className='grades'>Test 8: {grades[7]}%</p>
                </div>
            

            <div className='tag'>
                <br />
                <ul>
                    {tagArray?.map((tag, index) => (
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

StudentDetail.propTypes ={
    id: PropTypes.string.isRequired,
    pic: PropTypes.string.isRequired,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    skill: PropTypes.string.isRequired,
    grades: PropTypes.array.isRequired
};



export default StudentDetail;