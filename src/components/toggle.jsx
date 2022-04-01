import React, { useState } from "react";
import styles from './toggle.css';

function Tags() {
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

       return (
            <div className={styles.tag}>
                <ul>
                    {tags.map((tag, index) => (
                        <li key={index} className={styles.tagLI}>
                            <span className={styles.tagName}>{tag}</span>
                            <span className={styles.removeTag} onClick={() => removeTags(index)}>CliCK THIS TO CLOSe</span>
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
        )
    };

export default Tags();