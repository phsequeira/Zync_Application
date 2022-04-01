import React, { useState } from "react";
import PropTypes from 'prop-types';
import styles from './StudentDetail.css';


function StudentDetail({ id, pic, firstName, lastName, email, company, skill, grades}) {

    const [open, setOpen] = useState(true);
    const toggle = () => setOpen(!open);

    const [tags, setTags] = useState([]);

    const addTag = e => {
        if (e.key === 'Enter' && e.target.value !== '') {
            setTags([...tags, e.target.value]);
            e.target.value = '';
        }
    }

    const removeTags = indexToRemove => {
		setTags([...tags.filter((_, index) => index !== indexToRemove)]);
	};

    const average = (array) => array.reduce((a, b) => a + b) / array.length;

    var results = grades.map(Number)

    //console.log("is open", open);
    return (
        <>
        <div className={styles.li}>
            <img className={styles.img}  alt={id} src={pic}></img>
            <h1 className={styles.name}>{firstName} {lastName}</h1>
            <p className={styles.email}>Email: {email}</p>
            <p className={styles.company}>Company: {company}</p>
            <p className={styles.skill}>Skill: {skill}</p>
            <p className={styles.average}>Average: {average(results)}%</p>
                <div className={styles.toggle} hidden={open}>
                    <p className={styles.grades}>Test 1: {grades[0]}%</p>
                    <p className={styles.grades}>Test 2: {grades[1]}%</p>
                    <p className={styles.grades}>Test 3: {grades[2]}%</p>
                    <p className={styles.grades}>Test 4: {grades[3]}%</p>
                    <p className={styles.grades}>Test 5: {grades[4]}%</p>
                    <p className={styles.grades}>Test 6: {grades[5]}%</p>
                    <p className={styles.grades}>Test 7: {grades[6]}%</p>
                    <p className={styles.grades}>Test 8: {grades[7]}%</p>
                </div>
            <button onClick={toggle} className={styles.togleButton}>open</button>

            <div className={styles.tag}>
                <ul>
                    {tags.map((tag, index) => (
                        <li key={index} className={styles.tagLI}>
                            <span className={styles.tagName}>{tag}</span>
                            <span className={styles.removeTag} onClick={() => removeTags(index)}>CliCK THIS TO CLOSRE</span>
                        </li>
                    ))}
                </ul>
                <input
                    className={styles.tagInput}
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