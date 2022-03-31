import React, {useEffect, useState} from "react";
import { getData } from "../utils";
import styles from './StudentData.css';
import StudentDetail from "./StudentDetail";

function StudentData() {
    const [studentData, setStudentData] = useState([]);

    useEffect(() => {
        getData()
        .then((content) => setStudentData(content))
    }, []);
    
    console.log(studentData?.students);
    return (
        <>
        <ul className={styles.studentUL}>
            {studentData.students?.map((student) => (
                <li key={student.id} className={styles.studentLI}>
                    <StudentDetail {...student} />
                </li>
      ))}
    </ul>
        </>
    );

};

export default StudentData;

