import styles from '../features/Design.module.css'
import { useState } from 'react'
import { RenderInfo } from './RenderInfo'


export const Select = () => {
    const [selectedValues, setSelectedValues] = useState({
        name: '',
        gender: '',
        species: '',
        status: ''
    })

 
    const handleInput = (e) => {
        const {name, value} = e.target;
        setSelectedValues(prevValues => ({
            ...prevValues,
            [name]: value
        }));
    };

    return (
        <div>
            <div className={styles.selectContainer}>
                <div className={styles.selects}>
                    <div className={styles.labelAndSelect}>
                    <label htmlFor="name">By name</label>
                    <select name="name" id="name" onChange={handleInput}>
                        <option value="all"></option>
                        <option value="a-z">A-Z</option>
                        <option value="z-a">Z-A</option>
                    </select>
                    </div>
                    <div className={styles.labelAndSelect}>
                    <label htmlFor="gender">By gender</label>
                    <select name="gender" id="gender" onChange={handleInput}>
                        <option value="all">All</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="genderless">Genderless</option>
                        <option value="unknown">Unknown</option>
                    </select>
                    </div>
                    <div className={styles.labelAndSelect}>
                    <label htmlFor="species">By species</label>
                    <select name="species" id="species" onChange={handleInput}>
                        <option value="all">All</option>
                        <option value="human">Human</option>
                        <option value="alien">Alien</option>
                        <option value="humanoid">Humanoid</option>
                        <option value="mythological creature">Mythological Creature</option>
                        <option value="animal">Animal</option>
                        <option value="robot">Robot</option>
                    </select>
                    </div>
                    <div className={styles.labelAndSelect}>
                    <label htmlFor="status">By status</label>
                    <select name="status" id="status" onChange={handleInput}>
                        <option value="all">All</option>
                        <option value="alive">Alive</option>
                        <option value="dead">Dead</option>
                        <option value="unknown">Unknown</option>
                    </select>
                    </div>
                </div>
            </div>
            <RenderInfo selectedValues={selectedValues} />
        </div>
    )
}