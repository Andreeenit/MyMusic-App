/* eslint-disable no-unused-vars */
import React from 'react'

const MusicList = ({group, previous, next}) => {
    console.log("group:", group)


    return (
        <div className='content'>
            <div className='music-container'>
                 <div className='music-wrapper'>
                    {group && (
                        group.map((groups, index) => {
                            return (
                                 <li key={index} className='music-groups'>
                                    {groups.name}
                                </li>
                                )
                            })
                            )}
                </div>
                <button onClick={previous} className='previous-button'>Previous</button>
                <button onClick={next} className='next-button'>Next</button>
             </div>
     </div>
    )
}

export default MusicList
