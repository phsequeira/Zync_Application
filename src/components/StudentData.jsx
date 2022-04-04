import React, {useEffect, useState} from "react";
import { getData } from "../utils";
import './StudentData.css';
import StudentDetail from "./StudentDetail";


function StudentData() {
    const [studentData, setStudentData] = useState([]);
    const [studentSearch, setStudentSearch] = useState('');
    const [tagSearch, setTagSearch] = useState('');

    const displayData = async () => {
        const data = await getData()
        setStudentData(data.students)
    }

    useEffect(() => {
        displayData();
    }, []); 

    
    const handleSearch = (students) => {
        
        if (tagSearch !== '' && studentSearch !== '') {  
            return students.filter((student) =>
            [student.firstName, student.lastName, `${student.firstName} ${student.lastName}`].some(search => search.toLowerCase().includes(studentSearch.toLowerCase()))).filter(student => {
                if (student.tags && tagSearch !== '') {
                    for (let i = 0; i < student.tags.length; i++) {
                        if(student.tags[i].toLowerCase().includes(tagSearch.toLowerCase())) {
                            return true;
                        }
                    }
                    return false;
                }
            })

        }
        if (tagSearch !== '') {
            return students.filter((student) =>{
                if (student.tags && tagSearch !== '') {
                    for (let i = 0; i < student.tags.length; i++) {
                        if(student.tags[i].toLowerCase().includes(tagSearch.toLowerCase())) {
                            return true;
                        }
                    }
                    return false;
                }
            })
        }

        if (studentSearch !== '') {
            return students.filter((student) =>
            [student.firstName, student.lastName, `${student.firstName} ${student.lastName}`].some(search => search.toLowerCase().includes(studentSearch.toLowerCase())))
        }
        return studentData
    }

    const handleTag = (index, tag) => {
        let data= studentData
        let currentTags = []
        if( data[index].hasOwnProperty('tags')) { currentTags = data[index].tags }
        console.log('current', currentTags);
        data[index].tags = [...currentTags, tag]
        console.log(data[index].tags);
        setStudentData(data)   
    }

    useEffect(() => {
        setStudentData(studentData)
    }, [studentData])

    return (
        <div className="background">
            <div className="main">
                <input 
                    className="studentSearch"
                    type='search'
                    placeholder="Search by name"
                    value={studentSearch}
                    onChange={(e) => setStudentSearch(e.target.value)} />
                <br />
                <input 
                    className="tagSearch"
                    type='search'
                    placeholder="Search by Tag"
                    value={tagSearch}
                    onChange={(e) => setTagSearch(e.target.value)} />
                <ul className='studentUL'>
                    {studentData && handleSearch(studentData).map((student, index) => (
                    <li key={student.id} className='studentLI'>
                        <StudentDetail student={student} tags={student?.tags} index={index} handleTag={handleTag}/>
                    </li>

                    ))}
                </ul>

            </div>
        </div>
    );

};

export default StudentData;
