import React from "react";
import PropTypes from 'prop-types';
import styles from './StudentDetail.css';

function StudentDetail({ id, pic, firstName, lastName, email, company, skill, grades}) {

    const average = (array) => array.reduce((a, b) => a + b) / array.length;

    var results = grades.map(Number)

    //console.log("grades", results);
    return (
        <>
        <div className={styles.li}>
            <img className={styles.img}  alt={id} src={pic}></img>
            <h1 className={styles.name}>{firstName} {lastName}</h1>
            <p className={styles.email}>Email: {email}</p>
            <p className={styles.company}>Company: {company}</p>
            <p className={styles.skill}>Skill: {skill}</p>
            <p className={styles.average}>Average: {average(results)}%</p>
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