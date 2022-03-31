import React, {useEffect, useState} from "react";
import { getData } from "../utils";
import styles from './StudentData.css';
import StudentDetail from "./StudentDetail";

function StudentData() {
    const [studentData, setStudentData] = useState([]);
    const [studentSearch, setStudentSearch] = useState('');


    const displayData = async () => {
        const data = await getData()
        setStudentData(data.students)

    }
    useEffect(() => {
        displayData();
    }, []);
    
    const searchStudents = (students) => {
        return students.filter((student) =>
        [student.firstName, student.lastName, `${student.firstName} ${student.lastName}`].some(search => search.toLowerCase().includes(studentSearch.toLowerCase())));
    }

    return (
        <>
        <div>
        <input 
            type='search'
            placeholder="Search for Student"
            value={studentSearch}
            onChange={(e) => setStudentSearch(e.target.value)} />
        <ul className={styles.studentUL}>
            {studentData && searchStudents(studentData).map((student) => (
                <li key={student.id} className={styles.studentLI}>
                    <StudentDetail {...student} />
                </li>
      ))}
    </ul>
    </div>
        </>
    );

};

export default StudentData;
